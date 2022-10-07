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
};

export default globalStyle;
