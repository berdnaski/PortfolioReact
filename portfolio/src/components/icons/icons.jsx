import React from 'react';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';


const Icon = () => {
  return (
    <div style={{ display: 'inline-block'}}>
      <a className='link' href="https://www.github.com/berdnaski" target="_blank">
        <FaGithub size={60} className="icon" style={{ marginRight: '4rem' }} />
      </a>
      <a className='link' href="https://www.linkedin.com/in/erick-berdnaski/" target="_blank">
        <FaLinkedin size={60} className="icon" style={{ marginRight: '4rem' }} />
      </a>
      <a className='link' href="mailto:berdnaski1177@gmail.com">
        <FaRegEnvelope size={60} className='icon' />
      </a>
    </div>
  );
};

export default Icon;
