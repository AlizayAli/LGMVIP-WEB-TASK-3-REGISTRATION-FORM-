import React, { useState } from 'react';
import './App.css';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [link, setLink] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
  <div>
    <div className="navbar">
      <h2>Registration Form</h2>
      </div>
        <div className="container" >
      
      <form onSubmit={handleSubmit}>
        
      <div className='content'>
      
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
        </div>

        <div className="form-group">
          <label htmlFor="website">Wesbite:</label>
          <input
            type="url"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="link">Image Link:</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
</div>


<div className="form-group">
  <label>Gender:</label>
  <div>
    <input
      type="radio"
      id="male"
      name="gender"
      value="male"
      checked={gender === "male"}
      onChange={(e) => setGender(e.target.value)}
    />
    <label htmlFor="male">Male</label>
  </div>
  <div>
    <input
      type="radio"
      id="female"
      name="gender"
      value="female"
      checked={gender === "female"}
      onChange={(e) => setGender(e.target.value)}
    />
    <label htmlFor="female">Female</label>
  </div>
</div>






        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

      
        <div className="form-group">
          <button type="submit">Register</button>
        </div>

        
        <div className="cancel">
          <button type="submit">Cancel</button>
        
        </div>
        </div>

      </form>
      {submitted && (
        <div className="output">
          <h2>Enrolled Students</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Wesbite: <a href={website}>{website} {
            
          }</a></p>
          <p>Image Link: <img src={link} /></p>
          <p>Gender: {gender}</p>
          <p>Password: {password}</p>
         
                </div>

                
      )}
    </div>
    </div>
    
    
  );
}

export default RegistrationForm;
