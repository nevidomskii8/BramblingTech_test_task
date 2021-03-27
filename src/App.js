import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { fetchState } from './Redux/action/stateAction';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchState())
  }, []);


  return (
    <Router>
      <Switch>
        <Route path='/:nav'>
            <Main />
        </Route>
        <Redirect to="/tabel" />
      </Switch>
    </Router>
  );
};
export default App;
