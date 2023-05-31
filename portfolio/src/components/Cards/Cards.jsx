import React from 'react';
import { FaHtml5, FaJsSquare, FaReact, FaNode, FaBootstrap, FaCss3Alt } from "react-icons/fa";

const Card = () => {
  return (
    <div className='card-tec'>
      <ul>
        <div className="vertical-line"></div>
        <li>
          <FaHtml5 className='card-html' size={70} color='orange' />
          <h1 className='h1-html'>HTML5</h1>
        </li>
        <li>
          <FaJsSquare className='card-js' size={70} color='Yellow' />
          <h1 className='h1-js'>JavaScript</h1>
        </li>
        <li>
          <FaReact className='card-react' size={70} color='blue' />
          <h1 className='h1-react'>React</h1>
        </li>
        <li>
          <FaNode className='card-node' size={70} color='green' />
          <h1 className="h1-node">Node</h1>
        </li>
        <li>
          <FaBootstrap className='card-boot' size={70} color='purple' />
          <h1 className="h1-boot">BootStrap</h1>
        </li>
        <li>
          <FaCss3Alt className='card-css' size={70} color='cyan' />
          <h1 className="h1-css">CSS3</h1>
        </li>
      </ul>
    </div>
  );
}

export default Card;
