import { Component } from 'react'
import { IUserJson } from './UserList';
// const User = ({ name, username }) => (
//     <div className="user">
//       <h4>{name}</h4>
//       <p>{username}</p>
//     </div>
//   );
  
//   export default User;





//rce
export class User extends Component <{person: IUserJson}> {
  render() {
    const { name, username, address: { city }, company: { name: companyName} } = this.props.person; // renamed 'name' key in company object
    return (
      <div className='border my-5'>
        <h3>{username}</h3>
        <div>{name}</div>
        <div>{city}</div>
        <div>{companyName}</div>
      </div>
    )
  }
}

export default User;
