import './style.scss';
const Header = () => {
    return (
    <div className='header'>
        <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'></img>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Categories</a>
            </li>
            <li>
                <a href="#">Search</a>
            </li>
            <li>
                <a href="#">Info</a>
            </li>
        </ul>
    </div>
)}
export default Header