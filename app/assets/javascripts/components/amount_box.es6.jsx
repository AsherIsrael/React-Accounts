class AmountBox extends React.Component {
	render () {
		var type = "shadowed panel panel-"+this.props.type;
		return (
			<div className="col-md-2">
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

