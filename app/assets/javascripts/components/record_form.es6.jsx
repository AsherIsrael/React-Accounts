class RecordForm extends React.Component {
	constructor() {
		super();
		this.setState = this.setState.bind(this);
		this.valid = this.valid.bind(this);
		this.state = {
			title: '',
			date: '',
			amount: null,
			id: null
		};
	}
	handleChange(e){
		var name = e.target.name;
		this.setState({[name]: e.target.value});
		
	}
	valid(){
		var valid = Boolean(this.state.date && this.state.title && this.state.amount);
		return valid;
	}
	handleSubmit(e){
		e.preventDefault();

		
		var thisForm = this;
		$.ajax({
			accepts: {
				JSON: 'application/json'
			},
			type: "POST",
			url: '/records',
			data: {
				authenticity_token: $('meta[name=csrf-token]').attr('content'),
				title: this.state.title,
				date: this.state.date,
				amount: parseFloat(this.state.amount)
			},
			dataType: 'JSON'
		}).done(function(response){
			thisForm.setState({id: response.id});
			thisForm.props.handleNewRecord(thisForm.state);
			thisForm.setState({
				title: '',
				date: '',
				amount: null,
				id: null
			})
		})
	}
	render(){
		return(
			<form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<input type="date" className="form-control" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange.bind(this)}/>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}/>
				</div>
				<div className="form-group">
					<input type="number" step="0.01" className="form-control" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.handleChange.bind(this)}/>
				</div>
				<button type="submit" className="btn btn-primary" disabled={!(this.valid())}>Create Record</button>
			</form>
		);
	}
}
RecordForm.propTypes = {
	title: React.PropTypes.string,
	date: React.PropTypes.string,
	amount: React.PropTypes.number,
	handleNewRecord: React.PropTypes.func.isRequired
};