import { getAllPostIds, getPostData } from "../../lib/posts";
import Link from "next/link";
import Head from "next/head";
import Date from "../../components/date";
import Image from "next/image";
import Header from "../../components/header";
import SubHead from "../../components/head";
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
    backgroundColor: "#FFFFFF",
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

// コンテンツを確認とってくる
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// どのファイルを表示するのか
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    // 指定パス以外だったら404を返す
    fallback: false,
  };
}

const Post = ({ postData }) => {
  const classes = useStyles();
  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Header />
        <SubHead />
        <div className="contents">
          <div className="box">
            {/* 表示するデータ */}
            <Image src={postData.img2} width={700} height={400} />
            {/* 日付を文字列に変換表示 */}
            <Date dateString={postData.date} />
            <h2 className="blog-title">{postData.title}</h2>
            <br />
            <div
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              className="hoge"
            />
            <br />
            <Link href="/blog">
              <a>戻る</a>
            </Link>
            <style>{`
              .blog-title {
                text-align: center;
              }
              .hoge {
                line-height: 45px;
                font-size: 20px;
                text-align: left;
              }
      `}</style>
          </div>
        </div>
      </Paper>
    </main>
  );
};

export default Post;
