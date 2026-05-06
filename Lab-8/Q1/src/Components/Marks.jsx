function Marks() {
  const data = [
    { id: 1, name: "A", marks: 50 }
  ];

  return (
    <table border="1">
      <tr>
        <th>ID</th><th>Name</th><th>Marks</th><th>Result</th>
      </tr>
      {data.map(s => (
        <tr key={s.id}>
          <td>{s.id}</td>
          <td>{s.name}</td>
          <td>{s.marks}</td>
          <td>{s.marks >= 40 ? "Pass" : "Fail"}</td>
        </tr>
      ))}
    </table>
  );
}

export default Marks;