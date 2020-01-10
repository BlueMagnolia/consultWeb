import React, { Component } from "react";
import "antd/dist/antd.css";
import LogoutBar from "../../component/header/logOut/logoutBar";
import SignInPatSuccess from "../../component/content/memberContent/signInPatSuccess";
import Footer from "../../component/footer/footer";

export default class SignInPatSuccessPage extends Component {
  render() {
    return (
      <div>
        <LogoutBar />
        <SignInPatSuccess />
        <Footer />
      </div>
    );
  }
}
