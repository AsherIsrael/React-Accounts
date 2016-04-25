class ImagePane extends React.Component {
   handleRedirect(){
      var redirect = "/"+this.props.image.name+"s";
      window.location.replace(redirect);
   }
   render () {
      return(
         <div className="col-md-3">
            <div className="row">
               <div className="col-md-3"></div>
               <img className="col-md-6" alt={this.props.image.name} src={this.props.image.location} onClick={this.handleRedirect.bind(this)}/>
               <div className="col-md-3"></div>
            </div>
            <div className="row">
               <h2 className="col-md-12 text-center">{this.props.image.name}</h2>
            </div>
         </div>
      );
   }
}
