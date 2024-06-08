import React from 'react';
import { friendsImages } from '../utils/constants';

const DreamTeam: React.FC = () => {
  return (
    <section className='right'>
      <h2>Dream Team</h2>
      {friendsImages.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt={image.alt}
          className={image.className ? image.className : ''}
        />
      ))}
    </section>
  );
};

export default DreamTeam;
