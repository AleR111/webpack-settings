import React, { useState } from "react";
import { Input, Button, Modal } from "antd";

export const Greeting: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = (): void => {
    setIsModalVisible(true);
  };

  const handleCancel = (): void => {
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
