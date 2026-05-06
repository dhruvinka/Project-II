function TodoList2() {
  const tasks = ["Task1", "Task2"];

  return (
    <div>
      {tasks.map((t, i) => (
        <div key={i}>
          <input type="checkbox" /> {t}
        </div>
      ))}
    </div>
  );
}

export default TodoList2;