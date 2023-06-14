import "./App.css";
import Layout from "./Components/Layout";
import TodoProviderContext from "./Providers/TodoProvider";

function App() {
  return (
    <div className="App">
      <TodoProviderContext>
        <Layout />
      </TodoProviderContext>
    </div>
  );
}

export default App;
