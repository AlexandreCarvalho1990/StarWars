import React from 'react';
import UserCard from './UserCard';

const UserCardList = ({ users, pageNumber }) => {
  return (
    <div>
      {
        users.map((user, i) => {
          return (
            <UserCard
              key={i}
              id={pageNumber===1? i: '?'}
              info={user}
              />
          );
        })
      }
    </div>
  );
}

export default UserCardList;