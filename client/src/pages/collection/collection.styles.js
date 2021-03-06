import Styled from 'styled-components';

export const CollectionPageStyledContainer = Styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionPageTitle = Styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;
  
export const CollectionPageItems = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;

  @media screen and (max-width: 499px){
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 426px) and (max-width: 799px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1009px) and (max-width: 1600px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1601px){
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
  