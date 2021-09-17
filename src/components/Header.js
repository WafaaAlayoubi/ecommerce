import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header">
        <div className="header-right">
            <ul>
                <Link to="/signin">
                <li>SignIn</li>
                </Link>
                <Link to="/signup">
                <li>SignUp </li>
                </Link>
            </ul>
        </div>
        <div className="header-left">
            <ul>
                <Link to="/">     
                <li>Home</li>
                </Link>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
    </header>
  )
}


export default Header
