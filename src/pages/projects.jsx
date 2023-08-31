import React, { useState } from "react";
import { Space, Row, Col, Typography, Button , List , Card, Layout } from "antd";
const { Title, Text } = Typography;
const {Footer}=Layout

const projects = () => {
  const [openModal,setopenModal]=useState(false);
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={"large"} >
      
      <Row gutter={[16, 16]} style={{maxHeight:"85vh", overflowY:"auto", backgroundColor: "#f5f1f2"}}> 
        
      <Col xs={24} sm={8} md={8} lg={8} xl={8}>
        <a href="https://cheerful-sunflower-2dc9bb.netlify.app/" target="_blank">
            <Card 
            cover={ <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoXBHYy-qXhzmaWN7U7vdclboMM32IDPNZgxhpoF-xvbuztmd5moFVBKeSn4UWn7QBKs&usqp=CAU"
                    style={{
                      objectFit: 'cover',
                      height: '13rem', 
                      width: '100%',
                      border :'2px solid black' 
                    }}
                  ></img>}
                  style={{border :'2px solid black' , height:'22rem' , cursor:"pointer"}}
                  hoverable
              
            >
              <Card.Meta
                title={"My Notebook"}
                description={
                  <Space direction='vertical'>
                    <Space direction='horizontal'>
                      <Typography.Text strong type="secondary">Enables Users to make their own customized notes </Typography.Text>
                    </Space>
                    
                  </Space>

                }
              />
            </Card>
            </a>
          </Col>
       
          <Col xs={24} sm={8} md={8} lg={8} xl={8}>
            <a href="https://github.com/himanshu-bedi/Potato-Leaf-Disease-Detection.git" target="_blank">
            <Card 
            cover={ <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWvjcVYVIsVf_-cHpJc3AZp2TIepx7MVi2mAgHOheM9x8P7CXMye_xtihejCilVyLCw8&usqp=CAU"
                    style={{
                      objectFit: 'cover',
                      height: '13rem', 
                      width: '100%', 
                      border :'2px solid black'
                      
                    }}
                  ></img>}
                  hoverable
                  style={{border :'2px solid black' , height:'22rem',cursor:"pointer"}}
            >
              <Card.Meta
                title={"Plant Leaf Disease Detection"}
                description={
                  <Space direction='vertical'>
                    <Space direction='horizontal'>
                      <Typography.Text  strong type="secondary">Detects Disease present in a Leaf  only just by Uploading its image:</Typography.Text>
                    </Space>
                    
                  </Space>

                }
              />
            </Card>
            </a>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8} xl={8}>
            <a href="https://dynamic-weather-app.onrender.com/" target="_blank">
            <Card 
            cover={ <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-qAo2IZB28B6B4VPzvb2ROO7yBzsJv3kfpA&usqp=CAU"
                    style={{
                      objectFit: 'cover',
                      height: '13rem', 
                      width: '100%', 
                      border :'2px solid black'
                    }}
                  ></img>}
                  hoverable
                  style={{border :'2px solid black' , height:'22rem',cursor:"pointer"}}
              
            >
              <Card.Meta
                title={"Dynamic Weather Website"}
                description={
                  <Space direction='vertical'>
                    <Space direction='horizontal'>
                      <Typography.Text strong type="secondary">It allows you Check weather details for any location in the world</Typography.Text>
                    </Space>
                    
                  </Space>

                }
              />
            </Card>
            </a>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8} xl={8}>
            <a href = "https://sports-app-one.vercel.app/" target="_blank">
            <Card 
            cover={ <img
                    src="../../playtarium.PNG"
                    style={{
                      objectFit: 'cover',
                      height: '13rem', 
                      width: '100%', 
                      border :'2px solid black'
                    }}
                  ></img>}
                  style={{border :'2px solid black' , height:'22rem',cursor:"pointer"}}
                  hoverable
                  
              
              
            >
              <Card.Meta
                title={"Playtarium Sports App"}
                description={
                  <Space direction='vertical'>
                    <Space direction='horizontal'>
                      <Typography.Text strong type="secondary">Interactive Web application that allows to book your slot beforehand in locations present nearby.</Typography.Text>
                    </Space>
                    
                  </Space>

                }
              />
            </Card>
            </a>
          </Col>
         
       
      </Row>

      {/* <Modal open = {openModal} onCancel={()=>setopenModal(false)} footer={null} >
      <Col xs={24} sm={8} md={8} lg={8} xl={8}>
        <Typography.Title>

        </Typography.Title>
        </Col>
      </Modal> */}

       
      
    </Space>
  );
};

export default projects;
