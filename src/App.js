import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Dogs from "./pages/Dogs"
import Cats from "./pages/Cats"
import Sheeps from "./pages/Sheeps"
import Goats from "./pages/Goats"
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Dogs} />
        <Route path='/cats' component={Cats} />
        <Route path='/sheeps' component={Sheeps} />
        <Route path='/goats' component={Goats} />
      </Switch>
    </Router>
  );
}
  
export default App;