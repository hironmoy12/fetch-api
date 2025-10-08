import React from 'react'

const UserCard = ({item}) => {
  return (
    <>
    <table className="users-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Address</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>

     <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.username}</td>
          <td>
            <a href={`mailto:${item.email}`}>{item.email}</a>
          </td>
          <td>{item.phone}</td>
          <td>
            <a href={`http://${item.website}`} target="_blank" rel="noreferrer">
              {item.website}
            </a>
          </td>
          <td>
            {item.address.suite}, {item.address.street}, {item.address.city} - {item.address.zipcode}
          </td>
          <td>
            {item.company.name}
            <br />
            <em>"{item.company.catchPhrase}"</em>
            <br />
            {item.company.bs}
          </td>
        </tr>
         </tbody>
  </table>
    
    </>
  )
}

export default UserCard