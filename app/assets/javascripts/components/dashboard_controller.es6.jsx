class DashboardController extends React.Component {
   render () {
      var images = this.props.images.map(image =>{
         return <img className="col-md-2" alt="{image}" src={image}/>;
      }.bind(this));
      return(
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
					</div>
					<div className="col-md-1"></div>
				</div>
            <div className="row">
               <pre className="col-md-12">
                  <div className="row">
                     <div className="col-md-1"></div>
                     {images}
                  </div>
               </pre>
            </div>
			</div>
      );
   }
}
