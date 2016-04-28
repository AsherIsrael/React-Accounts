class Login extends React.Component {
	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.setState = this.setState.bind(this);
		this.state = {
			errors: []
		};
	}
	handleSubmit(e){
		e.preventDefault();
		var thisForm = this;
		var data = new FormData(this.refs['form']);
		$.ajax({
			type: "POST",
			url: '/login',
			data: data,
			processData: false,
			contentType: false
		}).done(function(response){
			if(response.status){
				window.location.replace('/dashboard');
			}else{
				thisForm.setState({errors: response.errors});
			}
		})
	}
	render () {
		var errors = this.state.errors.map(function(error, idx){
			return <p key={idx}>{error}</p>
		}.bind(this));
		return(
			<div>
				{errors}
				<form className="input-group" ref="form" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Username" name="username"/>
					</div>
					<div className="form-group">
						<input type="password" className="form-control" placeholder="Password" name="password"/>
					</div>
					<button type="submit" className="btn btn-primary">Login</button>
				</form>
			</div>
		)
	}
}
