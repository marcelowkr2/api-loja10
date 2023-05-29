import LogoFooter from '../LogoFooter'
import InstagramIcon from '../../assets/instagramicon.png'
import WhatsAppIcon from '../../assets/whatsappicon.png'
import GamaBadge from '../../assets/gamabadge.png'
import Securitybadge from '../../assets/securitybadge.png'
import GenericBadge from '../../assets/genericbadge.png'
import { Link } from 'react-router-dom'

    let phone = "5511959883728";
    let text = "Olá, gostaria de falar com a Kelly!";
    text = window.encodeURIComponent(text);
    

function Footer() {
  return (
    <footer className="bg-[#BC8383] w-full flex flex-col md:flex-row items-center justify-around text-[28px] font-normal text-[#F9F7F4] py-8">
      <div className='container flex md:justify-between justify-center px-10'>
        <div className='flex gap-[63px]'>
          <div className='hidden md:inline'>
            <Link to={'/'}>
            <LogoFooter />
            </Link>
            <p className='text-p4 text-bege-100'>&copy; 2022 | All Rights Reserved.</p>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex gap-[150px]'>
              <div className='flex flex-col font-montserrat text-[20px] whitespace-nowrap items-center md:items-start gap-6'>
                <Link to='/sobre'>Sobre nós</Link>
                <Link to='/suporte'>Dúvidas</Link>
              </div>
              <div className='flex flex-col font-montserrat text-[20px] items-center md:items-start gap-6'>
                <Link to='/catalogo'>Loja</Link>
                <Link to='/personalize'>Personalize</Link>
              </div>
            </div>
            <div className='flex gap-6 mt-16 text-h4 justify-center items-center md:justify-start'>
              <a href="https://www.instagram.com/kelly_fofuradelacosetiaras/" target="blank"><img src={InstagramIcon} alt="" /></a>
              <a href={`https://api.whatsapp.com/send?phone=${phone+"&text="+text}`} target="blank"><img src={WhatsAppIcon} alt=""/></a>
            </div>
          </div>
        </div>
        <div className='font-montserrat text-[20px] text-center md:text-right gap-4 lg:flex-col lg:flex hidden mt-7'>
          <p>Certificados</p>
          <div className='flex gap-5'>
            <img className='w-20 h-20' src={GenericBadge} alt="" />
            <img className='w-20 h-20' src={Securitybadge} alt="" />
            <img className='w-20 h-20' src={GamaBadge} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer