import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Topdiv from './Topdiv';
import Latest from './Latest';
import Articles from './Articles';
import Adv from './Adv';
import Vgallery from './Vgallery';
import Catch from './Catch';
// import Technology from './Technology';

function App() {
  return ( <div>

        <Header></Header>
        <Nav></Nav>
        <Topdiv></Topdiv>
        <Latest></Latest>
        <Articles></Articles>
        <Adv></Adv>
        <Vgallery/>
        <Catch></Catch>
        {/* <Technology></Technology> */}
  </div>
  
  );
}

export default App;
