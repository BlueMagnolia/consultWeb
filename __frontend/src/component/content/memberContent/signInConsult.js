import React, { Component } from 'react'
import { Col} from 'antd'
import { Link } from "react-router-dom";
import { FormErrors } from './FormErrors'
import axios from 'axios';
import './signIn.scss'

export default class SignInConsult extends Component {
  constructor(props) {
    super(props);
    this.state = {
    email: "",
    password: "",
    formErrors: {email: '', password: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false,

    consult_name: "",
    tel: "",
    certificate: "",
    no_certificate: "",
    ref_name: "",
    ref_position: "",
    ref_tel: "",
    ref_letter: ""
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
    // console.log(`${fieldName} ${value}`)
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
    axios
      .post(`http://localhost:8080/registerConsult`, {
        email: this.state.email,
        password: this.state.password,
        consult_name: this.state.consult_name,
        tel: this.state.tel,
        certificate: this.state.certificate,
        no_certificate: this.state.no_certificate,
        ref_name: this.state.ref_name,
        ref_position: this.state.ref_position,
        ref_tel: this.state.ref_tel,
        ref_letter: this.state.ref_letter
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

              <div className="containerForm">
                <br />
                <Col span={1}></Col>
                <Col span={10} id="sectionLine">
                  <h3 className="signInHead">ข้อมูลส่วนตัว</h3>
                  <div className="profile">
                    <Col span={1}></Col>
                    <Col span={10}>
                      <form action="#" name="consultForm">
                        <div className="panel panel-default">
                          <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        <label for="titleBox">ชื่อ - นามสกุล</label>
                        <br />
                        <input
                          type="text"
                          className="shadowBox"
                          name="consult_name"
                          required
                          value={this.state.consult_name}
                          onChange={e => this.handleUserInput(e)}
                        />
                        <br />
                        <label for="titleBox">อีเมลล์</label>
                        <br />
                        <div
                          className={`form-group ${this.errorClass(
                            this.state.formErrors.email
                          )}`}
                        >
                          <input
                            type="text"
                            className="shadowBox"
                            name="email"
                            value={this.state.email}
                            onChange={e => this.handleUserInput(e)}
                          />
                        </div>
                        <br />
                        <label for="titleBox">รหัสลงทะเบียน</label>
                        <br />
                        <div
                          className={`form-group ${this.errorClass(
                            this.state.formErrors.password
                          )}`}
                        >
                          <input
                            type="password"
                            className="shadowBox"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleUserInput}
                          />
                        </div>
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
                        <label for="titleBox">ประเภทผู้ให้บริการ</label>
                        <br />
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="role"
                            value="psychiatrist"
                            onChange={e => this.handleUserInput(e)}
                          />{" "}
                          จิตแพทย์
                          <br />
                          <input
                            type="radio"
                            name="role"
                            value="psychologist"
                            onChange={e => this.handleUserInput(e)}
                          />{" "}
                          นักจิตวิทยา
                        </div>
                        <br />
                        <label for="titleBox">ใบรับรองการทำงาน</label>
                        <br />
                        <input
                          type="file"
                          accept="image/*"
                          name="certificate"
                          value={this.state.certificate}
                          onChange={e => this.handleUserInput(e)}
                        />
                        <br />
                        <br />

                        <label for="titleBox">เลขใบรับรองการทำงาน</label>
                        <br />
                        <input
                          type="tel"
                          className="shadowBox"
                          name="no_certificate"
                          pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}-[0-9]{2}"
                          placeholder="1111-222-3333-44"
                          value={this.state.no_certificate}
                          onChange={e => this.handleUserInput(e)}
                        />
                        <br />
                        <br />
                      </form>
                    </Col>
                  </div>
                </Col>

                <Col span={1}></Col>

                <Col span={10} className="profile">
                  <h3 className="signInHead">บุคคลอ้างอิงการทำงาน</h3>
                  <form>
                    <label for="titleBox">ชื่อ - นามสกุล</label>
                    <br />
                    <input
                      type="text"
                      className="shadowBox"
                      name="ref_name"
                      value={this.state.ref_name}
                      onChange={e => this.handleUserInput(e)}
                    />
                    <br />
                    <label for="titleBox">ตำแหน่ง</label>
                    <br />
                    <input
                      type="text"
                      className="shadowBox"
                      name="ref_position"
                      value={this.state.ref_position}
                      onChange={e => this.handleUserInput(e)}
                    />
                    <br />
                    <label for="titleBox">เบอร์ติดต่อ</label>
                    <br />
                    <input
                      type="tel"
                      className="shadowBox"
                      name="ref_tel"
                      pattern="[0-9]{10}"
                      value={this.state.ref_tel}
                      onChange={e => this.handleUserInput(e)}
                    />
                    <br />
                    <br />
                    <label for="titleBox">จดหมายรับรอง</label>
                    <br />
                    <input
                      type="file"
                      name="ref_letter"
                      accept="image/*"
                      value={this.state.ref_letter}
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
                        // disabled={!this.state.formValid}
                        onClick={e => this.handleSubmit(e)}
                      />
                    </div>
                  </form>
                </Col>
                {/* --------======= CLOSE BUTTON ======--------- */}
                <Col span={2}>
                  <Link to="/consult">
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