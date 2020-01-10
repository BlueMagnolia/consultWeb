import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Link } from "react-router-dom";
import './signIn.scss'

export default class SignInConSuccess extends Component {

    render() {
        return (
            <div>
                <main className="signInBox">
                    <div className="bgSignIn" >
                        <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                        <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                        <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                        <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                        <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                        <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                        <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                        <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                    </div>
                    <div className="containerForm">
                        <Col span={2}></Col>
                        <Col span={20} className="successText">
                        
                            <p className="titleHead">ส่งข้อมูลสมัครผู้ให้คำปรึกษาแล้ว</p>
                            <p className="subTitleHead">รอรับการยืนยันทางอีเมลล์</p>
                           
                        </Col>
                        <Col span={2}>
                            <br/>
                            <Link to="/consult">
                                <button className="closeSignIn">
                                <img src="https://i.ibb.co/bj479DD/error-fm.png" alt="error-fm" style={{ width: '30px', height: '30px' }} />
                            </button>
                            </Link>
                        </Col>
                    </div>
                </main>
            </div>
        )
    }
}

