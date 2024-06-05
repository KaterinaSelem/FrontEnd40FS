import { Component } from 'react';
import User from './User';

export interface IUserJson {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  }
  company: {
    name: string;
  }
}

interface IUserListState {
  users: IUserJson[],
  isLoading: boolean,
}

export class UserList extends Component<Record<string, never>, IUserListState> {  
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, isLoading: false });
      });
  }

  render() {
    const { users, isLoading } = this.state;
    //   return <div> Loading... </div>;
    // } else {
    //   return (
    //     <div>
    //       {users.map((user) => (
    //         <User key = {user.id} person = {user} />
    //         ))}
    //     </div>
    //   );
    // }

    return isLoading ? (
        <div className="spinner-border text-primary align-content-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        // <div>Loading...</div>
      ) : (
        <div className='text-center'>
          {users.map((user) => (
            <User key={user.id} person={user} />
            // <p key={user.id}>{user.name}</p>
          ))}
        </div>
      );
    }
  }
  


export default UserList;
