class DashboardController extends React.Component {
   render () {
      var images = this.props.images.map((image, idx) =>{
         return <ImagePane image={image} key={idx}/>;
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
}
