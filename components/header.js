import Link from "next/link";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import NearMeIcon from "@material-ui/icons/NearMe";
import Image from "next/image";
import Container from "@material-ui/core/Container";

const Header = () => {
  return (
    <header>
      <Container maxWidth="sm">
        <div className="profile">
          <Image
            className="img"
            src="/istockphoto-1160498031-612x612.jpg"
            width={100}
            height={100}
          />
          <h1>Oda Kento</h1>
        </div>
        <ul>
          <Link href="/">
            <Button variant="contained" color="primary" className="button">
              <FaceIcon />
              <a>profile</a>
            </Button>
          </Link>

          <Link href="/blog">
            <Button variant="contained" color="primary" className="button">
              <RssFeedIcon />
              <a>blog</a>
            </Button>
          </Link>

          <Link href="/social">
            <Button variant="contained" color="primary" className="button">
              <StarIcon />
              <a>social</a>
            </Button>
          </Link>

          <Link href="/message">
            <Button variant="contained" color="primary" className="button">
              <NearMeIcon />

              <a>message</a>
            </Button>
          </Link>
        </ul>
      </Container>
      <style>{`
        header .profile {
          text-align: center;
        }
        .img {
          border-radius: 50%; 
          object-fit: cover;
          border: 5px solid #fff
        }
        .button {
          margin-left: 5px;
        }
      `}</style>
    </header>
  );
};

export default Header;
