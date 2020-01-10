import React, { Component } from "react";
import 'antd/dist/antd.css';
import './homeContent.css';

export class HomeContent extends Component {
    // constructor(props) {

    // }

    render() {
        return (
            <div>
                <main>
                    <img src="https://i.ibb.co/drxQ1cH/conselor-with-patient.png" alt="conselor-with-patient" className="bg"/>
                    <p className="textHome1">อยากหาผู้รับฟัง ปรึกษาอย่างสบายใจได้จากที่บ้าน</p>
                    {/* <p className="textHome2">เศร้า เบื่อหน่าย วิตกกังวล..?</p> */}
                    {/* <p className="textHome3">ตอนนี้คุณรู้สึกอย่างไร?</p> */}
                    <div className="textboxHome"></div>
                </main>
            </div>
        );
    }
}

export default HomeContent;