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
		var total  = this.debits() + this.credits();
		return total.toFixed(2);
	}
	addRecord(record){
		record.amount = parseFloat(record.amount);
		var records = this.state.records.slice();
		records.push(record);
		this.setState(this.state.records = records);
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
			<div className="container-fluid">
				<br/>
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<div className="row">
							<div className="col-md-11"></div>
							<div className="col-md-1">
								<Logout/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-1"></div>
							<h1 className="title col-md-2">Records</h1>
							<div className="col-md-9"></div>
						</div>
						<div className="row">
							<div className="col-md-3"></div>
							<AmountBox type={'success'} amount={this.credits()} text={'Credit'}/>
							<AmountBox type={'danger'} amount={this.debits()} text={'Debit'}/>
							<AmountBox type={'info'} amount={this.balance()} text={'Balance'}/>
							<div className="col-md-3"></div>
						</div>
						<br/>
						<div className="row">
							<div className="col-md-3"></div>
							<div className="col-md-6">
								<RecordForm handleNewRecord={this.addRecord} key={1}/>
							</div>
							<div className="col-md-3"></div>
						</div>
						<div className="row">
							<div className="col-md-1"></div>
							<div className="col-md-10">
								<hr/>
							</div>
							<div className="col-md-1"></div>
						</div>
						<div className="row">
							<div className="col-md-1"></div>
							<div className="col-md-10 table-responsive">
								<table className="table table-bordered shadowed">
									<thead>
										<tr>
											<th className="col-md-3">Date</th>
											<th className="col-md-2">Title</th>
											<th className="col-md-2">Amount</th>
											<th className="col-md-3">Actions</th>
										</tr>
									</thead>
									<ReactCSSTransitionGroup component="tbody" transitionName="record" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
										{rows}
									</ReactCSSTransitionGroup>
								</table>
							</div>
							<div className="col-md-1"></div>
						</div>
					</div>
					<div className="col-md-1"></div>
				</div>
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