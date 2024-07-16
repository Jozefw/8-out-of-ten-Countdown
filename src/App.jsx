import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title="Easy" targetTime={1}></Timer>
        <Timer title="Difficult" targetTime={5}></Timer>
        <Timer title="Challenging" targetTime={10}></Timer>
        <Timer title="Pro" targetTime={20}></Timer>
      </div>
    </>
  );
}

export default App;
