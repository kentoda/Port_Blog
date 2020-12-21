import Container from "@material-ui/core/Container";

const Head = () => {
  return (
    <div class="heading">
      <h2>Profile</h2>
      <p>駆け出しエンジニア兼冒険者</p>

      <style>{`
         .heading {
          display: flex;
          align-items: center;
        }
        .heading p {
          color: #66757f;
          margin: 0 0 0 20px;
      }
      p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
       }

      .heading h2 {
        border-right: 2px solid #333;
        padding: 8px 20px 8px 0;
      }

      `}</style>
    </div>
  );
};

export default Head;
