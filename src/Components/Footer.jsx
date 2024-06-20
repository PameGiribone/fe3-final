import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="red-footer">
        <p>Proyecto Final FrontEnd III</p>
      </div>
      <footer>
        <p>Powered by</p>
        <img className='img-dh' src="/public/images/DH.png" alt='DH-logo' />           
        <img className="social-icons" src="/public/images/ico-facebook.png" alt="facebook" />
        <img className="social-icons" src="/public/images/ico-instagram.png" alt="instagram" />
        <img className="social-icons" src="/public/images/ico-whatsapp.png" alt="wpp" />
        <img className="social-icons" src="/public/images/ico-tiktok.png" alt="tiktok" />
      </footer>
    </>
   )
}

export default Footer
