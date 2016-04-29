class LocationMap extends React.Component {
   constructor(props){
      super(props);
      this.setState = this.setState.bind(this);
      this.makeMap = this.makeMap.bind(this);
      this.makeMarkers = this.makeMarkers.bind(this);
      this.state = {
         locations: props.locations,
         map: undefined
      };
   }
   componentDidMount(){
      this.makeMap();
   }
   componentWillReceiveProps(nextProps){
      this.setState({locations: nextProps.locations});
      this.makeMarkers(this.state.map, nextProps.locations);
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
      this.makeMarkers(map, thisMap.state.locations);
   }
   makeMarkers(map, locats){
      for(locat in locats){
         var icon = null;
         switch(locats[locat].designation){
            case "home":
               icon = "/assets/home-05b8b4350a85726cff5be5dbcafb97609b383882cef1a3f5af2a8be7cb63c973.png"
               break;
            case "restaurant":
               icon = "/assets/restaurant-b7c4d85a3d6b6c04c07aa6637e3beb143a3d6631cb1936a3abec99612a7a842c.png"
               break;
            case "friend":
               icon = "/assets/friend-08a9206de6451f18e4f82dc0c6cbd8e27dc3ae684ed85444af7c4ec23933e0bd.png"
               break;
            case "work":
               icon = "/assets/work-784937f2cced81155ca15f3591682b995c8d47d7832ab15499deeb31e2693cad.png"
               break;
            case "landmark":
               icon = "/assets/landmark-54c97b843d1548b508bca277e589236a6fb84d63b30e34882e683a2031bb5d53.png"
               break;
            case "school":
               icon = "/assets/school-5e21642f37de4a6a83d586b189435d72b3378d49bf80b3f4f9c44cfc4b8f3628.png"
               break;
            case "appointment":
               icon = "/assets/appointment-4293f3f2e686e1b8e01b14ddf6ea9579ce897ea29b6d282b68b4bbc0c823cfea.png"
               break;
            case "other":
               icon = "/assets/other-7fbdb87b8f47e738fa4c2a4eaf203225999611c6323c1e6abdce6f2cc79e8e01.png"
               break;
         }
         var marker = new google.maps.Marker({
            position: {lat: parseFloat(locats[locat].yCoord), lng: parseFloat(locats[locat].xCoord)},
            map: map,
            icon: icon
         })
      }
   }
   render(){
      return(
         <div id="map"></div>
      );
   }
}
