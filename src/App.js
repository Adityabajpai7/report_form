import React, { useState } from 'react';
import './style.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [problem, setProblem] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nProblem: ${problem}`);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Student Problem Report Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="problem">Problem:</label>
          <textarea
            id="problem"
            value={problem}
            onChange={e => setProblem(e.target.value)}
            placeholder="Enter the problem you're facing in college"
            required
          ></textarea>
        </div>
        <button type="submit" className="form-submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
