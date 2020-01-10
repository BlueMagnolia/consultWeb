import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-dom"
import 'antd/dist/antd.css';
// ---------------=== LOG OUT PART ===---------------------------
import LogoutBar from "../../component/header/logOut/logoutBar"
import HomeContent from "../../component/content/homeContent/homeContent"
import Footer from "../../component/footer/footer"

export default class HomeOut extends Component {    

    render() {
        return (
            <div>
                <LogoutBar/>
                <HomeContent/>
                <Footer/>
            </div>
        );
    }
}

