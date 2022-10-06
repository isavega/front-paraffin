import React, { useState, useEffect } from "react";
import { chulengoAvatar } from "../../utils/images";

// MUI
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";

const ResourceCard = (props) => {
  const { title, rating, dataList, newComment } = props;
  const [openModal, setOpenModal] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const commentHandler = () => {
    newComment(commentValue);
    setCommentValue("");
    setOpenModal(false);
  };

  return (
    <div
      style={{
        margin: "10%",
        width: "500px",
        marginBottom: "30px",
      }}
    >
      <Card
        style={{
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" style={{ textAlign: "center" }}>
            {title}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10%",
            }}
          >
            <Rating
              value={rating}
              name="half-rating"
              precision={0.5}
              size="large"
              defaultValue={2.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </div>
          <Accordion
            style={{ backgroundColor: "#424242", borderRadius: "8px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "white" }}>
                Ver comentarios 👀
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {dataList?.map((data, index) => (
                <Stack
                  direction="row"
                  key={index}
                  spacing={1}
                  style={{ marginBottom: "5%" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={chulengoAvatar}
                    style={{ marginRight: "2%" }}
                  />
                  <Typography style={{ color: "#00DCD2", marginTop: "2%" }}>
                    {data.user_name}:
                  </Typography>
                  <Typography style={{ color: "white", marginTop: "2%" }}>
                    {data.content}
                  </Typography>
                </Stack>
              ))}
            </AccordionDetails>
          </Accordion>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "30px",
            }}
          >
            <Button
              onClick={() => setOpenModal(true)}
              style={{
                color: "#424242",
              }}
            >
              Crear comentario
            </Button>
            {openModal && (
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={() => setOpenModal(false)}
                closeAfterTransition
              >
                <Fade in={openModal}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Nuevo comentario
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      Deja tu comentario, ayudarás a muchos como tu 😇
                    </Typography>
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      value={commentValue}
                      onChange={(input) => setCommentValue(input.target.value)}
                    />
                    <Button onClick={commentHandler}>Crear comentario</Button>
                  </Box>
                </Fade>
              </Modal>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const style = {
  color: "black",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "5px",
  padding: 4,
};

export default ResourceCard;
