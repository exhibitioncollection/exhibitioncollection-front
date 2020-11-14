import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/:id' component={Detail}></Route>
          <Route path='/*'>404 NOT FOUND</Route>
        </Switch>
    </Router>
  );
}

export default App;
