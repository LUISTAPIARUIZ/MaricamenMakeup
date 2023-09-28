import Header from '../src/components/header/Header.jsx'
import Pageindex from './componetsPage/PageIndex/PageIndex.jsx'
import PageGalery from './componetsPage/PageGalery/PageGalery.jsx';
import './App.css';
import React,{useState} from 'react';


function App() {
   const [pages, setPages]=useState('Inicio');
   const selectPage =(page)=>{
    if(page==="Galeria"){

    }else{
    setPages(page)
    console.log(page)
    }
   }
  return (
    <div className="App">
      <Header number="999-999-999" selectPage={selectPage}/>
      <main className='contentMain'>
          <div className='Main'>  
              {pages==="Inicio" &&(
                <Pageindex/>
              )}   
              {pages==="Novias"  &&(
                <PageGalery type={pages}/>
              )}         
              {pages==="Eventos"  &&(
                <PageGalery type={pages}/>
              )}         
              {pages==="Catalogo"  &&(
                <PageGalery type={pages}/>
              )}         
              {pages==="Formacion"  &&(
                <PageGalery type={pages}/>
              )}         
          </div>
      </main>
    </div>
  );
}

export default App;
