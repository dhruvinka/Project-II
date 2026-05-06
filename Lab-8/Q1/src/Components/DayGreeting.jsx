function DayGreeting() {
  const hour = new Date().getHours();

  return <h2>{hour < 12 ? "Good Morning" : "Good Afternoon"}</h2>;
}

export default DayGreeting;