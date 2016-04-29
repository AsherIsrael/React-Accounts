class Locations extends React.Component {
   constructor(props){
      super(props);
      this.setCoords = this.setCoords.bind(this);
      this.setState = this.setState.bind(this);
      this.addLocation = this.addLocation.bind(this);
      this.state = {
         locations: props.data,
         xCoord: null,
         yCoord: null
      };
   }
   setCoords(e){
      console.log("set coords");
      this.setState({xCoord: e.latLng.lng(), yCoord: e.latLng.lat()});
   }
   addLocation(location){
      var locations = this.state.locations.slice();
      locations.push(location);
      this.setState({locations: locations});
   }
   render () {
      return(
         <div className="container-fluid">
            <br/>
            <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-10">
                  <div className="row">
                     <div className="col-md-9"></div>
                     <div className="col-md-2">
                        <DashboardLink/>
                     </div>
                     <div className="col-md-1">
                        <Logout/>
                     </div>
                  </div>
                  <br/>
                  <pre>
                     <div className="row">
                        <div className="col-md-8">
                           <LocationMap locations={this.state.locations} handleClick={this.setCoords}/>
                        </div>
                        <div className="col-md-4">
                           <LocationForm handleNewLocation={this.addLocation} xCoord={this.state.xCoord} yCoord={this.state.yCoord}/>
                        </div>
                     </div>
                  </pre>
               </div>
               <div className="col-md-1"></div>
            </div>
            <br/>
            <br/>
            <br/>
            <p>Map Icons made by FreePik from <a href="/www.flaticon.com">www.flaticon.com</a></p>
         </div>
      );
   }
}
Locations.propTypes = {
   locations: React.PropTypes.array
};
Locations.defaultProps = {
   data: []
};
