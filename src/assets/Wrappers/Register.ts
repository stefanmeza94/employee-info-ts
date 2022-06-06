import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  text-align: center;
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  .loginImg {
    display: none;
  }
  .btnWrapper {
    margin-top: 2.5rem;
  }
  .backBtn {
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--white);
    background-color: var(--primary-500);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.5rem 1.25rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    .loginImg {
      display: block;
      max-width: 80%;
    }
  }
`;
export default Wrapper;
