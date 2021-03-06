class DashboardController extends React.Component {
   constructor(){
      super();
      this.mainRender = this.mainRender.bind(this);
      this.appRender = this.appRender.bind(this);
      this.changeView = this.changeView.bind(this);
      this.setState = this.setState.bind(this);
      this.state = {
         view: "default",
         data: null
      }
   }
   changeView(e){
      console.log("view");
      this.setState({view: e.target.alt});
   }
   mainRender(){
      var images = this.props.images.map((image, idx) =>{
         return <ImagePane image={image} key={idx} handleClick={this.changeView}/>;
      }.bind(this));
      return(
         <div className="container-fluid">
				<br/>
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<div className="row">
							<div className="col-md-11"></div>
							<div className="col-md-1 text-right">
								<Logout/>
							</div>
						</div>
					</div>
					<div className="col-md-1"></div>
				</div>
            <div className="row">
               <div className="col-md-1"></div>
               <pre className="col-md-10">
                  {images}
               </pre>
               <div className="col-md-1"></div>
            </div>
			</div>
      );
   }
   appRender(){
      console.log("appRender");
      var theDash = this;
      $.ajax({
         type: "GET",
         accepts: {
				JSON: 'application/json'
			},
         url: "/"+theDash.state.view.toLowerCase(),
         dataType: 'JSON'
      }).done(function(response){
         console.log("app data");
         theDash.setState({data: response});
      });
   }
   render(){
      var loading = "/assets/loading-364f77aa43963d74c1f5aadf3599210e63a22baa54a24b89ca9a37f8be057da3.gif";
      if(this.state.view == "default"){
         return this.mainRender();
      }else{
         if(!this.state.data){
            this.appRender();
            return(
               <img alt="loading" src={loading}/>
            );
         }else{
            return(
               React.createElement(eval(this.state.view), {data: this.state.data})
            );
         }
      }
   }
}
