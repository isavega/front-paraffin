import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "./style";

function RoadmapCard(props) {
  const { title, description, buttonText, buttonAction } = props;
  return (
    <div style={style.grid.container}>
      <Card style={style.card}>
        <Typography variant="h5" style={style.font.title}>
          {title}
        </Typography>
        <Typography variant="body2" style={style.font.body}>
          {description}
        </Typography>
        <CardActions>
          <Button
            variant="contained"
            style={style.button}
            onClick={buttonAction}
          >
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default RoadmapCard;
