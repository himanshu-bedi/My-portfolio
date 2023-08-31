import React from "react";
import { Space, Row, Col, Typography, Button } from "antd";
import {
  MailOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  EnvironmentOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

const customStyles = {
  fontSize: "17px",
  fontFamily: "system-ui",
};

function handleDownload(pdfLink) {
  const pdfUrl = pdfLink
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.target = "_blank"
  link.download = 'write_up_doc.pdf';
  link.click();
};

const resume = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={"large"}>
      <Row
        justify={"center"}
        style={{boxShadow: "3px 8px 6px rgba(0, 0, 0.5, 0.1), 0px 4px 10px rgba(80, 5, 0, 0.5)",backgroundColor: "#f5f1f2"}}
      >
        <Col xs={24} sm={19} md={19} lg={19} xl={19}>
          <Row
            align={"middle"}
            justify={"center"}
            style={{  minHeight: "75vh" }}
          >
            <Col
              xs={24}
              sm={7}
              md={7}
              lg={7}
              xl={9}
              style={{ borderRight: "1px solid #ccc" }}
            >
              <Space
                direction="vertical"
                style={{ width: "95%" }}
                size={"large"}
              >
                <Row align={"middle"} justify={"center"}>
                  <img
                    src="../../logo.jpg"
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

                <Row align={"middle"} justify={"start"} gutter={[8, 8]}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
                  </Col>

                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <a
                      href="https://en.wikipedia.org/wiki/Amritsar"
                      target="_blank"
                    >
                      {
                        <EnvironmentOutlined
                          style={{ color: "black", fontSize: 20 }}
                        />
                      }
                      <Typography.Text
                        code
                        strong
                        copyable
                        style={{ fontSize: 18 }}
                      >
                        {"Amritsar"}
                      </Typography.Text>
                    </a>
                  </Col>

                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <a
                      href="https://www.linkedin.com/in/himanshu-bedi-66365521a/"
                      target="_blank"
                    >
                      {
                        <LinkedinOutlined
                          style={{ color: "blue", fontSize: 22 }}
                        />
                      }
                      <Typography.Text
                        code
                        strong
                        
                        style={{ fontSize: 18 }}
                      >
                        {"LinkedIn"}
                      </Typography.Text>
                    </a>
                  </Col>
                </Row>
              </Space>
            </Col>
            <Col xs={24} sm={15} md={15} lg={15} xl={15}  style={{maxHeight: window.innerWidth <= 586 ? (window.innerWidth <= 533?'45vh' : '55vh') : '84vh',overflowY :"auto" }} >
              <Space
                direction="vertical"
                style={{ width: "90%", marginLeft: "2rem" }}
                size={"large"}
              >
                <Row gutter={[24,24]} >
                  
                <Row align={"middle"} justify={"center"}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Typography.Title level={3} underline>Summary</Typography.Title>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Typography.Text strong style={{ customStyles }}>
                      I take pleasure in transforming abstract ideas into concrete solutions using coding. Always on the lookout for the most efficient problem-solving strategies, with an unwavering commitment to the sophistication of code.
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Typography.Title level={3} underline>Education</Typography.Title>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Typography.Text style={{ customStyles }}>
                        <Typography.Title level={5}>
                          Dr. BR Ambedkar National Institute of Technology
                          Jalandhar
                        </Typography.Title>

                        <Typography.Text style={{ fontSize: 16 }}>
                          <span style={{ fontWeight: "20px" , fontStyle:"italic" }}>
                            B.Tech Computer Science and Engineering{" "}
                          </span>
                          (CGPA : 8.97)
                        </Typography.Text>

                        <Col>
                          <Typography.Text style={{fontFamily:"sans-serif"}}>
                            (Dec 2020 - June 2024)
                          </Typography.Text>
                        </Col>
                      </Typography.Text>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <Typography.Title level={3} underline>Experience</Typography.Title>
                    </Col>
                    <Col span={24}>
                      <Typography.Text style={{ customStyles }}>
                        
                        <Typography.Title level={5}>
                          Software Developer Intern at{" "}
                          <a href="https://ensuredit.com/" target="_blank">
                            Ensuredit
                          </a>
                        </Typography.Title>
                        <Typography.Text style={{fontFamily:"sans-serif"}}>
                          (June 2024 - Aug 2024)
                        </Typography.Text>
                      </Typography.Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Text strong>
                        <CheckCircleOutlined style={{ marginRight: 8, color:'green' }} />
                        Worked as a Full stack developer here.
                      </Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Text strong>
                        <CheckCircleOutlined style={{ marginRight: 8, color:'green' }} />
                        Leveraged the power of go gRPC at Backend
                      </Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Text strong>
                        <CheckCircleOutlined style={{ marginRight: 8, color:'green' }} />
                        Used React js at Frontend to build a
                        website for Company
                      </Text>
                    </Col>
                  </Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Row align={"middle"} justify={"center"}>
                    <Button type="primary" onClick={()=>handleDownload("https://drive.google.com/file/d/1nogGOhWE_OJYphNJpoH8_ENLhJ9BdD-N/view?usp=sharing")}>Download Now</Button>
                    </Row>
                  
                  </Col>
                  
                    
                   
                 
                </Row>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </Space>
  );
};

export default resume;
