import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Modal from "@mui/material/Modal";
import { red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";

const TableBody = ({ userData, userInfoDelete, isChecked, selectUser }) => {
  const [userInfo, setUserInfo] = useState({
    userName: userData.name,
    email: userData.email,
    role: userData.role,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEditChange = (e) => {
    console.log(e.target);
    setUserInfo((userData) => ({
      ...userData,
      [e.target.name]: e.target.value,
    }));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "text.primary",
    border: "1px solid green",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  };

  let rowClass = isChecked ? "checked" : "";
  return (
    <>
      <tr key={userData.id} className={rowClass}>
        <td>
          <Checkbox
            color="default"
            checked={isChecked}
            onChange={selectUser}
            inputProps={{ "aria-label": "controlled" }}
          />
        </td>
        <td>{userInfo.userName}</td>
        <td>{userInfo.email}</td>
        <td>{userInfo.role}</td>
        <td style={{ display: "flex", justifyContent: "space-evenly" }}>
          <EditIcon fontSize={"small"} onClick={handleOpen} />
          <DeleteOutlinedIcon
            sx={{ fontSize: 20, color: red[600] }}
            onClick={userInfoDelete}
          />
        </td>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <input
              className="editUser"
              name="userName"
              value={userInfo.userName}
              onChange={handleEditChange}
            />
            <input
              className="editUser"
              name="email"
              value={userInfo.email}
              onChange={handleEditChange}
            />
            <input
              className="editUser"
              name="role"
              value={userInfo.email}
              onChange={handleEditChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="success"
              size="large"
              onClick={handleClose}
            >
              update
            </Button>
          </Box>
        </Modal>
      </tr>
    </>
  );
};

export default TableBody;
