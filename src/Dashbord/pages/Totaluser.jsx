import React, { useEffect, useState } from "react";
import UserCard from './UserCard ';


const Totaluser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://ferelancemarketplace.vercel.app/regestation")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">All Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Totaluser;

