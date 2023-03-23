import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { BiNote, BiNotepad } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGlobalNotes, fetchNotes } from "../../features/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGlobalNotes());
    dispatch(fetchNotes());
  }, []);

  const {
    user: { nickname },
  } = useAuth0();
  const { notes, globalNotes, isLoading } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div className="section-center">
        <h1 className="section-title">
          Welcome, {nickname.length > 10 ? nickname.slice(0, 10) : nickname}
        </h1>
        <div className="content">
          <div className="latest">
            <div className="latest-title">
              <h5>latest note</h5>
              {/* <h4 className="date">Monday 11:30</h4> */}
            </div>
            <div className="note">
              {notes && notes.length > 0 ? (
                notes[0].text
              ) : (
                <h5 className="no-notes">
                  you have no notes currently. try adding one :)
                </h5>
              )}
            </div>
          </div>
          <div className="line"></div>
          <div className="cards">
            <article className="card local">
              <span className="icon">
                <BiNote />
              </span>
              <div className="card-info">
                <span className="counter">
                  {isLoading ? (
                    <div className="loading"></div>
                  ) : (
                    notes?.length || 0
                  )}
                </span>
                {!isLoading && "local notes"}
              </div>
            </article>
            <article className="card global">
              <span className="icon">
                <BiNotepad />
              </span>
              <div className="card-info">
                <span className="counter">
                  {isLoading ? (
                    <div className="loading"></div>
                  ) : (
                    globalNotes?.length || 0
                  )}
                </span>
                {!isLoading && "global notes"}
              </div>
            </article>
            <Link to="/local" className="btn add-btn-local">
              add to my notes
            </Link>
            <Link to="/global" className="btn add-btn-global">
              contribute to the world
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  .content {
    background: var(--primary-1);
    padding: 1rem;
    padding-top: 0.1rem;
  }

  .cards {
    display: grid;
    grid-template-areas: "a" "b" "c" "d";
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .card {
    border: 2px solid var(--primary-5);
    border-radius: var(--radius);
    display: grid;
    place-items: center;
    grid-template-columns: 2fr 3fr;
    justify-content: space-evenly;
    height: 10rem;
  }

  .card-info {
    margin: 0;
    text-transform: capitalize;
  }

  .counter {
    font-size: 4rem;
  }

  .icon svg {
    font-size: 6rem;
    padding: 0;
  }

  .local {
    grid-area: a;
  }

  .global {
    grid-area: c;
  }

  .btn {
    text-align: center;
  }

  .add-btn-local {
    grid-area: b;
  }

  .add-btn-global {
    grid-area: d;
  }

  .latest-note {
    margin-top: 0;
  }

  .note {
    margin-bottom: 1.5rem;
  }

  .no-notes {
    margin-top: 0rem;
    margin-left: 2rem;
    font-size: 1.02rem;
    color: var(--primary-4);
  }

  .latest-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 4rem;
  }

  .date {
    font-size: 1rem;
    color: var(--primary-4);
  }

  .line {
    height: 0.5rem;
    width: 100%;
    background: var(--white);
  }

  @media screen and (min-width: 720px) {
    .cards {
      display: grid;
      grid-template-areas: "a c" "b d";
    }
  }
`;
