import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ChatWindow from "./components/ChatWindow";
// import ChatWindowMessages from "./components/ChatWindowMessages";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="chat-list">
        <Contact user='Petr' lmess='lorem Petr' />
        //contact('Petr','Lorem Petr')
        <Contact user='Bob' lmess='lorem Bob'/>
        <Contact user='Masha' lmess='lorem Masha'/>
        <Contact user='Ira' lmess='lorem Ira'/>
        </div>
        <ChatWindow />
      </div>
    </>
  );
}

export default App;
