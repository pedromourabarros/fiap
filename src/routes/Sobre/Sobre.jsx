import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Sobre.css';

function Sobre() {
  return (
    <>
    <center> <h1 style={{ marginBottom: '10px' }}>Desenvolvido por:</h1></center>
      <center>
        <div className="sobre">


         
          <div>
            <img src="http://br-01.lunarcloudservice.org:25662/Arquivos/moura.jfif" alt="Foto do Pedro" />
            <h3 style={{ marginTop: '20px' }}>Pedro Moura -  RM550260</h3>
          </div>

        
          <div>
           <img src="http://br-01.lunarcloudservice.org:25662/Arquivos/eduardo.jfif" alt="Foto do Eduardo" />
            <h3 style={{ marginTop: '20px' }}>Eduardo Osorio  - RM550161</h3>
          </div>

        
          <div>
            <img src="http://br-01.lunarcloudservice.org:25662/Arquivos/fabio.jfif" alt="Foto do Fabio" />
            <h3 style={{ marginTop: '20px' }}>Fabio Hideki  - RM550610</h3>
          </div>

        
          <div>
            <img src="http://br-01.lunarcloudservice.org:25662/Arquivos/luan.jfif" alt="Foto do Luan" />
            <h3 style={{ marginTop: '20px' }}>Luan Ramos - RM99696</h3>
          </div>
        </div>
        <div className="sobre2">
          
        </div>
      </center>
    </>
  );
}

export default Sobre;