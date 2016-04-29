class LocationForm extends React.Component {
   constructor(props){
      super(props);
      this.state={
      }
   }
   render () {
      return(
         <form>
            <div className="input-group">
               <span className="input-group-addon">Latitude</span>
               <input type="number" className="form-control" disabled value={this.props.yCoord}/>
            </div>
            <br/>
            <div className="input-group">
               <span className="input-group-addon">Longitude</span>
               <input type="number" className="form-control" disabled value={this.props.xCoord}/>
            </div>
            <br/>
            <div className="input-group">
               <span className="input-group-addon">Name</span>
               <input type="text" className="form-control"/>
            </div>
            <br/>
            <div className="input-group">
               <select className="btn btn-primary dropdown-toggle">
                  <option value={null}>What kind of location is this?</option>
                  <option value="home">Home</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="friend">Friend's Home</option>
                  <option value="work">Work</option>
                  <option value="landmark">Landmark</option>
                  <option value="school">School</option>
                  <option value="appointment">Appointment</option>
               </select>
            </div>
         </form>
      );
   }
}
LocationForm.propTypes={
   yCoord: React.PropTypes.number,
   xCoord: React.PropTypes.number
};
LocationForm.defaultProps={
   yCoord: null,
   xCoord: null
};
