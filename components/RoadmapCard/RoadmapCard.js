import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function BasicCard(props) {
	const { title, description, type, action } = props;
	return (
		<Card sx={{ minWidth: 275 }} style={{ borderBlockColor: "gray" }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{type}
				</Typography>
				<Typography variant="h5" component="div">
					{title}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
				<Typography variant="body2">
					{description}
					<br />
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" style={{ color: "gray" }} onClick={action}>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}

export default BasicCard;