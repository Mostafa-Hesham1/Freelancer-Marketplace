import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';
import TalentMarketplace from './components/TalentMarketplace';
import JobListing from './components/JobListing';
import FindWork from './components/FindWork';
import JobListings from './components/JobListings';
import ProposeForm from './components/ProposeForm';
import Inbox from './components/Inbox';
import Pricing from './components/Pricing';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/talent-marketplace" component={TalentMarketplace} />
            <Route path="/job-listing/:skill" component={JobListing} />
            <Route path="/find-work" component={FindWork} />
            <Route path="/job-listings/:category" component={JobListings} />
            <Route path="/propose" component={ProposeForm} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
