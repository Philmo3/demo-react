import { Route,BrowserRouter as Router, Switch } from "react-router-dom";

import './App.css';
import Footer from "./components/layouts/footer/footer";
import MainNav from "./components/layouts/main-nav/main-nav"
import { Home } from "./pages/home/home";
import Todos from "./pages/todos/todos";

const App = () => {
    return( 
        <div>
        <Router>
            <MainNav />
            <Switch>

                <Route exact path="/" component={Home} />
        
                <Route path='/todos' component={Todos} />
        
            </Switch>

        </Router>
        <Footer />
        </div>
    )
}

export default App