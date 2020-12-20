import Link from "next/link";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import SendIcon from "@material-ui/icons/Send";
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
          <Button variant="contained" color="primary" className="button">
            <FaceIcon />
            <Link href="/blog">
              <a>profile</a>
            </Link>
          </Button>

          <Button variant="contained" color="primary" className="button">
            <RssFeedIcon />
            <Link href="/about">
              <a>blog</a>
            </Link>
          </Button>

          <Button variant="contained" color="primary" className="button">
            <MusicNoteIcon />
            <Link href="/about">
              <a>social</a>
            </Link>
          </Button>

          <Button variant="contained" color="primary" className="button">
            <SendIcon />
            <Link href="/about">
              <a>message</a>
            </Link>
          </Button>
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
