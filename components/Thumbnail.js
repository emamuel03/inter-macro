import Image from 'next/image'
import React from 'react'

function Thumbnail ({link,imageLoader,imageSrc}) {
  return (
    <>
    <div>
        <li>
            <ul>
                <a href={link}>
                    <Image
                        loader={imageLoader}
                        src={imageSrc}
                        alt="image"
                        height={200} 
                        width={200}  />
                </a>
            </ul>
        </li>
    </div>
    </>
    
  )
}

export default Thumbnail
