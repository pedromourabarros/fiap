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
            <img src="https://media.licdn.com/dms/image/D4E03AQGADbPFWpWW3g/profile-displayphoto-shrink_800_800/0/1691535598270?e=1703116800&v=beta&t=e6KspQg_TAdiCGmfROudaf5sMCSiXkYIvRX_oluztAE" alt="Foto do Pedro" />
            <h3 style={{ marginTop: '20px' }}>Pedro Moura -  RM550260</h3>
          </div>

        
          <div>
            <img src="https://media.licdn.com/dms/image/D4D03AQHXvrVTr2Nclg/profile-displayphoto-shrink_800_800/0/1677278723972?e=1703116800&v=beta&t=ZrkzKlX_-YhTAFs1iPYD6r2LBq2LEXDYBrecfCf8ZkM" alt="Foto do Eduardo" />
            <h3 style={{ marginTop: '20px' }}>Eduardo Osorio  - RM550161</h3>
          </div>

        
          <div>
            <img src="https://avatars.githubusercontent.com/u/127515045?v=4" alt="Foto do Fabio" />
            <h3 style={{ marginTop: '20px' }}>Fabio Hideki  - RM550610</h3>
          </div>

        
          <div>
            <img src="https://media.licdn.com/dms/image/D4D03AQGy75oR0m6CXQ/profile-displayphoto-shrink_800_800/0/1697570412084?e=1704931200&v=beta&t=b837rhol4PTCi035Okl99ASfnYuayyb_i30hkG20q-o" alt="Foto do Luan" />
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