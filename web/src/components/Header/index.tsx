import LogoHeader from '../LogoHeader';
import CartLogo from '../../assets/carrinhobtn.png'
import { NavLink } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
import MenuItems from '../MenuItems';
import '../../index.css';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { Link } from 'react-router-dom';


function Header() {
  const { cartTotalQuantity } = useSelector((state: RootStore) => state.cart)

  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <header className='w-full font-montserrat text-[18px] bg-[#F9F7F4] py-4'>
      <div className='container mx-auto flex items-center justify-between my-0'>
        <div className='flex items-center gap-20'>
          <Link to={'/'}>
          <LogoHeader />
          </Link>
          <nav className='flex justify-between'>
            <div className='absolute right-6 lg:hidden top-6 scale-150'>
              <MenuOutlinedIcon className='scale-150 cursor-pointer text-rosa-200' onClick={showMenu} />
            </div>
            <ul className='hidden lg:flex gap-14 text-[18px] text-preto-100 tracking-wider leading-3'>
              <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>HOME</NavLink></li>
              <li><NavLink to='/catalogo' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>LOJA</NavLink></li>
              <li><NavLink to='/personalize' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>PERSONALIZADO</NavLink></li>
              <li><NavLink to='/sobre' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>SOBRE NÓS</NavLink></li>
              <li><NavLink to='/suporte' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>DÚVIDAS</NavLink></li>
            </ul>
            <MenuItems showMenu={showMenu} active={active} />
          </nav>
        </div>
        <NavLink to='/carrinho' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold hidden lg:flex items-center gap-3' : 'text-preto-100 hidden lg:flex items-center gap-3'}>CARRINHO <img src={CartLogo} alt="" /><span className='text-p5 text-bege-100 relative right-8 bottom-3 w-5 h-5 bg-preto-100 rounded-full text-center'>{cartTotalQuantity}</span></NavLink>
      </div>
    </header>
  )
}

export default Header