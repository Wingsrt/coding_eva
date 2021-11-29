import Login from "./login";
import {Switch,Route} from 'react-router-dom';

import Dashbord from "./dashbord";
import Detail from "./detail";


function App() {
  return (
   <>
   <h1 className='heading'>book my show</h1>
     <Switch>
       <Route exact  path='/'  component={Login}/>
       <Route  path='/main' component={Dashbord}/>
       <Route  path='/detail' component={Detail}/>
     </Switch>
   </>
  );
}

export default App;
