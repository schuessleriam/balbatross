import React from 'react';
import { Breakpoint } from 'react-socks';
import { withRouter } from 'react-router-dom';
import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewContainer, Title, PreviewItemsContainer } from './collection-preview.styles';

const CollectionPreview = ({title, items, routeName, match, history}) => {
    
    const PreviewItems = previewIndex => {
       return items.filter((item, index) => index<previewIndex).map( (item) => 
            <CollectionItem key={item.id} item={item}/>
        )
    }

    return (
        <CollectionPreviewContainer>
            <Title onClick={ () => history.push(`${match.url}/${routeName}`)}>
                {title.toUpperCase()}
            </Title>
            <Breakpoint customQuery="(max-width: 799px)">
                <PreviewItemsContainer>
                    {PreviewItems(5)}
                </PreviewItemsContainer>
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 800px) and (max-width: 1008px)">
                <PreviewItemsContainer>
                    {PreviewItems(3)}
                </PreviewItemsContainer>
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 1009px) and (max-width: 1220px)">
                <PreviewItemsContainer>
                    {PreviewItems(4)}
                </PreviewItemsContainer>
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 1221px) and (max-width: 1600px)">
                <PreviewItemsContainer>
                    {PreviewItems(5)}
                </PreviewItemsContainer>
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 1601px) and (max-width: 1999px)">
                <PreviewItemsContainer>
                    {PreviewItems(6)}
                </PreviewItemsContainer>
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 2000px)">
                <PreviewItemsContainer>
                    {PreviewItems(7)}
                </PreviewItemsContainer>
            </Breakpoint>
        </CollectionPreviewContainer>
    );
}

export default withRouter(CollectionPreview);