import { useState } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";

import { Card } from "./components/Card";
import { ShowImage } from "./components/ShowImage";
import { Hero } from "./components/Hero";

function App() {
  const [showImage, setShowImage] = useState("");

  return (
    <>
      <Hero />
      <Card handleShowImage={setShowImage} />
      <ShowImage handleImage={showImage}/>
    </>
  );
}

export default App;
