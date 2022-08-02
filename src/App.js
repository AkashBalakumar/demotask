import './App.css';
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import{BrowserRouter,Routes,Route} from'react-router-dom'
import  Example from './Components/demo'

function App() {
  return (
    <BrowserRouter>
    <h2>CURD Operation</h2>
      <Routes>
         <Route exact path="/" Components={Example}/>
        <Route exact path="/read" Components={Read}/>
        <Route exact path="/update" Components={Update}/>
         </Routes>
    </BrowserRouter>
      
  
  );
}

export default App;
