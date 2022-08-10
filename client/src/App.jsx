import io from 'socket.io-client';
import './App.scss';
import Horses from './components/Horses';

const socket = io.connect('http://localhost:3002');

function App() {
  const resetHorsesHandler = () => {
    window.location.reload();
  };
  return (
    <div className='App'>
      <Horses socket={socket} />
      <button className='App__button' onClick={resetHorsesHandler}>
        Restart
      </button>
    </div>
  );
}

export default App;
