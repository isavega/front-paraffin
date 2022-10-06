import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RoadmapCard from "../components/RoadmapCard/RoadmapCard";
import postCompletedCheckpoint from "../api/api";
import axios from "axios";

// MUI
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function Checkpoint() {
  const router = useRouter();
  const [data, setData] = useState();
  const [checked, setChecked] = useState(false);
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

  const checkHandler = (completedData) => {
    setChecked(!checked);
    if (checked) {
      console.log(checked);
      //postCompletedCheckpoint(completedData);
    }
  };

  const dataHandler = (currentResource) => {
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
    <div>
      <h1>{checkpointName}</h1>
      <p>{checkpointDescription}</p>
      <FormControlLabel
        value="start"
        control={
          <Checkbox
            onChange={() => {
              checkHandler(checked);
              console.log(checked);
            }}
          />
        }
        label="Completed"
        labelPlacement="start"
      />
      <div>
        {data?.map((resource, index) => (
          <RoadmapCard
            key={resource.id}
            title={resource.name}
            description={resource.description}
            type="Resource" //TODO ??
            action={() => dataHandler(resource)}
          />
        ))}
      </div>
    </div>
  );
}
export default Checkpoint;
