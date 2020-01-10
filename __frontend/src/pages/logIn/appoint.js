import React, { Component } from 'react'
import LoginBar from '../../component/header/logIn/loginBar'
import AppointContent from '../../component/content/appointContent/appointContent'
import Footer from "../../component/footer/footer";

export default class AppointPage extends Component {
    

    render() {
        return (
          <div>
            <LoginBar />
            <AppointContent />
            <Footer />
          </div>
        );
    }
}


