var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
class Records extends React.Component {
	constructor(props){
		super(props);
		this.addRecord = this.addRecord.bind(this);
		this.deleteRecord = this.deleteRecord.bind(this);
		this.updateRecord = this.updateRecord.bind(this);
		this.setState = this.setState.bind(this);
		this.credits = this.credits.bind(this);
		this.debits = this.debits.bind(this);
		this.balance = this.balance.bind(this);
		this.state = {
			records: props.data
		};
	}
	credits(){
		var credits = this.state.records.filter(function(val) { return val.amount >= 0; });
		var total = credits.reduce(function(sum, curr) {
			return sum + curr.amount;
		},0);
		return parseFloat(total.toFixed(2));
	}
	debits(){
		var credits = this.state.records.filter(function(val) { return val.amount < 0; });
		var total = credits.reduce(function(sum, curr) {
			return sum + curr.amount;
		},0);
		return parseFloat(total.toFixed(2));
	}
	balance(){
		var total  = this.debits() + this.credits()
		return total.toFixed(2);
	}
	addRecord(record){
		record.amount = parseFloat(record.amount);
		var records = this.state.records.slice()
		records.push(record)
		this.setState(this.state.records = records)
	}
	deleteRecord(record){
		var records = this.state.records;
		var index = records.indexOf(record);
		records.splice(index, 1);
		this.setState(this.state.records = records);
	}
	updateRecord(record, data){
		var index = this.state.records.indexOf(record);
		var records = this.state.records.slice();
		data['amount'] = parseFloat(data['amount']);
		records.splice(index, 1, data);
		this.setState(this.state.records = records);
	}
	render(){
		var rows = this.state.records.map(record => {
			return <Record record={record} key={record.id} handleDeleteRecord={this.deleteRecord} handleEditRecord={this.updateRecord}/>
		}.bind(this));
		return (
			<div className="records">
				<h2 className="title">Records</h2>
				<div className="row">
					<AmountBox type={'success'} amount={this.credits()} text={'Credit'}/>
					<AmountBox type={'danger'} amount={this.debits()} text={'Debit'}/>
					<AmountBox type={'info'} amount={this.balance()} text={'Balance'}/>
				</div>
				<RecordForm handleNewRecord={this.addRecord} key={1}/>
				<hr/>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Date</th>
							<th>Title</th>
							<th>Amount</th>
							<th>Actions</th>
						</tr>
					</thead>
					<ReactCSSTransitionGroup component="tbody" transitionName="record" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
						{rows}
					</ReactCSSTransitionGroup>
				</table>
			</div>
		);
	}
}
Records.propTypes = {
	records: React.PropTypes.array
};
Records.defaultProps = {
	records: []
};