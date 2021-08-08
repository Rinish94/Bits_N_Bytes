import React from "react";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Home.module.css";
import TypeWriterEffect from "react-typewriter-effect";
import Duk from "./Duk";
import Process from "./Process";
import { SimpleSlider } from "./Carousel";

export default function Home_compo() {
  let history = useHistory();
  return (
    <div>
      <br /><br /><br /><br />
      <SimpleSlider/>
      <Duk />
      <Process />
    </div>
  );
}
