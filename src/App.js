import Home from "./pages/Home";
import Blog from "./pages/Blog";
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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
