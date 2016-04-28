class LocationMap extends React.Component {
   constructor(props){
      super(props);
      this.setState = this.setState.bind(this);
      this.state = {
         locations: props.locations,
         map: undefined
      };
   }
   componentDidMount(){
      var customMapType = new google.maps.StyledMapType([
         {
            stylers: [
            ]
         },
         {
            name: 'custom style'
         }
      ]);
      var customMapTypeId = 'custom_style';
      var map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 48, lng: -122},
         zoom: 8,
         mapTypeControlOptions: {
            mapTypeIds: [customMapTypeId]
         }
      });
      map.mapTypes.set(customMapTypeId, customMapType);
      map.setMapTypeId(customMapTypeId);
      this.setState({map: map});
   }
   render(){
      return(
         <div>
            <div id="map"></div>
         </div>
      );
   }
}
