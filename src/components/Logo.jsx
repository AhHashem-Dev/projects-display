import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <Wrapper>
        <img src={logo} alt="logo" className="logo-img" />
        <h5 className="logo-text">otion</h5>
      </Wrapper>
    </Link>
  );
};
export default Logo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .logo-img {
    height: 3rem;
  }

  .logo-text {
    margin: 0;
    margin-left: 0.15rem;
    text-transform: none;
    font-size: 2.3rem;
  }
`;
