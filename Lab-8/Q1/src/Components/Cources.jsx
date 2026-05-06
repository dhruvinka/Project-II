function Courses() {
  const data = [
    { name: "MCA", modules: ["Java", "React"] }
  ];

  return (
    <div>
      {data.map((c, i) => (
        <div key={i}>
          <h2>{c.name}</h2>
          <ul>
            {c.modules.map((m, j) => <li key={j}>{m}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Courses;