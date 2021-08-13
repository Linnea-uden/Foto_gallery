import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import {useAuth0} from '@auth0/auth0-react';
import blob from './images/blob.png'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
    <>
    <Home />
      {/* <LoginButton />
      <LogoutButton />
      <Profile /> */}
    {/* <img src={blob} alt="" /> */}
    </>
  );
}

export default App;
