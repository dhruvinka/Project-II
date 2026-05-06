function Buttons() {
  const labels = ["Save", "Delete", "Edit"];

  return (
    <div>
      {labels.map((l, i) => (
        <button key={i} onClick={() => alert(l)}>
          {l}
        </button>
      ))}


    </div>

  );
}

export default Buttons;