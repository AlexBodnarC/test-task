import './App.css';
import ChatPanel from './components/chat-panel';
import { TopBar } from './components/top-bar';

function App() {
  return (
    <div className="flex gap-x-4">
      <div className="w-[460px]">
        <ChatPanel />
      </div>
      <div className="min-w-[980px]">
        <div className="pt-2 pb-1.5">
          <TopBar />
        </div>
        <div className="bg-black h-[calc(100vh-50px)]"></div>
      </div>
    </div>
  );
}

export default App;
