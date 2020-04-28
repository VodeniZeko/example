import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const NavBarSearch = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        className={classes.margin}
        id="search-input"
        label="Search here"
      />
    </form>
  );
};

export default NavBarSearch;
