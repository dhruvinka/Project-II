function ExamResult() {
  const marks = 45;

  return <h2>{marks >= 40 ? "Pass" : "Fail"}</h2>;
}

export default ExamResult;