type Contact = {
  user: String
  lmess: String
}

const Contact = (props: Contact) => {

  return (
    
      <div className="chat-card">
        <div className="user-avatar-chat-list"></div>
        <div className="chat-list-text">
          <h1 className="chat-list-user">{props.user}</h1>
          <p className="last-message">{props.lmess}</p>
        </div>
        
      </div>
  );
};


export default Contact;
