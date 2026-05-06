function TodoList() {
  const tasks = ["Study", "Code", "Sleep"];

  return (
    <ul>
      {tasks.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );
}

export default TodoList;