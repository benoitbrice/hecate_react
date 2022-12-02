import './App.css';
import Main from './Main';
import HeaderFooter from './HeaderFooter';
import { useState } from 'react';

function App() {

  const [compteur, setCompteur] = useState(0);

  function testClic(){
      let newCompteur = compteur + 1;
      setCompteur(newCompteur);
  }

  return (
    <>
      <div className="container">
        Compteur : {compteur}
        <HeaderFooter titre="Header" testClic={testClic}></HeaderFooter>
        <Main></Main>
        <HeaderFooter titre="Footer" testClic={testClic}></HeaderFooter>
      </div>
    </>
  );
}

export default App;
