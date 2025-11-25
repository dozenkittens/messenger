import Smile from '../assets/smile.png'
import Photo from '../assets/photo.png'
import Send from '../assets/send.png'

const InputMessage =()=>{
    return(
        <div className="message-div">
            <div className="type-message">
              <div className="type-message-flex">
                <img src={Smile} alt="" className="type_smile" />
                <input
                  type="text"
                  name=""
                  id="type"
                  placeholder="Type text..."
                  className="type"
                />
              </div>
              <div className="type-message-flex">
                <img src={Photo} alt="" className="type_photo" />
              </div>
            </div>
            <div className="send-message">
              <img src={Send} alt="" className="send" />
            </div>
          </div>
    )
}
export default InputMessage