import React from 'react'
import NewsItem from './NewsItem'
import {PropTypes} from 'prop-types';

const NewsList = ({news}) => {
    return ( 
        <div className="row">
            {news.map( item => (
                <NewsItem 
                    key={item.url}
                    item={item}
                />
            ))}
        </div>
     );
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}
 
export default NewsList;