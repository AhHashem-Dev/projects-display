import styled from "styled-components";
import img from "../assets/login.svg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Registration = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className="section-center">
        <div className="content">
          <h1>Hotion</h1>
          <h4>Make your dreams come true!</h4>
        </div>
        <div className="img">
          <img src={img} alt="login" />
        </div>

        <button className="btn login-btn" onClick={loginWithRedirect}>
          Login / Register
        </button>
      </div>
    </Wrapper>
  );
};

export default Registration;

const Wrapper = styled.section`
  height: 100vh;
  background: var(--primary-1);
  display: grid;
  place-items: center;

  .section-center {
    max-width: var(--max-width);
    margin: 2rem;
    display: grid;
    /* grid-template-columns: 2fr 3fr; */
    align-items: center;
    justify-content: center;

    h1,
    h4 {
      margin: 1rem;
    }
  }

  .img {
    display: none;
  }

  .login-btn {
    grid-area: 2/1/3/3;
    justify-self: center;
    margin-top: 2rem;
  }

  @media screen and (min-width: 550px) {
    .section-center {
      grid-template-columns: 2fr 3fr;
    }

    .img {
      display: block;
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
`;
