import { FC } from 'react'
import { IImageJson } from './ImageGalerry'

const Image: FC<{image: IImageJson}> = ({ image }) => {
  return (
    <div>
        <img src={image.thumbnailUrl} alt={image.title} />
        <h2>{image.title}</h2>
    </div>
  )
}

export default Image


// import { Component } from 'react'
// import { IImageJson } from './ImageGalerry';

// export class Image extends Component <{image: IImageJson}> {
//   render() {
//     const { id, title, url } = this.props.image;
//     return (
//       <div className='border my-5'>
//         <h3>{title}</h3>
//         <div>{id}</div>
//         <img src={url} alt={title} style={{ maxWidth: '100%', scale: '75%' }} />
//       </div>
//     )
//   }
// }

// export default Image;