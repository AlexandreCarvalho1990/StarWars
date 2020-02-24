import React from 'react';
import UserCard from './UserCard';

const UserCardList = ({ users, page }) => {
  return (
    <div>
      {
        users.map((user, i) => {
          return (
            <UserCard
              key={i}
              id={Math.floor(parseInt(user.name, 22))}
              info={user}
              />
          );
        })
      }
    </div>
  );
}

export default UserCardList;