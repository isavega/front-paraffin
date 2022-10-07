import color from "../../styles/color";

const style = {
  font: {
    title: {
      fontsize: 16,
      color: color.grey[300],
      alignSelf: "center",
      marginBottom: "3%",
    },
    body: {
      fontsize: 5,
      color: "black",
      alignSelf: "center",
      marginBottom: "3%",
    },
  },
  card: {
    padding: "3%",
    width: "100%",
    margin: "3%",
  },
  button: {
    color: color.grey[300],
    backgroundColor: color.turquoise[300],
  },
  grid: {
    container: {
      width: "50%",
      alignSelf: "center",
      marginTop: "5%",
      marginBottom: "10%",
    },
  },

  resourceCard: {
    color: "black",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "5px",
    padding: 4,
  },
};

export default style;
