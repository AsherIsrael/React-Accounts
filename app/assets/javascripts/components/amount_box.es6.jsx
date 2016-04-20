class AmountBox extends React.Component {
	render () {
		type = "panel panel-"+this.props.type
		return (
			<div className="col-md-4">
				<div className={type}>
					<div className="panel-heading">
						{this.props.text}
					</div>
					<div className="panel-body">
						{amountFormat(this.props.amount)}
					</div>
				</div>
			</div>
		);
	}
}

