import Head from "next/head";
import Header from "../components/header";
import SubHead from "../components/head";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),

    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 750,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: "#F5F5F5",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const Social = () => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Head>
            <title>social</title>
          </Head>
          <Header />
          <SubHead />
          <div className="contents">
            <div className="box">
              <h3>
                <TwitterIcon />
                Twitter
              </h3>
              {/* URl */}
              <h3>
                <InstagramIcon />
                Instagram
              </h3>
              <a
                href="https://www.instagram.com/odadadadaken/?hl=ja"
                className="url"
              >
                https://www.instagram.com/odadadadaken/?hl=ja
              </a>
              <h3>
                <FacebookIcon />
                Facebook
              </h3>
              {/* URl */}
            </div>
          </div>
        </Paper>
      </main>
    </>
  );
};

export default Social;
