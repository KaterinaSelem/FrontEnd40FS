import { FC } from 'react'

const Friend: FC<{ image: string, num: number}> = ({image, num }) => {
  return (

      <img className={num == 7 ? 'bottomLeft' : num ==9 ? "bottomRight" : '' } src = {image} alt = {`friend${num}`}/>
      

  )
}

export default Friend;
