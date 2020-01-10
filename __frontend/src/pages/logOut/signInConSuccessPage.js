import React, { Component } from "react";
import "antd/dist/antd.css";
import LogoutBar from "../../component/header/logOut/logoutBar";
import SignInConSuccess from "../../component/content/memberContent/signInConSuccess";
import Footer from "../../component/footer/footer";

export default class SignInConsultSuccessPage extends Component {
  render() {
    return (
      <div>
        <LogoutBar />
        <SignInConSuccess />
        <Footer />
      </div>
    );
  }
}
