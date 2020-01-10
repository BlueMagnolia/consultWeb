import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table, Row, Col, DatePicker, Button } from "antd";
import axios from "axios";
import "./appointConsult.css";
import Axios from "../../../config/axios.setup"

const columns = [
  {
    title: "Time",
    dataIndex: "time",
    className:"tableSelectTime"
  },
  {
    title: "Tag",
    dataIndex: "tag",
    className:"tableSelectTime"
  }
];

const timeList = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00"
];

const data = [];

for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    time: timeList[i],
    tag: "เช้า"
  });
}
for (let i = 4; i < 8; i++) {
  data.push({
    key: i,
    time: timeList[i],
    tag: "กลางวัน"
  });
}
for (let i = 8; i < 11; i++) {
  data.push({
    key: i,
    time: timeList[i],
    tag: "เย็น"
  });
}
for (let i = 11; i < 15; i++) {
  data.push({
    key: i,
    time: timeList[i],
    tag: "กลางคืน"
  });
}

export default class AppointConsult extends React.Component {
  state = {
    selectedRowKeys: [],
    dateStr:[] // Check here to configure the default column
  };

  onSelectChange = selectedRowKeys => {
    // console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({selectedRowKeys });
  };

  onChangeDate = (date, dateString) => {
  // console.log(date, dateString);
  this.setState({dateStr:dateString});
  // console.log('Date',this.state.dateStr)
}

  handleSave()  {
    if (this.state.dateStr.length === 0 ) {
      console.log('Date missing');
      return
    }
    
    let onTime = "";
    const status= [];
    this.state.selectedRowKeys.forEach(timeIndex => {
      onTime += `${timeList[timeIndex]},`;
    }
    );
    onTime = onTime.substring(0, onTime.length - 1);
    let i;
    for (i= 0; i < this.state.selectedRowKeys.length; i++ ) {
      status.push('on');
    }
    // console.log('status',status)
    // console.log('save')
    console.log('onTime',onTime);
    console.log('Date',this.state.dateStr)
    Axios
      .post("/appointConsultRoom", {

        date: this.state.dateStr,
        time: onTime,
        status: this.state.status
      })
      .then(res => {
        console.log("send");
      })
      .catch(err => {
        console.log("error");
        console.error({ message: err.message });
      });
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: "all-data",
          text: "Select All Data",
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(46).keys()] // 0...45
            });
          }
        }
      ]
    };
    return (
      <Row>
        <Col span={1}></Col>
        <Col span={8} className="tagDateTime">
          <div className="boxDate">
            <h2>ยินดีต้อนรับ !</h2>
            <hr className="line" />
            <h2>น.พ.วิชาย เวนา</h2>
            <br />
            <br />
            <h3>กรุณาเลือกวัน</h3>
            <DatePicker onChange={this.onChangeDate} className="dateSelect" />
            <br />
            <br />
            <Button
              className="btn-Save"
              onClick={() => this.handleSave()}
            >
              Save
            </Button>
          </div>
        </Col>
        <Col span={1}></Col>
        <Col span={10}>
          {/* <div> */}
          <h3 className="tagDateTime">กรุณาเลือกเวลา</h3>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
          <br />
          <br />
          {/* </div> */}
        </Col>
        <Col span={1}></Col>
      </Row>
    );
  }
}


