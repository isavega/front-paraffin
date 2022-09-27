import React from "react";
import RoadmapCard from "../components/RoadmapCard";

function Home() {
  const image = "https://miro.medium.com/max/960/1*PFEk9y9K_k5Ql58pC567-A.png";
  return (
    <div>
      <h1>Hola Cecy</h1>
      <RoadmapCard
        title="Rails"
        description="best way of learning Rails and React"
        urlImage={image}
      />
    </div>
  );
}

export default Home;
