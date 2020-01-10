import React, { Component } from "react";
import { Row, Col } from "antd";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./logoutContent.scss";
import { withRouter } from "react-router-dom";

class LogoutContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      email: "",
      password: ""
    };
  }

  handleLoginPatient = e => {
    e.preventDefault();
    console.log("submit");
    console.log(this.state);
    const { email, password } = this.state;

    axios
      .post("http://localhost:8080/loginPatient", { email, password })
      .then(result => {
        console.log(result.data);
        localStorage.setItem("ACCESS_TOKEN", result.data.token);
        this.setState({ isLogin: true });
        this.props.history.push("/appointPatientRoom");
      })
      .catch(err => {
        console.error(err);
        console.log("Email or password is incorrect.");
      });
  };

  handleLoginConsult = e => {
    e.preventDefault();
    console.log("submit");
    const { email, password } = this.state;
    axios
      .post("http://localhost:8080/loginConsult", { email, password })
      .then(result => {
        console.log(result.data);
        localStorage.setItem("ACCESS_TOKEN", result.data.token);
        this.setState({ isLogin: true });
        // console.log(this.props.history)
        this.props.history.push("/appointConsultRoom");
      })
      .catch(err => {
        console.error(err);
        console.log("Email or password is incorrect.");
      });
  };

  componentDidMount = () => {
    let token = localStorage.getItem("ACCESS_TOKEN");
    this.setState({ isLogin: token ? true : false });
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={1}></Col>
          <Col span={10}>
            <Col className="boxBg">
              <div className="boxImageFamily">
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
                <img
                  src="https://i.ibb.co/xffc4Y0/family-walking-fm1.png"
                  alt="family-walking-fm1"
                  style={{ width: "auto", height: "230px" }}
                  className="familyImg"
                />
                <br />
                <br />
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
                <div id="bokeh"></div>
              </div>
            </Col>
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <div class="container">
              <div class="tab-wrap">
                <input type="radio" id="tab4" name="tabGroup2" class="tab" />
                <label for="tab4" className="headMenu">
                  ผู้รับคำปรึกษา
                </label>
                <input type="radio" id="tab5" name="tabGroup2" class="tab" />
                <label for="tab5" className="headMenu">
                  ผู้ให้คำปรึกษา
                </label>

                <div class="tab__content">
                  <br />
                  <h3 className="subHeadMenu">เข้าสู่ระบบผู้รับคำปรึกษา</h3>
                  <hr className="lineBreak" />
                  <form>
                    <br />
                    <label for="titleBox" id="textInput">
                      อีเมลล์
                    </label>
                    <br />
                    <input
                      type="text"
                      className="shadowBox"
                      name="email"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                    <br />
                    <label for="titleBox" id="textInput">
                      รหัสลงทะเบียน
                    </label>
                    <br />
                    <input
                      type="password"
                      className="shadowBox"
                      name="password"
                      value={this.state.password}
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                    <br />
                    <br />
                    <br />
                    <div className="centerButton">
                      <input
                        type="submit"
                        name="confirmConsult"
                        className="btn-grad2"
                        onClick={this.handleLoginPatient}
                      />
                    </div>
                  </form>
                  <br />
                </div>

                <div class="tab__content">
                  <br />
                  <h3 className="subHeadMenu">เข้าสู่ระบบผู้ให้คำปรึกษา</h3>
                  <hr className="lineBreak" />
                  <form>
                    <br />
                    <label for="titleBox" id="textInput">
                      อีเมลล์
                    </label>
                    <br />
                    <input
                      type="text"
                      className="shadowBox"
                      name="email"
                      onChange={e => {
                        e.preventDefault();
                        this.setState({ email: e.target.value });
                      }}
                    />
                    <br />
                    <label for="titleBox" id="textInput">
                      รหัสลงทะเบียน
                    </label>
                    <br />
                    <input
                      type="password"
                      className="shadowBox"
                      name="password"
                      onChange={e => {
                        e.preventDefault();
                        this.setState({ password: e.target.value });
                      }}
                    />
                    <br />
                    <br />
                    <br />
                    <div className="centerButton">
                      <input
                        type="submit"
                        name="confirmConsult"
                        className="btn-grad2"
                        onClick={this.handleLoginConsult}
                      />
                    </div>
                  </form>
                  <br />
                </div>
              </div>
            </div>
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(LogoutContent);
