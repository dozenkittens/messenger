import ChatWindowMessages from "./ChatWindowMessages";
import InputMessage from "./InputMessage";
const ChatWindow = () => {
  return (
    <div className="chat-window">
      <div className="chat-window-messages">
        <ChatWindowMessages cl_name="my-mess" />
        <ChatWindowMessages cl_name="my-mess" />
        <ChatWindowMessages cl_name="user-mess" />
        <ChatWindowMessages cl_name="user-mess" />
      </div>
      <InputMessage />
    </div>
  );
};
export default ChatWindow;

