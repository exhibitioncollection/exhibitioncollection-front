import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Header from './components/Header/Header';

const object = [
  {
    idx : 0,
    img : "images/img1.png",
    name : "Goods",
    type : "UX/UI",
    term : "2020.03 ~ 2020.10",
    madeBy : "Jin Kim",
    active : "OB"
  },
  {
    idx : 1,
    img : "images/img2.png",
    name : "AiDer",
    type : "Mobility/UX/UI",
    term : "2020.01 ~ 2020.11",
    madeBy : "John Ahn",
    active : "YB"
  },
  {
    idx : 2,
    img : "images/img3.png",
    name : "Bliss",
    type : "Automotive Design/UX/UI",
    term : "2020.02 ~ 2020.04",
    madeBy : "Shin Kim",
    active : "YB"
  },
  {
    idx : 3,
    img : "images/img4.png",
    name : "Kurly's House",
    type : "UX/UI",
    term : "2020.02 ~ 2020.08",
    madeBy : "Kurly",
    active : "OB"
  }
]

function App() {
  return (
    <Router>
      <Header></Header>
        <Switch>
          {/* <Route exact path='/' component={Home}></Route> */}
          <Route exact path='/' render={()=>(<Home object={object} ></Home>)}></Route>
          <Route exact path='/:id' component={Detail}></Route>
          <Route path='/*'>404 NOT FOUND</Route>
        </Switch>
    </Router>
  );
}

export default App;
