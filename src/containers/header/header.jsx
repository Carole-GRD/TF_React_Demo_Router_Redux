import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import licorneLogo from './../../assets/licorne.png'
import style from './header.module.css'

const CustomNavLink = ({ to, text }) => (
    <NavLink to={to} className={({ isActive }) => isActive ? style['active-link'] : ''}>
        {text}
    </NavLink>
)

const Header = () => (
    <header className={style.header}>

        {/* l'image étant dans le dossier assets, on ne peut pas mettre l'url directement dans l'attribut src */}
        {/* si l'image se trouvait dans le dossier public, on pourrait mettre l'url directement dans l'attribut src */}
        <img src={licorneLogo} alt={'Logo de l\'app'} />
        
        <nav>
            <ul className={style['nav-links']}>
                <li>
                    <CustomNavLink to='/' text='Accueil' />
                </li>
                <li>
                    <CustomNavLink to='/product' text='Produit' />
                </li>
                <li>
                    <CustomNavLink to='/about' text='À propos' />
                </li>
            </ul>
        </nav>
    </header>
)

export default Header