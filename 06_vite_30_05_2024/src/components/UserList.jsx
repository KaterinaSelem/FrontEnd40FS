import { Component } from 'react';
import User from './User';

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
  }


  componentDidMount() {
    this.setState({ ...this.state, isLoading: true });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, isLoading: false });
      });
  }
  render() {
    const { users, isLoading } = this.state;
    if (isLoading) {
      return <div> Loading </div>;
    } else {
      return (
        <div>
          {users.map((user) => (
            <User key = {user.id} name = {user.name} username = {user.username}/>
            ))}
        </div>
      );
    }
  }
}

export default UserList;
