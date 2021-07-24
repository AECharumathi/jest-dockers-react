import './App.scss';

import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Courses from "./components/Courses";
import UserEnquired from "./components/UserEnquired";
import UserForum from "./components/UserForum";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Router>
          <Route path="/courses" children={<Courses />} />
          <Route path="/userEnquired" children={<UserEnquired />} />
          <Route path="/userForum" children={<UserForum />} />
          <Redirect from="/" to="/courses" />
        </Router>
      </body>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
