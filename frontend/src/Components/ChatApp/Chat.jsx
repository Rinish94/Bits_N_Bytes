import  React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Chat.css";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#eceeee;",
    border: "2px solid#4692ee",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "27rem",
    width: "27rem",
    textAlign: "center",
    borderRadius: "1rem",
  },
}));

// no dotenv
const socket = io("http://localhost:8811");
const userName = nanoid(4);

const Chat = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { message, userName });
    // setMessage("");
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  });
  return (
    <div>
      <button className="chatButton" type="button" onClick={handleOpen}>
        Chat
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Chat App</h2>
            <p id="transition-modal-description">
              <div className="chatData">
                {chat.map((payload, index) => {
                  return (
                    <h3 key={index}>
                      {payload.message}: <span>id: {payload.userName}</span>
                    </h3>
                  );
                })}
              </div>

              <form onSubmit={sendChat} className="textbox">
                <TextField
                  label="enter text here..."
                  type="text"
                  name="chat"
                  placeholder="send text"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <Button type="submit">Send</Button>
              </form>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Chat;
