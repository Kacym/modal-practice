import { useState } from 'react';
import './App.css';
import Button from './components/UI/button/Button';
import ModalBack from './components/modal/ModalBack';


function App() {
  const [state, setState] = useState(false);

  function openAndCloseModalHandler() {
    setState(!state)
  }

 
  return (
    <div className="App">
      <h1>Модалки, порталы, тачки, дениги, админки и еще всякое там</h1>
      {
        state && <ModalBack closeModal={openAndCloseModalHandler}/>
      }
      {
        state ? <Button title="Close modal"/> : <Button title="Open modal" onClick={openAndCloseModalHandler}/>
      }
      {openAndCloseModalHandler}
    </div>
  );
}

export default App;
