import React from 'react';
import './App.css';
import TextField from './components/TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      Main Component
	  <TextField name="Milan" i={56} />
    </div>
  );
}

export default App;
