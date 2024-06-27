import React, { useState } from 'react';

const UserActivity = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="Please enter the value"
        onChange={handleInputChange}
        data-testid="input"
      />
      <p data-testid="username-display">{username}</p>
    </div>
  );
};

export default UserActivity;