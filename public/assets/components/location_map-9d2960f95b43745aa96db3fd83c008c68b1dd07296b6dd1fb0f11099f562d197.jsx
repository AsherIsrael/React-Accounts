class LocationMap extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         locations: props.locations
      };
   }
   render(){
      var map = new GMaps({
         div: '#map',
         lat: 47,
         lng: -122
      });
      return(
         <div>
            <div id="map"></div>
         </div>
      );
   }
}
