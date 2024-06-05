import { Component } from 'react';
import Image from './Image';

export interface IImageJson {
  id: number;
  title: string;
  url: string;
}

interface IImageGalerryState {
  images: IImageJson[],
  isLoading: boolean,
}

export class ImageGalerry extends Component<Record<string, never>, IImageGalerryState> {  
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      images: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ images: data.slice(0, 10), isLoading: false });
      });
  }

  render() {
    const { images, isLoading } = this.state;
    
    return isLoading ? (
        <div className="spinner-border text-primary align-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
       
      ) : (
        <div className='text-center'>
          {images.map((image) => (
            <Image key={image.id} image={image} />
           
          ))}
        </div>
      );
    }
  }
  


export default ImageGalerry;
