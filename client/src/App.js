import "./App.css";
import Layout from "./Components/Layout";
import { TodoProvider } from "./Context/TodoProvider";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Layout />
      </TodoProvider>
    </div>
  );
}

export default App;
