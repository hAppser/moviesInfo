import './style.scss';

export const Footer = () => {
    return(
        <div className='footer'>
            <div className="wrapper">
                <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'></img>
                <div>Made by: <br/> Danil Lystopad</div>
            </div>
        </div>
    )
}
