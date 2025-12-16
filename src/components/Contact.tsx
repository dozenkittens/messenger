type Contact = {
  user: String;
  lmess: String;
  idc: number;
  curr_idc: number;
  ChangeCurr_idc: (key: number) => void;
};

const Contact = (props: Contact) => {
  let cl_ = "chat-card " + (props.idc === props.curr_idc ? "cl_active" : "");
  console.log();
  return (
    <div className={cl_} onClick={() => props.ChangeCurr_idc(props.idc)}>
      <div className="user-avatar-chat-list"></div>
      <div className="chat-list-text">
        <h1 className="chat-list-user">{props.user}</h1>
        <p className="last-message">{props.lmess}</p>
      </div>
    </div>
  );
};

export default Contact;
