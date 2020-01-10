import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Link } from "react-router-dom";
import './consultContent.scss'
import dataConsult from './db.json'


export class ConsultContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteConsult: []
    };
  }
  componentDidMount() {
    const { quoteConsult } = dataConsult;
    this.setState(state => ({
      quoteConsult 
    }))
  }
  
  handleClick(quote) {
    this.setState({ newQuote: quote });
  }

    render() {
        return (
          <div>
            <main className="consultBox">
              <Row type="flex" justify="center">
                <Col 
                span={9} 
                offset={1} 
                // xs={24} lg={24}
                className="noteConsult">
                  <Row>&nbsp;</Row>
                  <Row>
                    <div className="boxNoteConsultOuter1">
                      <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                      <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                      <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                      <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                      <div id="bokeh"></div><div id="bokeh"></div><div id="bokeh"></div>
                    </div>
                    <div className="boxNoteConsultOuter2">
                      <p className="textNoteConsult1">"</p>
                      <p className="textNoteConsult2">
                        {this.state.newQuote}
                      </p>
                      <p className="textNoteConsult3">"</p>
                    </div>
                  </Row>
                </Col>
                <Col span={2}></Col>
                <Col span={9} className="listBoxConsult">
                  <Row>&nbsp;</Row>
                  <Row>
                    <ul className="listConsultHead" id="styleScroll">
                      {this.state.quoteConsult.map(quoteConsult => (
                        <li key={quoteConsult.id}>
                          <button
                            className="consultNameBox"
                            onClick={() => this.handleClick(quoteConsult.quote)}
                          >
                            <p className="avatar"></p>&nbsp;
                            <p>
                              {quoteConsult.name} {quoteConsult.role}
                            </p>
                          </button>
                          <br></br>
                        </li>
                      ))}
                    </ul>
                  </Row>
                  <Row>
                    <Link to="/registerConsult">
                      <button className="btn-grad1">สมัครผู้ให้คำปรึกษา</button>
                    </Link>
                  </Row>
                </Col>
              </Row>
            </main>
          </div>
        );
    }
}

export default ConsultContent
