class LocationForm extends React.Component {
   constructor(props){
      super(props);
      this.setState = this.setState.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.valid = this.valid.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state={
         yCoord: this.props.yCoord,
         xCoord: this.props.xCoord,
         name: null,
         designation: null,
         id: null
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
   handleSubmit(e){
      e.preventDefault();
      var thisForm = this;
      $.ajax({
         accepts: {
            JSON: 'application/json'
         },
         type: 'POST',
         url: '/locations',
         data: {
            yCoord: this.state.yCoord,
            xCoord: this.state.xCoord,
            name: this.state.name,
            designation: this.state.designation
         },
         dataType: 'JSON'
      }).done(function(response){
         thisForm.setState({id: response.id});
         thisForm.props.handleNewLocation(thisForm.state);
         thisForm.setState({
            yCoord: null,
            xCoord: null,
            name: null,
            designation: null,
            id: null
         })
      });
   }
   render () {
      return(
         <form onSubmit={this.handleSubmit}>
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
                  <option value="other">Miscellaneous</option>
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
