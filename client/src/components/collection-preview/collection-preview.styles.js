import Styled from 'styled-components';

export const CollectionPreviewContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = Styled.h1` 
  font-size: auto;
  margin-bottom: 25px;
  margin-right: auto;
  cursor: pointer;
`;
  
export const PreviewItemsContainer = Styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 799px){
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;