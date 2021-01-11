import Head from "next/head";
import Header from "../components/header";
import SubHead from "../components/head";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Paper from "@material-ui/core/Paper";

const madeStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 30,
    marginLeft: 30,
  },
});

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

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

const Blog = ({ allPostsData }) => {
  const classes = useStyles();
  const classess = madeStyles();
  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Head>
            <title>blog</title>
          </Head>
          <Header />
          <SubHead />
          {/* mapでallPostsDataデータを一つずつ取り出す */}
          {allPostsData.map(({ id, date, title, img }) => (
            <Link href={`/posts/${id}`} key={id}>
              <Card className={classess.root}>
                <CardActionArea>
                  <Image src={img} width={500} height={300} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <a>{title}</a>
                    </Typography>
                    <Typography color="textSecondary">
                      {/* 日付を文字列に変換表示 */}
                      <Date dateString={date} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))}
        </Paper>
      </main>
    </>
  );
};

export default Blog;
