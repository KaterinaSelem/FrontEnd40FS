import { FC } from "react";
import Hero from './Hero'
import FarGalaxy from './FarGalaxy'
import DreamTeam from './DreamTeam'

const Main: FC<{page: string}> = () => {
  return (
    <div>
      <Hero/>
      <DreamTeam/>
      <FarGalaxy/>
    </div>
  )
}

export default Main
