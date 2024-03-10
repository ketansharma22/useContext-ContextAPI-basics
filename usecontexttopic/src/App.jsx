import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {

  return (
    <UserContextProvider>
      <h1>useContext Concept,  I know this is simple but this is for beginners ... FOCUS ON THE CODE!!! 
      </h1><br/><br/>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App;
