import logo from '../logo.svg';

function Navbar() {
    return(
        <>
            <img src={logo} style={{width: 100}}/>
            <ul>
                <li><a href='/'>Game</a></li>
                <li><a href='/about'>About</a></li>
            </ul>
        </>
    )
}

export default Navbar;