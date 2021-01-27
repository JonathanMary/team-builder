import './App.css';
import Form from './Form.js'

import React, { useState } from 'react';

const initialFormValues= {
  name: "",
  email: "",
  role: "",
}

function App(){

    const [teamMembers, setTeamMembers] = useState([]);
    const [formData, setFormData] = useState(initialFormValues);

    //when form change, save it into formData
    const onChange = evt => {
        setFormData({
            ...formData, 
            [evt.target.name] : evt.target.value
        })
    }

    //when user press submit, push form data into teamMembers.
    const onSubmit = evt => {
        evt.preventDefault();
        setTeamMembers([...teamMembers, formData]);
        //console.log("teamMembers: ", teamMembers);
    }


    return (
      <div className="App">
        <header className="App-header">
          <Form values={"formValues"} onSubmit={onSubmit} onChange={onChange}/>
          {teamMembers.map(member => {
            return(
              <div className="teamMember" key={member.name}>
                <div className="Name">{member.name.trim()}</div>
                <div className="Email">{member.email.trim()}</div>
                <div className="Role">{member.role}</div>
              </div>
            )
          })}
        </header>
      </div>
    );
};



export default App;
