import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Home.module.css";
import TypeWriterEffect from "react-typewriter-effect";
import Duk from "./Duk";

export default function Home_compo() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/guest");
    console.log("Button is click and print create album");
  };

  const handleClick1 = () => {
    history.push("/guest");
    console.log("Button is click and print create album");
  };
  return (
    <div>
      <div className={styles.container}>
        <div>
          <img
            alt="booksImage"
            width="100%"
            src="https://64.media.tumblr.com/a527009f6e04b24bbac1401734a497dd/4f990cfe424c21ad-a0/s2048x3072/b97c90c121b00bf38871409dc95f0e7c9cbaef5e.jpg"
          />
        </div>
        <div>
          <h1 style={{ color: "black", fontSize: "40px", marginTop: "90px" }}>
            {/* <Typewriter> */}
            <TypeWriterEffect
              textStyle={{ fontFamily: "Red Hat Display" }}
              startDelay={100}
              cursorColor="black"
              text="Share Books... Share Knowledge"
              typeSpeed={100}
              style={{ margin: "auto" }}
              // scrollArea={myAppRef}
            />
          </h1>
          <Button
            onClick={handleClick1}
            style={{ margin: "10px" }}
            variant="contained"
            color="primary"
          >
            Share Books
          </Button>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        {/* <Button
          onClick={handleClick}
          style={{ margin: "10px" }}
          variant="contained"
          color="primary"
        >
          Find Books
        </Button> */}
      </div>
      <Duk />
    </div>
  );
}
