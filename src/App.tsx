import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloProvider from './ApolloProvider.tsx';
import { Container, Row, Col } from 'react-bootstrap';
import { AuthProvider } from './context/auth';
import './App.scss';
import './App.global.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import DynamicRoute from './util/DynamicRoute';

export default function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <Router>
          <Container className="pt-5">
            <Switch>
              <DynamicRoute path="/" component={Login} exact guest />
              <DynamicRoute path="/register" component={Register} guest />
              <DynamicRoute path="/home" component={Home} authenticated />
            </Switch>
          </Container>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}
