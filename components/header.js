import Link from "next/link";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import SendIcon from "@material-ui/icons/Send";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="profile">
        <Image
          src="/istockphoto-1160498031-612x612.jpg"
          width={400}
          height={200}
        />
        <h1>Oda Kento</h1>
      </div>
      <ul>
        <Button>
          <FaceIcon />
          <Link href="/about">
            <a>profile</a>
          </Link>
        </Button>

        <Button>
          <RssFeedIcon />
          <Link href="/about">
            <a>blog</a>
          </Link>
        </Button>

        <Button>
          <MusicNoteIcon />
          <Link href="/about">
            <a>social</a>
          </Link>
        </Button>

        <Button>
          <SendIcon />
          <Link href="/about">
            <a>message</a>
          </Link>
        </Button>
      </ul>
    </header>
  );
};

export default Header;
