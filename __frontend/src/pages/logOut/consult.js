import React, { Component } from "react";
import 'antd/dist/antd.css';
import LogoutBar from "../../component/header/logOut/logoutBar";
import ConsultContent from "../../component/content/consultContent/consultContent"
import Footer from "../../component/footer/footer"
export class Consult extends Component {
    render() {
        return (
          <div>
            <LogoutBar />
            <ConsultContent />
            <Footer />
          </div>
        );
    }
}

export default Consult
