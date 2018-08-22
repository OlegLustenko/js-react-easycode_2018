import React from 'react';

export const ListEasyCode = props => {
  const {
    users,
  } = props;

  return (
    <ul>
      {users.map(user => {
        return <li>{user.fullName}</li>;
      })}
    </ul>
  );
};

// export class ListEasyCode extends React.Component {
//
//   renderUsers() {
//     const {
//       users,
//     } = this.props;
//
//     return users.map(user => {
//       return <li>{user.fullName}</li>;
//     })
//   }
//
//   render() {
//     const {
//       users,
//     } = this.props;
//
//     console.log(users);
//     return (
//       <ul>
//         {this.renderUsers()}
//       </ul>
//     );
//   }
// }
