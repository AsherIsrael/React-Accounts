class Locations extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         locations: props.data
      };
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
               </div>
               <div className="col-md-1"></div>
            </div>
         </div>
      );
   }
}
Locations.propTypes = {
   locations: React.propTypes.array
};
Locations.defaultProps = {
   data: []
};
