import React from 'react';
import './App.css';
import Card from './Components/card';

class App extends React.Component{
  render(){
    return( 
      <div className="container">
        <div className="row">
          <Card name="James Smith" job="Pilot" avatar={51} />
          <Card name="Jessica Jones" job="Nurse" avatar={28}/>
          <Card name="Tom Hanks"job="Lawyer" avatar={61}/>
        </div>
      </div>
    );
  }
}

export default App;