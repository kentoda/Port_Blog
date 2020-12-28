import Head from "next/head";
import Header from "../components/header";
import SubHead from "../components/head";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const Social = () => {
  return (
    <div>
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
          <a href="https://www.instagram.com/odadadadaken/?hl=ja">
            https://www.instagram.com/odadadadaken/?hl=ja
          </a>
          <h3>
            <FacebookIcon />
            Facebook
          </h3>
          {/* URl */}
        </div>
      </div>
    </div>
  );
};

export default Social;
