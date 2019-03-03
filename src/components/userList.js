import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
const getUsersQuery = gql`
  {
    users {
      login
      name
      id
    }
  }
`;

const UserComponent = ({ data }) => {
  if (data.loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      {data.users.map(user => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

class UserList extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <UserComponent {...this.props} />
      </div>
    );
  }
}

export default graphql(getUsersQuery)(UserList);
