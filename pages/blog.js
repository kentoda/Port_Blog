import Head from "next/head";
import Header from "../components/header";
import SubHead from "../components/head";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 30,
  },
  media: {
    height: 140,
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

const Blog = ({ allPostsData }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>blog</title>
      </Head>
      <Header />
      <SubHead />

      <div className="contents">
        {allPostsData.map(({ id, date, title }) => (
          <Link href={`/posts/${id}`} key={id}>
            <Card className={classes.root}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="../public/istockphoto-1160498031-612x612.jpg"
                  title="Contemplative Reptile"
                /> */}
                <Image
                  src="/istockphoto-1160498031-612x612.jpg"
                  width={500}
                  height={300}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <a>{title}</a>
                  </Typography>
                  <Typography
                    // variant="body2"
                    color="textSecondary"
                    // component="p"
                  >
                    <Date dateString={date} />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
