import * as React from "react";
import { Box, Modal as ModalUI } from "@mui/material";
import { ApplyButton, CancelButton } from "../";
import styles from "./modal.module.less";

export const Modal = ({ openModal, setOpenModal, handleAplly, children }) => {
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <ModalUI
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <div className={styles.content}>{children}</div>
          <div className={styles["button-group"]}>
            <div className={styles["apply-btn"]}>
              <ApplyButton
                onClick={() => {
                  handleClose();
                  handleAplly();
                }}
                text={"Применить"}
              />
            </div>
            <CancelButton onClick={handleClose} text={"Отменить"} />
          </div>
        </Box>
      </ModalUI>
    </div>
  );
};
