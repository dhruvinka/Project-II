function Employees() {
  const emp = [
    { id: 1, name: "A", dept: "IT", salary: 10000 }
  ];

  return (
    <table border="1">
      <tr>
        <th>ID</th><th>Name</th><th>Dept</th><th>Salary</th><th>Annual</th>
      </tr>
      {emp.map(e => (
        <tr key={e.id}>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.dept}</td>
          <td>{e.salary}</td>
          <td>{e.salary * 12}</td>
        </tr>
      ))}
    </table>
  );
}

export default Employees;