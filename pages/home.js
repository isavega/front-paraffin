import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import RoadmapCard from "../components/RoadmapCard/RoadmapCard";
import axios from "axios";

function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCurriculums = async () => {
      try {
        const response = await axios.get("/api/curriculums");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCurriculums();
  }, []);

  const dataHandler = (currentRoadmap) => {
    router.push(
      {
        pathname: "/roadmap",
        query: {
          ...currentRoadmap,
        },
      },
      "/roadmap"
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "15%",
        width: "100%",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          color: "black",
        }}
      >
        🔥 Paraffin 🔥
      </h1>
      <div>
        {data?.map((roadmap, index) => (
          <RoadmapCard
            key={index}
            title={roadmap.name}
            description={roadmap.description}
            action={() => dataHandler(roadmap)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
