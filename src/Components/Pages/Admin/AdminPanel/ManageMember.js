import React, { useEffect, useState } from 'react';

const ManageMember = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('https://ngo-backend-wz9s.onrender.com/api/admin/members')
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Manage Members</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.email}>
              <td>{member.f_name}</td>
              <td>{member.l_name}</td>
              <td>{member.email}</td>
              <td>{member.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMember;
