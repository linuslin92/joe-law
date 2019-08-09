import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

/* Components */
import Container from './components/common/container';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import Home from './components/home/home';
import Practice from './components/practice/practice';
import Bio from './components/bio/bio';
import PageNotFound from './components/pagenotfound/pagenotfound';

/* Text Content */
import * as EN_CONT from './content/en/content.json';
import * as ES_CONT from './content/es/content.json';
import Contact from './components/contactus/contactus';

const images = require.context('./src/img', true);
let ENG = navigator.language.search(/en/i) > -1;
let CONTENT = ENG ? EN_CONT.default : ES_CONT.default;


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar content={CONTENT.navbar} />
        <div>
          <Switch>
            <Route path="/home" render={()=>(<Container><Home bgImg={images('./mallet_high.jpg')} bgImgMin={images('./mallet_low.jpg')} content={CONTENT.home} /></Container>)} />
            <Route path="/practice" render={()=>(<Container><Practice bgImg={images('./justice_high.jpg')} bgImgMin={images('./justice_low.jpg')} content={CONTENT.practice} /></Container>)} />
            <Route path="/bio" render={()=>(<Container><Bio content={CONTENT.bio} /></Container>)} />
            <Route path="/contact" render={()=>(<Container><Contact bgImg={images('./handshake_high.jpg')} bgImgMin={images('./handshake_low.jpg')} content={CONTENT.contactus} /></Container>)} />
            <Route path="/" exact render={()=><Redirect to="/home"></Redirect>} />
            <Route render={()=>(<Container><PageNotFound content={CONTENT.pageNotFound} /></Container>)} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
