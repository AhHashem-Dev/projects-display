import styled from "styled-components";
import { Logo, NavLinks } from "../components";
import { FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/interfaceSlice";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.interface);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="nav">
        <div className="nav-center">
          <FaBars
            className={`${isSidebarOpen ? "show bars" : "bars"}`}
            onClick={() => {
              dispatch(toggleSidebar());
            }}
          />
          <Logo />
        </div>
      </div>
      <div className="content">
        <NavLinks
          dispatch={dispatch}
          className={`${isSidebarOpen ? "show" : null}`}
        />
      </div>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  .nav {
    height: auto;
    padding: 0.95rem;
    background: var(--primary-1);
    overflow: hidden;
  }

  .nav-center {
    max-width: var(--max-width);
    width: var(--flex-width);
    display: grid;
    grid-template-columns: 1fr 5fr;
    justify-items: center;
    margin: 0.5rem 0;
  }

  .bars {
    font-size: 3rem;
    width: 100%;
    transition: var(--transition);
    cursor: pointer;
  }

  .content {
    display: grid;
    position: absolute;
    grid-template-columns: 1fr 5fr;
  }

  .nav-links {
    height: 100%;
    width: 11rem;
    padding-right: 1.5rem;
    padding-top: 2rem;
    display: flex;
    background: var(--white);
    flex-direction: column;
    transform: translate(-100%, 0);
    transition: var(--transition);
    background: var(--primary-1);
    border: 2px solid var(--primary-9);
    z-index: 2;
    box-shadow: var(--shadow-2);
  }

  .nav-links.show {
    transform: translate(-2%, 0);
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
    margin-top: 0.5rem;
    margin-bottom: -2.25rem;
    color: var(--primary-4);
    border: none;
    background: none;
    text-transform: uppercase;
    cursor: pointer;
    text-align: start;
  }

  @media screen and (max-width: 549px) {
    display: none;
  }
`;
