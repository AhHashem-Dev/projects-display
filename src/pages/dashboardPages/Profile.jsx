import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProfileNote from "../../components/ProfileNote";
import { fetchGlobalNotes, fetchNotes } from "../../features/userSlice";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGlobalNotes());
    dispatch(fetchNotes());
  }, []);

  const { notes, myGlobalNotes, isLoading, username } = useSelector(
    (store) => store.user
  );

  return (
    <Wrapper>
      <h1 className="section-title">My Profile</h1>
      <div className="section-center">
        <div className="fields">
          <p className="field">Username:</p>
          <p className="username value">{username}</p>
          <p className="field">Total personal notes:</p>
          <p className="counter value">{notes?.length || 0}</p>
        </div>
        <div className="line"></div>
        <div className="notes">
          {isLoading ? (
            <div className="loading"></div>
          ) : notes && notes.length ? (
            notes?.map(({ text }, index) => {
              return (
                <ProfileNote key={index} id={index} text={text} type="local" />
              );
            })
          ) : (
            <h5 className="no-notes">You have made no notes</h5>
          )}
        </div>
        <div className="line"></div>
        <div className="notes">
          {isLoading ? (
            <div className="loading"></div>
          ) : myGlobalNotes.length > 0 ? (
            myGlobalNotes.map(({ text }, index) => {
              return (
                <ProfileNote key={index} id={index} text={text} type="global" />
              );
            })
          ) : (
            <h5 className="no-notes">You have made no global notes</h5>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default Profile;

const Wrapper = styled.section`
  .section-center {
    background: var(--primary-1);
    margin-top: 1rem;
  }

  .fields {
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    place-items: center;
    gap: 1rem;
  }

  .field {
    text-transform: capitalize;
    text-align: center;
  }

  .value {
    background: var(--white);
    width: 100%;
    height: 100%;
    display: flex;
    text-align: left;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--primary-9);
    font-size: 1.2rem;
    color: var(--primary-4);
  }

  .line {
    height: 0.75rem;
    width: 100%;
    background: var(--white);
  }

  .notes {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 550px) {
    .notes {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 765px) {
    .notes {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .no-notes {
    margin-top: 1rem;
    width: 50vw;
  }
`;
