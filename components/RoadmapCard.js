import React from "react";

// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const RoadmapCard = (props) => {
  const { roadmapId, title, urlImage, description } = props;

  return (
    <Card sx={{ maxWidth: 345 }} style={{ background: "red", margin: "10%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={urlImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read more 👀
        </Button>
      </CardActions>
    </Card>
  );
};

export default RoadmapCard;
