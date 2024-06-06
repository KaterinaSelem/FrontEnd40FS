// rafce
import { useEffect, useState } from 'react';
import Image from './Image';
import { Skeleton } from '@mui/material';

export interface IImageJson {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const ImageGalerry = () => {
  const [images, setImafes] = useState<IImageJson[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true); // объявление о начале загрузки
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/photos'
        );
        const data: IImageJson[] = await response.json();
        setImafes(data.slice(0, 10));
        setIsLoading(false); // объявление загрузки завершённой
      } catch (error) {
        console.log(error);
        setIsLoading(false); // объявление загрузки завершённой
      }
    };

    fetchImages();
  }, []);

  return isLoading ? (
    <div>
    {/* // <div className='spinner-border text-primary' role='status'>
    //   <span className='visually-hidden'>Loading...</span> */}
      {Array.from(new Array(10)).map((_, index) => (
          <div key={index} style={{ width: '35%'}}>
            <Skeleton variant="rectangular" width={150} height={150} />
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
          </div>
        ))}
    </div>
  ) : (
    <div>
      {images.map((image) => (
        <Image key={image.url} image={image} />
      ))}
    </div>
  );
};

export default ImageGalerry;
