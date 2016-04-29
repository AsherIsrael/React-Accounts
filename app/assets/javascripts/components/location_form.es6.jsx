class LocationForm extends React.Component {
   constructor(props){
      super(props);
      this.setState = this.setState.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.valid = this.valid.bind(this);
      this.state={
         yCoord: this.props.yCoord,
         xCoord: this.props.xCoord,
         name: null,
         designation: null
      }
   }
   componentWillReceiveProps(nextProps){
      this.setState({yCoord: nextProps.yCoord, xCoord: nextProps.xCoord});
   }
   handleChange(e){
      var name = e.target.name;
      this.setState({[name]: e.target.value});
   }
   valid(){
      return Boolean(this.state.yCoord && this.state.xCoord && this.state.name && this.state.designation);
   }
   render () {
      return(
         <form>
            <div className="input-group">
               <span className="input-group-addon">Latitude</span>
               <input name="yCoord" type="number" className="form-control" disabled value={this.state.yCoord}/>
            </div>
            <br/>
            <div className="input-group">
               <span className="input-group-addon">Longitude</span>
               <input name="xCoord" type="number" className="form-control" disabled value={this.state.xCoord}/>
            </div>
            <br/>
            <div className="input-group">
               <span className="input-group-addon">Name</span>
               <input name="name" type="text" className="form-control" onChange={this.handleChange}/>
            </div>
            <br/>
            <div className="input-group">
               <select name="designation" className="btn btn-warning dropdown-toggle" onChange={this.handleChange}>
                  <option value="">What kind of location is this?</option>
                  <option value="home">Home</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="friend">Friend's Home</option>
                  <option value="work">Work</option>
                  <option value="landmark">Landmark</option>
                  <option value="school">School</option>
                  <option value="appointment">Appointment</option>
               </select>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary" disabled={!(this.valid())}>Create Location</button>
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
