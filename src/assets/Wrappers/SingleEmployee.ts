import styled from 'styled-components';

const Wrapper = styled.section`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .main-icon {
      width: 450px;
      height: 100px;
      display: grid;
      place-items: center;
      font-weight: 700;
      font-size: 2.25rem;
      background-color: var(--primary-500);
      border-radius: var(--borderRadius);
      color: var(--white);
      letter-spacing: 5px;
    }
    .employee-img {
      max-width: 125px;
    }
  }
  table {
    width: 100%;
    margin-top: 2.5rem;
    border: 1px solid black;
    th,
    td {
      font-size: 1.5rem;
      text-align: left;
      border: 1px solid black;
      padding: 0.5rem;
    }
  }
  .backBtn {
    position: fixed;
    bottom: 80px;
    right: 80px;
    padding: 0.75rem 1.25rem;
    border-radius: var(--borderRadius);
    background-color: var(--primary-500);
    color: var(--white);
  }
`;

export default Wrapper;
