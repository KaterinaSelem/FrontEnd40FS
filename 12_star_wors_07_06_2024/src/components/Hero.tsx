import { FC } from 'react';
import DreamTeam from './DreamTeam';
import main from '../images/main.jpg';

const Hero: FC = () => {
  return (
    <div>
           <section className="left">
        <img src = {main} alt="hero" />
      </section>
      <DreamTeam/>
    </div>
  )
}

export default Hero
