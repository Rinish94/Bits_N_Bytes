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
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ color: "teal", fontSize: "45px", marginTop: "90px" }}>
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
          {/* Share Book... Share Knowledge */}
          {/* </Typewriter> */}
        </h1>
        <Button
          onClick={handleClick}
          style={{ margin: "10px" }}
          variant="contained"
          color="primary"
        >
          Find Books
        </Button>
        <Button
          onClick={handleClick1}
          style={{ margin: "10px" }}
          variant="contained"
          color="primary"
        >
          Share Books
        </Button>
      </div>
      <Duk />
    </div>
  );
}
