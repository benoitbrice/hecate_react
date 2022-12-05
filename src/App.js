import './App.css';
import Main from './Main';
import HeaderFooter from './HeaderFooter';
import { useEffect, useState } from 'react';

function App() {

  //variable d'etat
  const [compteur, setCompteur] = useState(0);
  const [listSchool, setListSchool] = useState([]);

  //function custom
  function testClic(){
      let newCompteur = compteur + 1;
      setCompteur(newCompteur);
  }

  useEffect(() => {
    console.log('effet');
  },[compteur]);

  return (
    <>
      <div className="container">
        Compteur : {compteur}
        <HeaderFooter titre="Header" testClic={testClic} setListSchool={setListSchool}></HeaderFooter>
        <Main listSchool={listSchool}></Main>
        <HeaderFooter titre="Footer" testClic={testClic}></HeaderFooter>
      </div>
    </>
  );
}

export default App;
