import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, signOutUserAsync } from '../features/user/userSlice';

const Header = () => {

    const dispatch = useDispatch();

  
   const user = useSelector(selectUser);
  

  return (
    <header className="header">
        <div className="header-right">
            <ul>
                { user.user.auth !== true ?
                <button onClick={() => {dispatch(signOutUserAsync())}} >SignOut</button> 
                :
                <div>
                <Link to="/signin">
                <li>SignIn</li>
                </Link>
                <Link to="/signup">
                <li>SignUp </li>
                </Link>
                </div>
}               
                
                                
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
