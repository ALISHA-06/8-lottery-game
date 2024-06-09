import Lottery from "./Lottery";

function App() {
  return (
    <div className="App">
      <Lottery title="LOTTO" maxBall={6} maxNum={40} />
      <Lottery title="LOTTO" maxBall={4} maxNum={10} />
    </div>
  );
}

export default App;
