import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
      <img
        src={user.photo}
        alt={user.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
