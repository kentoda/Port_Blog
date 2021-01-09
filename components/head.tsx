const SubHead = () => {
  return (
    <div className="heading">
      <h2>Profile</h2>

      <p>エンジニアっぽくないエンジニアになりたい</p>

      <style>{`
        .heading {
          display: flex;
          align-items: center;
          margin-left: 30px;
        }
        
        .heading p {
          color: #66757f;
          margin: 0 0 0 20px;
          
        }
      

        .heading h2 {
          border-right: 2px solid #333;
          padding: 8px 20px 8px 0;
        }

      `}</style>
    </div>
  );
};

export default SubHead;
