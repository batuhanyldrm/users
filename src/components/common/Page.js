import React from "react";

import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";

const useStyles = makeStyles({
  pageHeader: {
  },
  pageTitle: {
    marginBottom: "12px",
    fontSize: "28px",
  },
  pageTitle2: {
    marginBottom: "12px",
    fontSize: "18px",
  },
  pageHeaderTitles: {
    display: "block",
    marginLeft:20
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
  },
  search: {
    marginBottom: "12px",
    display: "flex",
  },
  searchButton: {
    marginLeft: "10px",
  },
  grid:{
    //marginTop:"80px",
    marginLeft:"240px",
    ["@media (max-width: 940px)"]:{
      marginLeft:"0px",
    },
  }
});

export default function Page(props) {
  const classes = useStyles();

  const PageComponent = props.component;

  React.useEffect(() => {
    document.title = props.title;
  });

  return (
    <div className={classes.grid}>
      <div className={classes.pageHeader}>
        <div className={classes.pageHeaderTitles}>
          <Typography className={classes.pageTitle} style={{fontWeight:"bold"}}>{props.title}</Typography>
          <Typography id="secondTitle" className={classes.pageTitle2}>
            {props.secondTitle}
          </Typography>
        </div>

        <Divider />
      </div>

      <PageComponent />
    </div>
  );
}
