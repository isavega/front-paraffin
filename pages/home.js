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
        alignItems: "center",
        display: "inline-grid",
        justifyContent: "center",
        margin: "10%",
        width: "100%",
      }}
    >
      <div
        style={{
          margin: "100px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#005ad6",
          }}
        >
          🔥 Paraffin 🔥
        </h1>
      </div>
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
