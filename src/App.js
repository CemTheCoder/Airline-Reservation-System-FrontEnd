import logo from './logo.svg';
import './App.css';
import Navi from './layouts/Navi';

import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';
import { Container } from 'semantic-ui-react';
import Footer from './layouts/Footer';
import Panel from './layouts/Panel';
function App() {
  return (
    <div className="App">
     <Navi/>
     {localStorage.getItem("roleId") == 1?<Panel/>:""}
     <Container>
     <Dashboard/>
     </Container>
     <Footer/>
    </div>
  );
}

export default App;
