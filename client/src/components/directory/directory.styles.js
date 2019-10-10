import Styled from 'styled-components';

export const DirectoryMenuContainer = Styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-wrap: unset;
    flex-direction: column;
  }
`;