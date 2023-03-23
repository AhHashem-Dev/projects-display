import notFound from "../assets/notFound.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="img">
          <img src={notFound} alt="not found" />
        </div>
        <h1>Oops!</h1>
        <h2>page not found.</h2>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  .section-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .img {
    min-width: 45vw;
    max-height: 45vh;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h1,
  h2 {
    margin: 0;
    margin-top: 0.5rem;
    text-align: center;
  }

  .btn {
    display: inline-block;
    margin-top: 2rem;
  }
`;
