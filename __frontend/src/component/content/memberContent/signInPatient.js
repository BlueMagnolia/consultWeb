import React, { Component } from 'react'
import { Col } from 'antd'
import { Link } from "react-router-dom";
import axios from "axios";
import './signIn.scss'

export default class SignInPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,

      pin_number: "",
      patient_name: "",
      birthday: "",
      gender: "",
      address: "",
      role: "",
      parent_name: "",
      parent_rel: "",
      parent_tel: ""
    };
  }
 
handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
                  // console.log({ [name]: value });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    console.log(`${this.state.emailValid} ${this.state.passwordValid}`);
    // ().preventDefault();
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit(e) {
    // e.preventDefault();
    console.log('submit');
    const state = this.state;
        this.setState(state);
        console.log(this.state  );
        // console.log(this.state.password);
    axios
      .post(`http://localhost:8080/registerPatient`, {
        email: this.state.email,
        password: this.state.password,
        pin_number: this.state.pin_number,
        patient_name: this.state.patient_name,
        birthday: this.state.birthday,
        gender: this.state.gender,
        address: this.state.address,
        tel: this.state.tel,
        role: this.state.role,
        parent_name: this.state.parent_name,
        parent_rel: this.state.parent_rel,
        parent_tel: this.state.parent_tel
      })
      .then(res => {
        console.log("send");
      })
      .catch(err => {
        console.error({ message: err.message });
      });
  }

    render() {
        return (
          <div>
            <main className="signInBox">
              <div className="bgSignIn">
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
              </div>
              {/* --------------------- SIGN IN BOX ------------------------- */}
              <div className="containerForm">
                <br />
                <Col span={1}></Col>
                <Col span={10} id="sectionLine">
                  {/* --------------======= CONSULT PROFILE ======----------------- */}
                  <h3 className="signInHead">ข้อมูลส่วนตัว</h3>
                  <div className="profile">
                    <Col span={1}></Col>
                    <Col span={10}>
                      <form action="#">
                        <label for="titleBox">ชื่อ - นามสกุล</label>
                        <br />
                        <input
                          type="text"
                          className="shadowBox"
                          name="patient_name"
                          value={this.state.patient_name}
                          onChange={e => this.handleUserInput(e)}
                        />
                        <br />
                        <label for="titleBox">อีเมลล์</label>
                        <br />
                        <input
                          type="text"
                          className="shadowBox"
                          name="email"
                          value={this.state.email}
                          onChange={e => this.handleUserInput(e)}
                        />
                        <br />
                        <label for="titleBox">รหัสลงทะเบียน</label>
                        <br />
                        <input
                          type="password"
                          className="shadowBox"
                          name="password"
                          value={this.state.password}
                          onChange={e => this.handleUserInput(e)}
                        />
                        <br />
                        <label for="titleBox">เบอร์ติดต่อ</label>
                        <br />
                        <input
                          type="tel"
                          className="shadowBox"
                          name="tel"
                          pattern="[0-9]{10}"
                          value={this.state.tel}
                          onChange={e => this.handleUserInput(e)}
                        />
                        <br />
                        <br />

                        <label for="titleBox">เพศ</label>
                        <br />
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={e => this.handleUserInput(e)}
                          />{" "}
                          ชาย
                          <br />
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={e => this.handleUserInput(e)}
                          />{" "}
                          หญิง
                        </div>
                        <br />
                        <label for="titleBox">เลขประจำตัวประชาชน</label>
                        <br />
                        <input
                          type="tel"
                          className="shadowBox"
                          name="pin_number"
                          pattern="[0-9]{13}"
                          onChange={e => this.handleUserInput(e)}
                        />
                        <br />
                        <label for="titleBox">วัน / เดือน / ปีเกิด</label>
                        <br />
                        <input
                          type="date"
                          name="birthday"
                          className="shadowBox"
                          onChange={e => this.handleUserInput(e)}
                        ></input>
                        <br />
                        <label for="titleBox">ที่อยู่</label>
                        <br />
                        <input
                          type="text"
                          className="shadowBox"
                          name="address"
                          onChange={e => this.handleUserInput(e)}
                        />
                        <br />
                        <br />
                        <br />
                      </form>
                    </Col>
                  </div>
                </Col>
                {/* =================================================================================== */}
                <Col span={1}></Col>
                {/* -----======= REF PART ======----------- */}
                <Col span={10} className="profile">
                  <h3 className="signInHead">ผู้ติดต่อฉุกเฉิน</h3>
                  <form>
                    <label for="titleBox">ชื่อ - นามสกุล</label>
                    <br />
                    <input
                      type="text"
                      className="shadowBox"
                      name="parent_name"
                      onChange={e => this.handleUserInput(e)}
                    />
                    <br />
                    <label for="titleBox">ความสัมพันธ์</label>
                    <br />
                    <input
                      type="text"
                      className="shadowBox"
                      name="parent_rel"
                      onChange={e => this.handleUserInput(e)}
                    />
                    <br />
                    <label for="titleBox">เบอร์ติดต่อ</label>
                    <br />
                    <input
                      type="tel"
                      className="shadowBox"
                      name="parent_tel"
                      pattern="[0-9]{10}"
                      onChange={e => this.handleUserInput(e)}
                    />

                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="centerButton">
                      <input
                        type="submit"
                        className="btn-grad2"
                        onClick={e => this.handleSubmit(e)}
                      />
                    </div>
                  </form>
                </Col>
                {/* -----======= CLOSE BUTTON ======----------- */}
                <Col span={2}>
                  <Link to="/logIn">
                    <button className="closeSignIn">
                      <img
                        src="https://i.ibb.co/bj479DD/error-fm.png"
                        alt="error-fm"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </button>
                  </Link>
                </Col>
                {/* ============================================ */}
              </div>
            </main>
          </div>
        );
    }
}


