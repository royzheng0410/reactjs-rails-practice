var Lifts = React.createClass({
  getInitialState(){
    return {lifts: this.props.lifts}
  },

  fetchLifts(){
    $.getJSON(
      this.props.liftsPath,
      (data) => this.setState({lifts: data})
    );
  },

  componentWillMount(){
    setInterval(this.fetchLifts, 300);
  },

  componentWillUnmount(){
    clearInterval();
  },
  render(){
    return (
      <div className='lifts'>
        <h1 className='title'></h1>
        Items
        <LiftForm />
        <table className='table table-bordered'>
          <thead >
            <tr>
              <th>Date</th>
              <th>Lift Name</th>
              <th>Weight Lifted</th>
              <th>Reps Performed</th>
              <th>1 RM</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lifts.map(function(lift){
              return <Lift key={lift.id} lift={lift}/>
            })}
          </tbody>
          
        </table>
        
      </div>
    )
  }
});