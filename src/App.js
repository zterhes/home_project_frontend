import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/home"
import Plans from './pages/plans'
import PlanPage from "./pages/planPage"
import TrainingPage from "./pages/training"
import GymTrainer from "./pages/gymTrainer"

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/gymTraining'>
          <GymTrainer></GymTrainer>
        </Route>
        <Route path='/training'>
          <TrainingPage></TrainingPage>
        </Route>
      <Route path='/plans'>
          <Plans></Plans>
        </Route>
        <Route path='/planPage'>
          <PlanPage></PlanPage>
        </Route>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
