import React from 'react';
import './App.css';
import Student from './Student';

function App() {
      const me = new Student()
      me.getJob('Web developer')
      me.learnNewSkill('React')
      me.forgetSkill('React')
      me.leaveJob()
  return (
    
      <div>
         <p> {me.job}</p>
  <p>{me.skills.map(el=><p>{el}</p>)}</p>
      </div>
    
  );
}

export default App;
