import './header.scss';
// import { Link } from 'react-router-dom';

const Header = () => {

    // const logoLetters = 'gi';

    return (
        <div className='header'>
          <div className='wrapper'>
                <a href='/' className='logo-link'>
                    <p className='logo-letters firstname'>GODSON</p>
                    <p className='logo-letters surname'>IMIEBO</p>
                    {/* <div className='logo-wrapper'>
                        <div className='logo'>GODSON IMIEBO</div>
                    </div> */}
                </a>
                {/* <ul className='nav-links'>
                    <li className='nav-link'><Link to='/about'>About</Link></li>
                    <li className='nav-link'><Link to='/projects'>Projects</Link></li>
                    <li className='nav-link'><a href='mailto:imiebo.godson@gmail.com'>Contact</a></li>
                    <li className='nav-link'><a href='https://dev.to/imiebogodson'>Blog</a></li>
                </ul> */}
          </div>  
        </div>
    )
}

export default Header;
