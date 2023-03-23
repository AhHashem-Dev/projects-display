import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeNote, removeGlobalNote } from "../features/userSlice";

const ProfileNote = ({ id, text, type }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <p className="note-id">{id + 1}</p>
      <p className="note-text">
        {text.length > 10 ? `${text.slice(0, 10)}...` : text}
      </p>
      <button
        className="remove-btn btn"
        onClick={() => {
          if (type === "local") {
            dispatch(removeNote(id));
          } else if (type === "global") {
            dispatch(removeGlobalNote(id));
          }
        }}
      >
        <FaTimes />
      </button>
    </Wrapper>
  );
};

export default ProfileNote;

const Wrapper = styled.article`
  padding: 0.5rem;
  margin: 1rem;
  display: flex;
  border: 2px solid var(--primary-5);
  border-radius: var(--radius);
  position: relative;
  padding-left: 2rem;
  align-items: center;

  .note-id {
    position: absolute;
    display: block;
    background: var(--white);
    padding: 0.25rem;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--primary-5);
    border-radius: 50%;
    left: 0;
    transform: translateX(-50%);
  }

  .remove-btn {
    position: absolute;
    right: 0;
    padding: 0;
    transform: translateX(50%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;
