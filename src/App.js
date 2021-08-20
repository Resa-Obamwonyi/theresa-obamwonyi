import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/xp" component={Experience} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
