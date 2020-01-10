import React, { Component } from "react";
import "antd/dist/antd.css";
import LogoutBar from "../../component/header/logOut/logoutBar";
import LogoutContent from "../../component/content/logoutContent/logoutContent";
import Footer from "../../component/footer/footer";

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <LogoutBar />
        <LogoutContent />
        <Footer />
      </div>
    );
  }
}


