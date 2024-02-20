import logo from './logo.jpg';

const Header = ({ title }) => (
    <div className="Header">
        <header className="row">
            <div className="col-sm-3"> <img src={logo} className="logo" alt="logo" /> </div>
            <div className="col-sm-9 mt-5 title"> { title } </div>
        </header>
    </div>
);

export default Header;