class ImagePane extends React.Component {
   render () {
      return(
         <div className="col-md-3">
            <div className="row">
               <div className="col-md-3"></div>
               <img className="col-md-6 dashImage" alt={this.props.image.name} src={this.props.image.location} onClick={this.props.handleClick}/>
               <div className="col-md-3"></div>
            </div>
            <div className="row">
               <h2 className="col-md-12 text-center">{this.props.image.name}</h2>
            </div>
         </div>
      );
   }
}
