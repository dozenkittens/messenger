// import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ChatWindow from "./layout/ChatWindow";
import ChatWindowMessages from "./layout/ChatWindowMessages";
import ChatWindowMessage from "./components/ChatWindowMessage";
import InputMessage from "./components/InputMessage";
import { contactdata, messdata } from "./data/loaddata";
import { useState } from "react";

function App() {
  const [curr_idc, setCurr_idc] = useState(1);

  function ChangeCurr_idc(key) {
    setCurr_idc(key);
  }

  return (
    <>
      <div className="container">
        <Header />
        <div className="chat-list">
          {contactdata.map((contact) => (
            <Contact
              user={contact.name}
              lmess={contact.lmess}
              idc={contact.idc}
              curr_idc={curr_idc}
              ChangeCurr_idc={ChangeCurr_idc}
            />
          ))}
          {/* [
          <Contact user="Petr" lmess="lorem Petr" />,
]          */}
        </div>
        <ChatWindow>
          <ChatWindowMessages>
            {messdata.map((mess) => (
              <ChatWindowMessage
                key={mess.id}
                mymess={mess.mymess}
                text={mess.text}
              />
            ))}
          </ChatWindowMessages>
          <InputMessage />
        </ChatWindow>
      </div>
    </>
  );
}

export default App;
