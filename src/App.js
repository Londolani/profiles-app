import React from 'react';
import './App.css';
import Card from './Components/card';

class App extends React.Component{

  state = {
    avatar: 51
  }

  changeAvatar = () =>{
    this.setState({
      avatar:65
    })
  }

  render(){
    return( 
      <div className="container">
        <div className="row">
          <Card name="James Smith" job="Pilot" avatar={this.state.avatar} />
          <Card name="Jessica Jones" job="Nurse" avatar={28}/>
          <Card name="Tom Hanks"job="Lawyer" avatar={68}/>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a onClick={this.changeAvatar} href="#" className="changeAvatar">Change Avatar</a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;