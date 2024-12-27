import logo from "./assets/logo.png";
function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-purple-400 to-blue-400">
      <header className="h-18 bg-white flex items-center px-4">
        <a href="#">
          <img
            src={logo}
            alt=""
            className="w-20 hover:scale-105 transition-all"
          />
        </a>
      </header>
    </div>
  );
}

export default App;
