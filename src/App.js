import Header from '../src/components/header/Header.jsx'
import Pageindex from './componetsPage/PageIndex/PageIndex.jsx'
import PageGalery from './componetsPage/PageGalery/PageGalery.jsx';
import Footer from './components/Footer/Footer.jsx'
import Pageservices from './componetsPage/PageServices/Pageservices.jsx';
import Pagecontact from './componetsPage/PageContact/Pagecontact.jsx';
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
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
   }
  return (
    <div className="App">
      <Header number="999-999-999" selectPage={selectPage}/>
      <main className='contentMain'>
          <div className='Main'>  
              {pages==="Inicio" &&(
                <Pageindex selectPage={selectPage}/>
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
              {pages==="Servicios"  &&(
                <Pageservices/>
              )}      
              {pages==="Contacto"  &&(
                <Pagecontact/>
              )}      
          </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
