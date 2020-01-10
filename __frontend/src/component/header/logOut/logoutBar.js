import React, { Component } from 'react'
import { Row, Col } from "antd";
import {Link} from 'react-router-dom';
import './logoutBar.css'


export class LogoutBar extends Component {
    
    render() {
        return (
          <div>
            <header>
              <Row className="head">
                <Col span={6}>
                  <img
                    src="https://i.ibb.co/sVbj1yN/psi-human-logo.png"
                    alt="psi-human-logo"
                    height="80"
                    width="80"
                  />
                  <span className="logoHead">PRASHAYA</span>
                  &nbsp;&nbsp;
                  <span className="logoHead">|</span>
                </Col>
                <Col span={6}></Col>
                <Col span={12}>
                  <Row>&nbsp;</Row>
                  {/* <Row>&nbsp;</Row> */}
                  <Row className="navbar">
                    <Link to="/homeOut">
                      <a className="navbar-home">หน้าหลัก</a> &nbsp;
                    </Link>
                    <Link to="/consult">
                      <a className="navbar-consult">ผู้ให้คำปรึกษา</a> &nbsp;
                    </Link>
                    <Link to="/registerPatient">
                      <a className="navbar-member">สมัครสมาชิก</a> &nbsp;
                    </Link>
                    <Link to="/logIn">
                      <a className="navbar-login">เข้าสู่ระบบ</a>
                    </Link>
                  </Row>
                </Col>
              </Row>
            </header>
          </div>
        );
    }
}

export default LogoutBar
