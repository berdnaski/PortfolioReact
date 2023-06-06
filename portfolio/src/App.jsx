import React from 'react'
import Icon from './components/icons/icons';
import './App.css'
import SecondScreen from './components/SecondScreen/SecondScreen'
import DownloadButton from './components/Button/Button';


const fileUrl = 'https://drive.google.com/file/d/170U97i2Z_5fe6fGdbArC-dsaum_gTham/view';
const label = 'Abrir Cúrriculo';


function App() {


  return (
    <> <div className='color-button'>
    <DownloadButton fileUrl={fileUrl} label={label} />
    <div className='container'>
      <div className="container-center">
        <h3 className='paragrafo'>OI, EU SOU O ERICK</h3>
        <h1 className='paragrafo1'>REACT <Icon/><br></br>DEVELOPER</h1>
        <p className='desc'><strong>Tenho 20 anos, atuo como desenvolvedor frontend <br></br> a 1 ano, tendo expêriencias com projetos pessoais.</strong></p>
      </div>
    </div>
    <SecondScreen />
    </div>
    </>
  )

}

export default App
