type ChatWindowMessage = {
  key: number;
  mymess: boolean;
  text: String;
};

const ChatWindowMessage = (props: ChatWindowMessage) => {
  let cl_ = "mess " + (props.mymess === true ? "my-mess" : "user-mess");
  return (
    //'mess my-mess' 'mess user-mes'
    <div className={cl_}>{props.text}</div>
  );
};
export default ChatWindowMessage;
