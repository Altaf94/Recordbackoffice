import React, { useState } from "react";
import { Row, Col, Typography, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

const LoginPage = () => {
  const history = useHistory();
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const onFinish = (values) => {
    console.log("Received values:", values);
    if (isForgotPassword) {
      console.log("Password reset request submitted");
    } else {
      history.push("/Dashboard");
    }
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
          Service Record Update 2025
        </Title>
      </Col>

      {/* RIGHT SIDE */}
      <Col
        span={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#FFFFFF",
          minHeight: "100vh",
        }}
      >
        <Title level={2} style={{ textAlign: "center" }}>
          {isForgotPassword ? "Reset Password" : "Login"}
        </Title>
        <Form
          name={isForgotPassword ? "forgot-password" : "login"}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: "360px" }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Enter your email" />
          </Form.Item>

          {!isForgotPassword && (
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Enter password"
              />
            </Form.Item>
          )}

          {!isForgotPassword && (
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a
                onClick={() => setIsForgotPassword(true)}
                style={{ float: "right", cursor: "pointer" }}
              >
                Forgot password?
              </a>
            </Form.Item>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {isForgotPassword ? "Submit" : "Log in"}
            </Button>
          </Form.Item>

          {isForgotPassword && (
            <Button
              type="link"
              onClick={() => setIsForgotPassword(false)}
              block
            >
              Back to Login
            </Button>
          )}
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
