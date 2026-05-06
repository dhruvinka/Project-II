import React from "react";
import UserProfile from "./Components/UserProfile";
import TodoList from "./Components/TodoList";
import DayGreeting from "./Components/DayGreeting";
import LoadingScreen from "./Components/LoadingScreen";
import ThemeMessage from "./Components/TheamMessage";
import CartStatus from "./Components/CartStatus";
import ExamResult from "./Components/ExamResult";
import Movies from "./Components/Moives";
import Cart from "./Components/Cart";
import Courses from "./Components/Cources";
import Employees from "./Components/Employees";
import TodoList2 from "./Components/TodoList2";
import Marks from "./Components/Marks";
import Buttons from "./Components/Buttons";


function App() {
  return (
    <div style={{ padding: "20px" }}>
      
      <h1>React Practical</h1>

      <h2>1. User Profile</h2>
      <UserProfile />

      <h2>2. Todo List</h2>
      <TodoList />

      <h2>3. Greeting</h2>
      <DayGreeting />

      <h2>4. Loading Screen</h2>
      <LoadingScreen />

      <h2>5. Theme Message</h2>
      <ThemeMessage />

      <h2>6. Cart Status</h2>
      <CartStatus />

      <h2>7. Exam Result</h2>
      <ExamResult />

      <h2>8. Movies</h2>
      <Movies />

      <h2>9. Cart Table</h2>
      <Cart />

      <h2>10. Courses</h2>
      <Courses />

      <h2>11. Employees</h2>
      <Employees />

      <h2>12. Todo Checklist</h2>
      <TodoList2 />

      <h2>13. Marks Table</h2>
      <Marks />

      <h2>14. Dynamic Buttons</h2>
      <Buttons />

    </div>
  );
}

export default App;