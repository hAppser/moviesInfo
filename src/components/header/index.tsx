import { NavLink } from 'react-router-dom';
import {routeMain as routeHome}  from "../pages/home"
import {routeMain as routeCategories} from "../pages/categories"
import {routeMain as routeSearch } from "../pages/search"
import {routeMain as routeInfo } from "../pages/info"
import './style.scss';
const Header = () => {
    return (
    <div className='header'>
        <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'></img>
        <nav>
            <NavLink to={routeHome()}>
                Home
            </NavLink>
            <NavLink to={routeCategories()}>
                Categories
            </NavLink>
            <NavLink to={routeSearch()}>
                Search
            </NavLink>
            <NavLink to={routeInfo()}>
                Info
            </NavLink>
        </nav>
    </div>
)}
export default Header