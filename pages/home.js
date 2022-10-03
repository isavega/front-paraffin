import React, { useState } from "react";
import RoadmapCard from "../components/RoadmapCard";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { signOut } from "../utils/auth";
import { useRouter } from "next/router";
import { postResource } from "../api/api";

function Home() {
  const image = "https://miro.medium.com/max/960/1*PFEk9y9K_k5Ql58pC567-A.png";
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const submitHandler = async () => {
    const response = await signOut(1);
    if (response.code === 200) {
      router.push("/login");
      return;
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const submitPost = async () => {
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
      <h1>Hola Cecy</h1>
      <div>
        {showAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">No tienes una sesión activa</Alert>
          </Stack>
        )}
      </div>

      <RoadmapCard
        title="Rails"
        description="best way of learning Rails and React"
        urlImage={image}
      />
      <Button onClick={submitHandler} variant="contained">
        Loh vimoh
      </Button>
      <Button onClick={submitPost} variant="contained">
        Crear un recurso
      </Button>
    </div>
  );
}

export default Home;
