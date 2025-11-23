import './App.css'
import Header from './components/Header'
// import './assets/'

function App() {


  return (
    <>
      <div className="container">
      <Header/>

      

      <div className="chat-list">
        <div className="chat-card">
          <div className="user-avatar-chat-list"></div>
          <div className="chat-list-text">
            <h1 className="chat-list-user">User 1</h1>
            <p className="last-message">last message</p>
          </div>
        </div>

        <div className="chat-card">
          <div className="user-avatar-chat-list"></div>
          <div className="chat-list-text">
            <h1 className="chat-list-user">User 2</h1>
            <p className="last-message">last message</p>
          </div>
        </div>

        <div className="chat-card">
          <div className="user-avatar-chat-list"></div>
          <div className="chat-list-text">
            <h1 className="chat-list-user">User 3</h1>
            <p className="last-message">last message</p>
          </div>
        </div>

        <div className="chat-card">
          <div className="user-avatar-chat-list"></div>
          <div className="chat-list-text">
            <h1 className="chat-list-user">User 4</h1>
            <p className="last-message">last message</p>
          </div>
        </div>
      </div>

      <div className="chat-window">
        <div className="chat-window-messages">
          <div className="my-mess mess">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="my-mess mess">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            repellendus hic totam nobis accusamus eius obcaecati earum inventore
            tempora, dicta facilis, a quis ipsa vero nisi, blanditiis dolores
            dolorum est minima labore! Corrupti rerum est, molestiae alias ipsum
            similique sit?
          </div>
          <div className="user-mess mess">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, provident itaque ipsum nulla beatae ipsam delectus
            optio? Nam totam minus veritatis deserunt molestias perspiciatis
            quasi animi neque, non omnis ut facere sequi doloribus magnam
            distinctio hic, tenetur velit aspernatur cumque tempora! Totam
            quaerat eveniet ex dolor, veniam eius tempore delectus?
          </div>
          <div className="user-mess mess">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            minus.
          </div>
        </div>

        <div className="message-div">
          <div className="type-message">
            <div className="type-message-flex">
              <img src="assets/smile.png" alt="" className="type_smile" />
              <input
                type="text"
                name=""
                id="type"
                placeholder="Type text..."
                className="type"
              />
            </div>
            <div className="type-message-flex">
              <img src="assets/photo.png" alt="" className="type_photo" />
            </div>
          </div>
          <div className="send-message">
            <img src="/assets/send.png" alt="" className="send" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
