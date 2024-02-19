import './header.css';

const Header = ({ title, subtitle }) => (
    <div className="Header">
        <header className="row">
            <div className="col-sm-4"> { title } </div>
            <div className="col-sm-8"> { subtitle } </div>
        </header>
    </div>
);

export default Header;