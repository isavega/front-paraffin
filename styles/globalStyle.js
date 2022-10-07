import color from "../styles/color";

const globalStyle = {
  font: {
    title: {
      fontSize: 35,
      color: color.black,
      alignSelf: "center",
    },
    body: {
      fontSize: 22,
      color: color.grey[300],
      alignSelf: "center",
    },
  },
  grid: {
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  button: {
    color: color.white,
    backgroundColor: color.black,
    alignSelf: "center",
    width: "50%",
    margin: "8%",
    borderRadius: "10px",
  },
};

export default globalStyle;
