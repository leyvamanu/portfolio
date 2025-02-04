import logo from '../../assets/logo-simple-bg-transparent.svg'

function Logo() {
    return (
        <a href="/">
            <img src={logo} alt="Manu Leyva - Desarrollador Web - Logo" className="w-60"/>
        </a>
    );
}

export default Logo;