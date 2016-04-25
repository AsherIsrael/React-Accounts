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
			record_id: this.props.record.id
		};
	}
	handleToggle(e){
		e.preventDefault();
		this.setState({edit: !this.state.edit});
	}
	handleDelete(e){
		e.preventDefault();
		$.ajax({
			url: '/records/'+this.state.record_id,
			type: 'delete'
		}).done(
			this.props.handleDeleteRecord(this.props.record)
		)
	}
	handleEdit(e){
		e.preventDefault();
		var data = this.props.record;
		data['title'] = this.refs['title'].value;
		data['date'] = this.refs['date'].value;
		data['amount'] = parseFloat(this.refs['amount'].value);
		console.log(data);
		$.ajax({
			url: '/records/'+this.state.record_id,
			type: 'put',
			accepts: {
				JSON: 'application/json'
			},
			dataType: 'JSON',
			data: {
				title: this.refs['title'].value,
				date: this.refs['date'].value,
				amount: parseFloat(this.refs['amount'].value)
			}

		}).then(
			console.log("changing record"),
			this.setState({edit: false}),
			this.props.handleEditRecord(this.props.record, data)
		)
	}
	recordRow(){
		var type = '';
		var glyph = '';
		if(this.props.record.amount > 0){
			type = 'col-md-2 text-center amountCell';
			glyph = 'glyphicon glyphicon-triangle-top green';
		}else{
			type = 'col-md-2 text-center amountCell';
			glyph = 'glyphicon glyphicon-triangle-bottom red';
		};
		var d = new Date(this.props.record.date);
		var date = d.toDateString();
		return (
			<tr>
				<td className="col-md-3">{date}</td>
				<td className="col-md-2 text-justify">{this.props.record.title}</td>
				<td className={type}><span className={glyph}></span>{amountFormat(this.props.record.amount)}</td>
				<td className="col-md-3 text-center"><span className="col-md-3"></span><a className="col-md-2 btn btn-default" onClick={this.handleToggle}>Edit</a><span className="col-md-1"></span><a className="col-md-3 btn btn-danger" onClick={this.handleDelete}>Delete</a></td>
			</tr>
		);
	}
	recordForm(){
		return(
			<tr>
				<td className="col-md-3"><input type="date" className="form-control" placeholder="Date" ref="date" defaultValue={this.props.record.date}/></td>
				<td className="col-md-2"><input type="text" className="form-control" placeholder="Title" ref="title" defaultValue={this.props.record.title}/></td>
				<td className="col-md-2"><input type="number" step="0.01" className="form-control" placeholder="Amount" ref="amount" defaultValue={this.props.record.amount}/></td>
				<td className="col-md-3 text-center"><span className="col-md-3"></span><a className="col-md-3 btn btn-default" onClick={this.handleEdit}>Update</a><span className="col-md-1"></span><a className="col-md-3 btn btn-danger" onClick={this.handleToggle}>Cancel</a></td>
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
