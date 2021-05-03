import Header from "../components/header";
import SubHead from "../components/head";
import Head from "next/head";
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

const home = () => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Head>
            <title>home</title>
          </Head>
          <Header />
          <SubHead />
          <div className="contents">
            <div className="box">
              <h2>I am . . .</h2>
              <p>Thank you for visiting my website.</p>
              <p>
                I've just started studying English, so let me introduce myself
                in English.I'm sorry if I'm wrong!lol
              </p>
              <h4>ー History</h4>
              <p>I'm a web engineer engineer.I’m currently working in Tokyo.</p>
              <p>I used to work in the welfare industry.</p>
              <p>
                I'm a little worried about a whole new challenge.But that's my
                purpose
              </p>
              <strong>I always want to be a challenger！！！</strong>
              <h4>ー Like</h4>

              <ul>
                <li>Football🇺🇸🏈</li>
                <li>Workout💪</li>
                <li>Soccer⚽️</li>
                <li>Cooking👨‍🍳</li>
                <li>Trabel🛬</li>
              </ul>
              <h4>ー Dislike</h4>
              <strong>I hate prejudice, prejudice and discrimination.</strong>
              <style>{`
               .contents {
                font-size: 20px;
              }
      `}</style>
            </div>
          </div>
        </Paper>
      </main>
    </>
  );
};

export default home;
