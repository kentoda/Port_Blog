import Header from "../components/header";
import SubHead from "../components/head";
import Head from "next/head";

const home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <SubHead />
      <div className="contents">
        <div className="box">
          <h2>I am . . .</h2>
          <p>Thank you for visiting my website.</p>
          <p>
            I've just started studying English, so let me introduce myself in
            English.I'm sorry if I'm wrong!lol
          </p>
          <h4>ー History</h4>
          <p>I'm a fledgling engineer.I’m currently working in Tokyo.</p>
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
        </div>
      </div>
    </>
  );
};

export default home;
