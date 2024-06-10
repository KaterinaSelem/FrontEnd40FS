
import { friendsImages } from '../utils/constants';
import Friend from './Friend';

const DreamTeam = () => {
  return (
    <section className='right'>
      <h2>Dream Team</h2>
      {friendsImages.map((e, i) => 
        <Friend
          key={e}
          image={e}
          num={i+1}/>
          )}
    </section>
  );
};

export default DreamTeam;
