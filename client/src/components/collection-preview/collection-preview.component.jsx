import React from 'react';
import { Breakpoint } from 'react-socks';
import { withRouter } from 'react-router-dom';
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items, routeName, match, history}) => {
    
    const PreviewItems = previewIndex => {
       return items.filter((item, index) => index<previewIndex).map( (item) => 
            <CollectionItem key={item.id} item={item}/>
        )
    }

    return (
        <div className='collection-preview'>
            <h1 className='title' onClick={ () => history.push(`${match.url}/${routeName}`)}>
                {title.toUpperCase()}
            </h1>
            <Breakpoint customQuery="(max-width: 799px)">
                <div className='preview-items'>
                    {PreviewItems(5)}
                </div>
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 800px) and (max-width: 1008px)">
                <div className='preview-items'>
                    {PreviewItems(3)}
                </div>
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 1009px) and (max-width: 1220px)">
                <div className='preview-items'>
                    {PreviewItems(4)}
                </div>
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 1221px) and (max-width: 1600px)">
                <div className='preview-items'>
                    {PreviewItems(5)}
                </div>
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 1601px) and (max-width: 1999px)">
                <div className='preview-items'>
                    {PreviewItems(6)}
                </div>
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 2000px)">
                <div className='preview-items'>
                    {PreviewItems(7)}
                </div>
            </Breakpoint>
        </div>
    );
}

export default withRouter(CollectionPreview);