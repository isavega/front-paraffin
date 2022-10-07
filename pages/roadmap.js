import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RoadmapCard from "../components/RoadmapCard/RoadmapCard";
import axios from "axios";
import globalStyle from "../styles/globalStyle";

function Roadmap() {
  const router = useRouter();
  const {
    id: roadmapId,
    name: roadmapName,
    description: roadmapDescription,
  } = router.query;
  const [data, setData] = useState();

  useEffect(() => {
    const getCheckpoints = async () => {
      try {
        const response = await axios.get(
          `/api/curriculums/${roadmapId}/learning_units`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCheckpoints();
  }, []);

  const dataHandler = (currentCheckpoint) => {
    router.push(
      {
        pathname: "/checkpoint",
        query: {
          ...currentCheckpoint,
          roadmapId: roadmapId,
        },
      },
      "/checkpoint"
    );
  };

  return (
    <div style={globalStyle.grid.container}>
      <h1 style={globalStyle.font.title}>{roadmapName}</h1>
      <p style={globalStyle.font.body}>{roadmapDescription}</p>
      {data?.map((checkpoint, i) => (
        <RoadmapCard
          key={checkpoint.id}
          title={checkpoint.name}
          description={checkpoint.description}
          buttonAction={() => dataHandler(checkpoint)}
        />
      ))}
    </div>
  );
}
export default Roadmap;
