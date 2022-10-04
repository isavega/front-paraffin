import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import { postResource } from "../api/api";

import BasicCard from "../components/BasicCard/BasicCard";
import axios from "axios";

// MUI
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

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

  const submitPost = async () => {
    //TODO manage real data
    postResource({
      curriculumId: "4",
      learningUnitId: "2",
      name: "Hola mundo",
      url: "https://css-tricks.com/",
      description: "Un gran curso de css",
    });
  };

  return (
    <div>
      <h1>Hola Usuario</h1>
      <div>
        {showAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">No tienes una sesión activa</Alert>
          </Stack>
        )}
      </div>

      <div>
        {data?.map((item, index) => (
          <BasicCard
            key={index}
            title={item.name}
            description={item.description}
          />
        ))}
      </div>
      <div style={{ margin: "10%" }}>
        <Button onClick={submitPost} variant="contained">
          Crear un recurso
        </Button>
      </div>
    </div>
  );
}

export default Home;
