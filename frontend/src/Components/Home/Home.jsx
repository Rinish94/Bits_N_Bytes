import React from "react";
import { useHistory } from "react-router-dom";
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
