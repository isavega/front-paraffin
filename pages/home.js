import React, { useState, useEffect } from "react";

import { signOut } from "../utils/auth";
import { useRouter } from "next/router";
import { postResource } from "../api/api";
import BasicCard from "../components/BasicCard";
import styles from "../styles/Home.module.css";

// MUI
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function Home() {
  const router = useRouter();
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

  const submitHandler = async () => {
    const response = await signOut(1); //TODO manage id
    if (response.code === 200) {
      router.push("/login");
      return;
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

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
        {data?.map((item, i) => (
          <p className={styles.description} key={item.id}>
            <BasicCard title={item.name} description={item.description} />
          </p>
        ))}
      </div>
      <Button onClick={submitHandler} variant="contained">
        Loh vimoh
      </Button>
      <Button onClick={submitPost} variant="contained">
        Crear un recurso
      </Button>
    </div>
  );
}
