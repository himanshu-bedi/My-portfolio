import { React, useState, useEffect } from "react";
import {
  Space,
  Row,
  Col,
  Typography,
  
} from "antd";
import { MailOutlined, InstagramOutlined , LinkedinOutlined,GithubOutlined } from "@ant-design/icons";


const { Title } = Typography;

let style = {
  border: "1px solid #4096ff",
  borderBottom: "1px solid #f0f0f0",
  borderRadius: "8px 8px 0px 0px",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
};

const home = () => {
  

  const customStyles = {
    fontSize: "16px",
    fontFamily: "system-ui"
  };

  return (
    <Space direction="vertical" style={{ width: "100%"   }}  size={"large"} >
      <Row  justify={"center"} style={{boxShadow: "3px 8px 6px rgba(0, 0, 0.5, 0.1), 0px 4px 10px rgba(80, 5, 0, 0.5)",backgroundColor: "#f5f1f2"  }}>
      
      <Col xs={24} sm={19} md={19} lg={19} xl={19} >
          <Row
            align={"middle"}
            justify={"center"}
            style={{ minHeight:"75vh",}}
          >
            
           
            <Col xs={24} sm={10} md={10} lg={10} xl={10} style={{borderRight: "1px solid #ccc" }}>
              <Space
                direction="vertical"
                style={{ width: "100%" }}
                size={"large"}
              >
                <Row align={"middle"} justify={"center"} >
                  <img
                    src="src\pages\logo.jpg"
                    style={{
                      height: "20%",
                      width: "50%",
                      borderRadius: "50%",
                    }}
                  ></img>
                </Row>
                <Row align={"middle"} justify={"center"}>
                  <Title level={4}>Himanshu Bedi</Title>
                </Row>
                <Row justify={"start"}>
                <Title level={5} >
                    Web Developer | Problem Solver | Learner
                  </Title>
                </Row>

                <Row align={"middle"} justify={"center"}>
                  <a
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                    target="_blank"
                  >
                    {<MailOutlined style={{ color: "red", fontSize: 20 }} />}
                    <Typography.Text
                      code
                      strong
                      copyable
                      style={{ fontSize: 18 }}
                    >
                      {"bedihimanshu2001@gmail.com"}
                    </Typography.Text>
                  </a>
                </Row>
              </Space>
            </Col>
            <Col xs={24} sm={14} md={14} lg={14} xl={14}  style={{maxHeight:window.innerWidth <= 390 ? "45vh" : "55vh", overflowY:"auto"}}>
              <Space
                direction="vertical"
                style={{ width: "90%"  ,marginLeft:'2rem'}}
                size={"large"}
              >
                <Row align={"middle"} justify={"center"}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Typography.Text style={customStyles}>
                  I'm Himanshu Bedi , a 4th Year Computer Science Student at NIT Jalandhar. I have a strong foundation in Web developement, Problem Solving and CS fundamentals. I am  
                  open for internships which involve work related to Solftware developement . I have a good interest in Machine learning and deep learning too. Feel free to reach me out if you want to work on any project in these domains. Drop me a message on any platform and I will be there for you.
                </Typography.Text>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}></Col>
                <Row align={"middle"} justify={"center"}>
                  <Space direction="horizontal" style={{fontSize:25}}>
                    <a href="https://www.instagram.com/h_bediii/" target = "_blank" style={{color:"#E1306C"}}><InstagramOutlined /></a>
                    <a href="https://www.linkedin.com/in/himanshu-bedi-66365521a/" target = "_blank" style={{color:"blue"}}><LinkedinOutlined /></a>
                    <a href="https://github.com/himanshu-bedi" target = "_blank" style={{color:"green"}}><GithubOutlined /></a>
                    </Space>
                </Row>
                </Row>
                <Row align={"middle"} justify={"center"}>
                  <Typography.Text italic strong>PS : I am a SwiftResponder </Typography.Text>😁
                </Row>
                
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </Space>
  );
};

export default home;
