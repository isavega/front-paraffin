import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RoadmapCard from "../components/RoadmapCard/RoadmapCard";
import axios from "axios";
import Button from "@mui/material/Button";
import { postCompletedCheckpoint } from "../api/api";
import globalStyle from "../styles/globalStyle";
import Confetti from "react-confetti";

function Checkpoint() {
  const router = useRouter();
  const [data, setData] = useState();
  const [confetti, setConfetti] = useState(false);
  const [completed, setCompleted] = useState("Completar");
  const {
    roadmapId,
    id: checkpointId,
    name: checkpointName,
    description: checkpointDescription,
  } = router.query;

  useEffect(() => {
    const getResources = async () => {
      try {
        const response = await axios.get(
          `/api/curriculums/${roadmapId}/learning_units/${checkpointId}/resources`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getResources();
  }, []);

  const checkHandler = () => {
    if (completed === "Completar") {
      setCompleted("Completado!");
      setConfetti(true);
      postCompletedCheckpoint({
        learning_unit_id: checkpointId,
        learningUnitId: checkpointId,
        curriculumId: roadmapId,
        user_id: 1,
      });
      setTimeout(() => setConfetti(false), 5000);
    } else {
      setCompleted("Completar");
    }
  };

  const dataHandler = (currentResource) => {
    console.log("ACAAA: ", currentResource);
    router.push(
      {
        pathname: "/resource",
        query: {
          ...currentResource,
          roadmapId: roadmapId,
          checkpointId: checkpointId,
        },
      },
      "/resource"
    );
  };

  return (
    <div style={globalStyle.grid.container}>
      {confetti && <Confetti width={2560} height={1600} />}
      <h1 style={globalStyle.font.title}>{checkpointName}</h1>
      <p style={globalStyle.font.body}>{checkpointDescription}</p>

      {data && (
        <div style={globalStyle.grid.container}>
          <RoadmapCard
            title={data[0].name}
            description={data[0].description}
            buttonText="Ver recurso"
            buttonAction={() => dataHandler(data[0])}
          />
          <Button
            variant="contained"
            style={globalStyle.button}
            onClick={checkHandler}
          >
            {completed}
          </Button>
        </div>
      )}
    </div>
  );
}
export default Checkpoint;
