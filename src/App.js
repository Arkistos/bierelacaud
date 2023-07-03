import logo from './logo.svg';
import bouteille from './bouteille.png';
import './App.css';
import './Style.css';
import Header from './Header';
import Form from './Form';
import CountdownTimer from './CountdownTimer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='form-zone'>
        <Form/>
        <img id='bottle' src={bouteille} alt="bouteille"/>
      </div>
      
      <CountdownTimer/>
    </div>
  );
}

export default App;
