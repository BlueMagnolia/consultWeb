import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import './loginBar.css'

export class LoginBar extends Component {


    render() {
        return (
            <div>
                <header>
                    <Row className="head">
                        <Col span={6} >
                            <img src="https://i.ibb.co/sVbj1yN/psi-human-logo.png" alt="psi-human-logo" height="80" width="80" />
                            <span className="logoHead">PRASHAYA</span>
                            &nbsp;&nbsp;
                            <span className="logoHead">|</span>
                        </Col>
                        <Col span={6} ></Col>
                        <Col span={12}>
                            <Row>&nbsp;</Row>
                            <Row>&nbsp;</Row>
                            <Row className="navbar">
                                <Link to="/#" className="home">หน้าหลัก</Link> &nbsp;
                                <Link to="/appointRoom" className="appoint">นัดหมาย</Link> &nbsp;
                                <Link to="/#" className="videoCall">Video Call</Link> &nbsp;
                                <Link to="/login" className="logout">ออกจากระบบ</Link>
                            </Row>
                        </Col>
                    </Row>
                </header>
            </div>
        )
    }
}

export default LoginBar