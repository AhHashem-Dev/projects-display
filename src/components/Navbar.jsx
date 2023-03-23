import styled from "styled-components";
import { Logo, NavLinks } from "../components";
import { FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleNavbar } from "../features/interfaceSlice";

const Navbar = () => {
  const { isNavbarOpen } = useSelector((store) => store.interface);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="nav-center">
        <Logo />
        <FaBars
          className="bars"
          onClick={() => {
            dispatch(toggleNavbar());
          }}
        />
      </div>
      <NavLinks className={`${isNavbarOpen ? "show" : null}`} />
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.div`
  height: auto;
  padding: 0.95rem;
  background: var(--primary-1);
  overflow: hidden;
  /* display: flex; */

  .nav-center {
    max-width: var(--max-width);
    width: var(--flex-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
  }

  .bars {
    font-size: 3rem;
    cursor: pointer;
  }

  .nav-links {
    height: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    transition: var(--transition);
  }

  .show {
    height: 280px;
    /* height: auto; */
    margin-bottom: -0.25rem;
    margin-top: 1rem;
  }

  .nav-link {
    padding: 0.25rem 0;
    font-size: 1.5rem;
    border-left: 0;
    transition: var(--transition);
  }

  .show .active-link {
    border-left: 5px var(--primary-9) solid;
    padding-left: 0.35rem;
    font-weight: 700;
  }

  .line {
    margin: 1rem;
    margin-left: auto;
    margin-right: auto;
    height: 0.25rem;
    width: 50%;
    background: var(--primary-9);
  }

  .logout-btn {
    border: none;
    background: none;
    text-transform: uppercase;
    cursor: pointer;
    text-align: start;
    color: var(--primary-4);
  }

  @media screen and (min-width: 550px) {
    display: none;
  }
`;
