import React, { Component } from "react";
import "antd/dist/antd.css";
import LogoutBar from "../../component/header/logOut/logoutBar";
import SignInConsult from "../../component/content/memberContent/signInConsult"
import Footer from "../../component/footer/footer";

export default class SignInConsultPage extends Component {
  render() {
    return (
      <div>
        <LogoutBar />
        <SignInConsult />
        <Footer />
      </div>
    );
  }
}


