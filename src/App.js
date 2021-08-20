import React from 'react';
import './App.css';
import Card from './Components/card';

class App extends React.Component{

  state = {
    avatar: 51,
    personName: 'James Smith' 
  }

  changeAvatar = () =>{
    this.setState({
      avatar:65,
      personName: 'Oliver Turn'
    })
  }



  render(){
    return( 
      <div className="container">
        <div className="row">
          <Card name={this.state.personName} job="Pilot" avatar={this.state.avatar} />
          <Card name="Jessica Jones" job="Nurse" avatar={28}/>
          <Card name="Tom Hanks"job="Lawyer" avatar={68}/>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a onClick={this.changeAvatar} href="#" className="changeAvatar">Change Details</a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;