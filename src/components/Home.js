import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUser } from '../features/user/userSlice';

const Home = () => {

  const user = useSelector(selectUser);
  let history = useHistory();

  if(user.auth === false)
  {
    history.push('/signin');
  }

  
    return (
      <div>
          <h3>home</h3>
      </div>
    )
  }
  
  
  export default Home
  