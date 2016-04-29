class LocationMap extends React.Component {
   constructor(props){
      super(props);
      this.setState = this.setState.bind(this);
      this.makeMap = this.makeMap.bind(this);
      this.state = {
         locations: props.locations,
         map: undefined
      };
   }
   componentDidMount(){
      this.makeMap();
   }
   makeMap(){
      var thisMap = this;
      var customMapType = new google.maps.StyledMapType([
         {
            featureType: 'poi',
            elementType: 'labels',
            stylers:[
               {visibility: 'off'}
            ]
         }
      ],{
            name: 'Custom Style'
         });
      var customMapTypeId = 'custom_style';
      var map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 48, lng: -122},
         zoom: 8,
         draggableCursor: 'default',
         mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
          }
      });
      map.mapTypes.set(customMapTypeId, customMapType);
      map.setMapTypeId(customMapTypeId);
      thisMap.setState({map: map});
      google.maps.event.addListener(map, "click", function(e){
         thisMap.props.handleClick(e);
      });
   }
   render(){
      return(
         <div id="map"></div>
      );
   }
}
