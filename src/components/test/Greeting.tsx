import React, { useState } from "react";
import { Input, Button, Modal } from "antd";
import "./test.less";

export const Greeting = () => {
  const [name, setName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Input.Group>
        <Input
          style={{ width: "300px" }}
          placeholder="Enter your name for greeting"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="primary" disabled={!name} onClick={showModal}>
          Submit
        </Button>
      </Input.Group>
      <Modal visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <p>Hello {name}!!!</p>
      </Modal>
    </>
  );
};
