
import './App.css';
import {Button} from '@chakra-ui/react'
import {Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
function App() {
  return (
    <div className="App">
      <Route path='/' component={HomePage}/>
      <Route path='/chats' component={cha} />
      
      </div>
  );
}

export default App;
