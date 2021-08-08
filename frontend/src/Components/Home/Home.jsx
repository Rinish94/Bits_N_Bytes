import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
import TypeWriterEffect from "react-typewriter-effect";
import Duk from "./Duk";
import Process from "./Process";
import { Button } from "@material-ui/core";
import { SimpleSlider } from "./Carousel";
import { Footer } from "./Footer";

export default function Home_compo() {
  let history = useHistory();
  const handleClick1 = () => {
    history.push("/profile/UploadBooks");
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
          >
            Share Books
          </Button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <SimpleSlider />
      <Duk />
      <Process />
      <Footer/>
    </div>
  );
}
