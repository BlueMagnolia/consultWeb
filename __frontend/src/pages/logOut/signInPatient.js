import React, { Component } from "react";
import "antd/dist/antd.css";
import LogoutBar from "../../component/header/logOut/logoutBar";
import SignInPatient from "../../component/content/memberContent/signInPatient";
import Footer from "../../component/footer/footer";

export default class SignInPatientPage extends Component {
  render() {
    return (
      <div>
        <LogoutBar />
        <SignInPatient />
        <Footer />
      </div>
    );
  }
}


