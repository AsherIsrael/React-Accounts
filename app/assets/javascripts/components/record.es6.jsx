class Record extends React.Component {
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.setState = this.setState.bind(this);
		this.recordRow = this.recordRow.bind(this);
		this.recordForm = this.recordForm.bind(this);
		this.state = {
			edit: false,
			record: this.props.record
		};
	}
	handleToggle(e){
		e.preventDefault();
		this.setState({edit: !this.state.edit})
	}
	handleDelete(e){
		e.preventDefault();
		$.ajax({
			url: '/records/'+this.state.record.id,
			type: 'delete'
		}).then(
			this.props.handleDeleteRecord(this.state.record)
		)
	}
	handleEdit(e){
		e.preventDefault();
		var data = {
			title: this.refs['title'].value,
			date: this.refs['date'].value,
			amount: parseFloat(this.refs['amount'].value)
		}
		$.ajax({
			url: '/records/'+this.state.record.id,
			type: 'put',
			accepts: {
				JSON: 'application/json'
			},
			dataType: 'JSON',
			data: {
				//authenticity_token: $('meta[name=csrf-token]').attr('content'),
				title: this.refs['title'].value,
				date: this.refs['date'].value,
				amount: parseFloat(this.refs['amount'].value)
			}

		}).done(
			this.setState({edit: false}),
			this.props.handleEditRecord(this.state.record, data)
		)
	}
	recordRow(){
		return (
			<tr>
				<td>{this.state.record.date}</td>
				<td>{this.state.record.title}</td>
				<td>{amountFormat(this.state.record.amount)}</td>
				<td><a className="btn btn-default" onClick={this.handleToggle}>Edit</a> <a className="btn btn-danger" onClick={this.handleDelete}>Delete</a></td>
			</tr>
		);
	}
	recordForm(){
		return(
			<tr>
				<td><input type="date" className="form-control" placeholder="Date" ref="date" defaultValue={this.state.record.date}/></td>
				<td><input type="text" className="form-control" placeholder="Title" ref="title" defaultValue={this.state.record.title}/></td>
				<td><input type="number" step="0.01" className="form-control" placeholder="Amount" ref="amount" defaultValue={this.state.record.amount}/></td>
				<td><a className="btn btn-default"  onClick={this.handleEdit}>Update</a> <a className="btn btn-danger" onClick={this.handleToggle}>Cancel</a></td>
			</tr>
		);
	}
	render(){
		if(this.state.edit){
			return this.recordForm();
		}else{
			return this.recordRow();
		}

	}
}
Record.propTypes = {
	handleDeleteRecord: React.PropTypes.func.isRequired
};
