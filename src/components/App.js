import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Header, Footer } from './layouts';
import {Home} from './pages'
import '../components/style/style.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />            
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
