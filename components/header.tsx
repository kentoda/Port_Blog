import Link from "next/link";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import NearMeIcon from "@material-ui/icons/NearMe";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="profile">
        <Image
          className="img"
          src="/D1C21055-757E-4EED-9820-8E81147D6DA4_1_201_a.jpeg"
          width={100}
          height={100}
        />
        <h1 className="name">Oda Kento</h1>
      </div>
      <ul className="nav">
        <Link href="/">
          <Button color="primary" className="button">
            <FaceIcon />
            <a>profile</a>
          </Button>
        </Link>

        <Link href="/blog">
          <Button color="primary" className="button">
            <RssFeedIcon />
            <a>blog</a>
          </Button>
        </Link>

        <Link href="/social">
          <Button color="primary" className="button">
            <StarIcon />
            <a>social</a>
          </Button>
        </Link>

        <Link href="/message">
          <Button color="primary" className="button">
            <NearMeIcon />

            <a>message</a>
          </Button>
        </Link>
      </ul>

      <style>{`
       
        header .profile {
          text-align: center;
          align-items: center;
        
        }
    
        .nav {
          text-align: center;
          align-items: center;
          
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
