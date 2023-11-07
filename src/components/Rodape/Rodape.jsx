import { } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Rodape.css'

function Rodape() {
  return (
    <footer >
      <h3>CodeReads © <br /> 2023-todos os direitos reservados</h3>
      <div>
      {/* Ícone do Instagram */}
      <FaInstagram className="icone-social" />

      {/* Ícone do Facebook */}
      <FaFacebook className="icone-social" />

      {/* Ícone do LinkedIn */}
      <FaLinkedin className="icone-social" />

      {/* Ícone do Envelope */}
      <FaEnvelope className="icone-social" />
    </div>

    </footer>
  )
}
export default Rodape