import React, { Component } from "react";
import LoginBar from "../../component/header/logIn/loginBar";
import AppointConsult from "../../component/content/appointContent/appointConsult";
import Footer from "../../component/footer/footer";

export default class AppointConsultPage extends Component {
  render() {
    return (
      <div>
        <LoginBar />
        <AppointConsult />
        <Footer />
      </div>
    );
  }
}
