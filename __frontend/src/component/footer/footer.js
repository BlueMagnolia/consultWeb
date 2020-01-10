import React, { Component } from 'react'
import {Row, Col} from 'antd'
import './footer.css'

export class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <Row className="footer">
                    <Col span={3}>
                        <Row className="textHeadFooter">ติดต่อเรา</Row>
                        <Row className="logoFooter">
                            <img src="https://i.ibb.co/7SGMFHR/line.png" alt="line" style={{width: 40, height: 40 }}/> 
                            <img src="https://i.ibb.co/LCcXz0H/black-back-closed-envelope-shape.png" alt="black-back-closed-envelope-shape" style={{ width: 40, height: 40 }}/>
                            <img src="https://i.ibb.co/WgfTbbR/telephone.png" alt="telephone" style={{ width: 40, height: 40 }}/>
                        </Row>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={3}>
                        <Row className="textHeadFooter">ติดตามเรา</Row>
                        <Row className="logoFooter">
                            <img src="https://i.ibb.co/wY5cwY2/facebook.png" alt="facebook" style={{ width: 40, height: 40 }}/>
                            <img src="https://i.ibb.co/TKTYVX9/medium.png" alt="medium" style={{ width: 40, height: 40 }}/>
                            <img src="https://i.ibb.co/Z1Mxncm/youtube.png" alt="youtube" style={{ width: 40, height: 40 }}/>
                        </Row>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={10}>
                        <img src="https://i.ibb.co/KDWTGtw/android-app-Store.png" alt="android-app-Store" style={{ width: 200, height: 65 }}/>
                        <img src="https://i.ibb.co/0y0Q2Qr/apple-app-Store.png" alt="apple-app-Store" style={{ width: 200, height: 70 }}/>
                    </Col>
                    <Col span={4} className="additionFooter">
                        <a className="textHeadFooter">เงื่อนไขการใช้บริการ</a><br/>
                        <a className="textHeadFooter">นโยบายความเป็นส่วนตัว</a><br/>
                        <a className="textHeadFooter">นโยบายการคืนเงิน</a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer
