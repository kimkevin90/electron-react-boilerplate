import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloProvider from './ApolloProvider.tsx';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import './App.scss';
import './App.global.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

export default function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" component={Hello} />
    //   </Switch>
    // </Router>
    <ApolloProvider>
      <Router>
        <Container className="pt-5">
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
}
