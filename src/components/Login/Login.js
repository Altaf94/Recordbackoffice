import React, { useState } from "react";
import { Row, Col, Typography, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Theismaili from "../../Images/Theismaili.png";
import { useHistory } from "react-router-dom";
import RadioButton from "../RadioButton/RadioButton";

const { Title, Text } = Typography;

const LoginPage = () => {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptiontwo, setSelectedOptionTwo] = useState("");

  const handleChangeInputOne = (event) => {
    setSelectedOption(event.target.value);
    history.push("/newemail");
  };
  const handleChangeInputTwo = (event) => {
    setSelectedOptionTwo(event.target.value);
  };
  const onFinish = (values) => {
    console.log("Received values:", values);
    history.push("/Dashboard");
  };

  return (
    <Row style={{ minHeight: "100vh" }}>
      {/* LEFT SIDE */}
      <Col
        span={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#F8F9FC",
          padding: "0 50px",
        }}
      >
        <Title level={3} style={{ marginTop: "20px" }}>
          Record Portal
        </Title>
        {/* <ul style={{ textAlign: "left", fontSize: "16px", marginTop: "10px" }}>
          <li>✔ All-in-one tool</li>
          <li>✔ Build, run, and scale your apps - end to end</li>
          <li>✔ Easily add & manage your services</li>
        </ul> */}
      </Col>

      {/* RIGHT SIDE (FULL WHITE, NO BOX) */}
      <Col
        span={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#FFFFFF", // Entire right half is white
          minHeight: "100vh",
        }}
      >
        {/* <Title level={2} style={{ textAlign: "center" }}>
          Please Select the option
        </Title> */}
        {/* <RadioButton
          label="Change Email/Mobile"
          value="change_email_mobile"
          selectedValue={selectedOption}
          onChange={handleChangeInputOne}
        />
        <RadioButton
          label="New Profile"
          value="New Profile"
          selectedValue={selectedOption}
          onChange={handleChangeInputOne}
        />
        <Button type="primary" htmlType="submit">
          Continue
        </Button> */}
        <Title level={2} style={{ textAlign: "center" }}>
          Login in
        </Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: "360px" }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="admin@demo.com" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="admin123" />
          </Form.Item>

          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <a href="#" style={{ float: "right" }}>
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>

          <Text>
            Or <a href="#">register now!</a>
          </Text>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
