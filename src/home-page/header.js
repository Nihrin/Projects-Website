import logo from './logo.jpg';
import { Link } from 'react-router-dom'

const Header = ({ title }) => (
    <div className="Header">
        <Link to={"/"} className='text-link'>
            <header className="row">
                <div className="col-sm-3"> <img src={logo} className="logo" alt="logo" /> </div>
                <div className="col-sm-9 mt-5 title"> { title } </div>
            </header>
        </Link>
    </div>
);

export default Header;