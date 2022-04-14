import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    navbar: {
      backgroundColor: "#203041",
      "& a": {
        color: "#ffffff",
        marginLeft: 10,
      },
    },
    main: {
      minHeight: "80vh",
    },
    footer: {
      textAlign: "center",
    },
  },
});
export default useStyles;
