import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        all rights reserved Hotion&copy;
        <span className="data">{new Date().getFullYear()}</span>
      </h5>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <h5>For further info</h5>
      </a>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer`
  height: 6rem;
  background: var(--primary-1);
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.65rem;

  h5 {
    margin: 0;
  }

  a {
    color: var(--primary-5);
  }
`;
