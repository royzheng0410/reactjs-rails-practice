var LiftForm = React.createClass({
  getInitialState(){
    return {
      date: '',
      liftname: '',
      ismetric: '',
      weightlifted: '',
      repsperformed: '',
      onerm: ''
    }
  },
  
  handleValueChange(e){
    valueName = e.target.name;
    this.setState({[valueName]: e.target.value});
  },

  handleSubmit(e){
    e.preventDefault();
    var payload = {
      lift: {
        date: this.state.date,
        liftname: this.state.liftname,
        ismetric: this.state.ismetric,
        weightlifted: this.state.weightlifted,
        repsperformed: this.state.repsperformed,
        onerm: this.state.onerm,
      }
    };
    $.ajax({
      url: '/lifts',
      dataType: 'json',
      type: 'POST',
      data: payload,
      success: function(data){
      }.bind(this)
    });
  },
  render(){
    return (
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input type='date' className='form-control' placeholder='date' name='date' value={this.state.date} onChange={this.handleValueChange} />
          <input type='text' className='form-control' placeholder='liftname' name='liftname' value={this.state.liftname} onChange={this.handleValueChange} />
          <input type='boolean' className='form-control' placeholder='ismetric' name='ismetric' value={this.state.ismetric} onChange={this.handleValueChange} />
          <input type='number' className='form-control' placeholder='weightlifted' name='weightlifted' value={this.state.weightlifted} onChange={this.handleValueChange} />
          <input type='number' className='form-control' placeholder='repsperformed' name='repsperformed' value={this.state.repsperformed} onChange={this.handleValueChange} />
          <input type='number' className='form-control' placeholder='onerm' name='onerm' value={this.state.onerm} onChange={this.handleValueChange} />
          <button type='submit' className='btn btn-primary'>Create Lift</button>
        </div>
      </form>
    )
  }
});