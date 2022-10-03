import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import { signIn } from "../utils/auth";
import { useRouter } from "next/router";

function logIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();

  const submitHandler = async () => {
    const response = await signIn(email, password);
    if (response.code === 422) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      setPassword("");
      return;
    }
    router.push("/home");
  };

  return (
    <div style={{ margin: "20%" }}>
      <div>
        {showAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">Credenciales incorrectas</Alert>
          </Stack>
        )}
      </div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", background: "white" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={email}
          onChange={(input) => setEmail(input.target.value)}
          label="Email"
          variant="filled"
          color="success"
          focused
        />
        <TextField
          value={password}
          onChange={(input) => setPassword(input.target.value)}
          label="Password"
          type="password"
          variant="filled"
          color="success"
          focused
        />
      </Box>
      <Button onClick={submitHandler} variant="contained">
        Vamos
      </Button>
    </div>
  );
}

export default logIn;
