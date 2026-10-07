import './Navbar.css'

function Navbar(){
    return(
        <nav className='navbar'>
            <a href="#" className='logo'>
                Usta <span>Pro</span>
            </a>

            <div className='nav-links'>
                <a href="#services">Xizmatlar</a>
                <a href="#master">Ustalar</a>
                <a href="#about">Biz Haqimizda</a>
            </div>

            <button className='nav-button'>
                Kirish
            </button>
        </nav>
    );
}

export default Navbar;