import React from 'react';
import Image from './Image'

const ImgList = ({images}) => {
    return ( 
        <div className="col-12 p-5 row">
          {images.map( img => (
            <Image 
              key={img.id}
              img={img}
             />
          ))}
        
        </div>

     );
}
 
export default ImgList;