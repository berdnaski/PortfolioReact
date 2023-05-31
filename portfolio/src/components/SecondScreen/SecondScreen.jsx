import React from 'react'
import './SecondScreen.css';
import Cards from '../Cards/Cards'



const SecondScreen = () => {
    return( 
        <div className='second-screen'>
            <div className='tec-card'>
            <h1 className='text_screen2'>Tecnologias</h1>
        <Cards />
        </div>
        </div>
    )
}


export default SecondScreen