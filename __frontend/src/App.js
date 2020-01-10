import React from "react";
// import ReactDOM from "react-dom";
import { Route, Switch } from 'react-router-dom';

import HomeOut from './pages/logOut/homeOut';
import Consult from '../src/pages/logOut/consult'
import LogIn from '../src/pages/logOut/login'
import SignInConsultPage from '../src/pages/logOut/signInConsult'
import SignInConsultSuccessPage from "../src/pages/logOut/signInConSuccessPage";
import SignInPatientPage from '../src/pages/logOut/signInPatient'
import SignInPatSuccessPage from "../src/pages/logOut/signInPatSuccess";

import AppointPage from '../src/pages/logIn/appoint';
import AppointConsultPage from '../src/pages/logIn/appointConsult'

function App() {
  return (
    <main>
      <Switch>
        {/* ------------=== LOG OUT ===------------- */}
        <Route path="/homeOut" component={HomeOut} exact />
        <Route path="/consult" component={Consult} />
        <Route path="/registerConsult" component={SignInConsultPage} />
        <Route
          path="/registerConsultSuccess"
          component={SignInConsultSuccessPage}
        />
        <Route path="/registerPatient" component={SignInPatientPage} />
        <Route
          path="/registerPatientSuccessPage"
          component={SignInPatSuccessPage}
        />
        <Route path="/logIn" component={LogIn} />

        {/* ------------=== LOG IN ===------------- */}
        <Route path="/appointPatientRoom" component={AppointPage} />
        <Route path="/appointConsultRoom" component={AppointConsultPage} />
      </Switch>
    </main>
  );
}

export default App;
