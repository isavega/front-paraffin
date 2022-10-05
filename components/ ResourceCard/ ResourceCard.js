import React from "react";
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

const ResourceCard = (props) => {
  const { title, rating, dataList } = props;

  return (
    <div
      style={{
        margin: "10%",
        width: "500px",
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
                  key={data.id}
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
              style={{
                color: "#424242",
              }}
            >
              Crear comentario
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceCard;
