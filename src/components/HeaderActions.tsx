import OtherSett from '../assets/othersett.png'
import Phone from '../assets/phone.png'
import VideoCall from '../assets/videocall.png'

const HeaderActions =()=>{
    return(
        <div className="header-actions">
        <div className="user-info">
          <div className="user-avatar"></div>
          <h1 className="h1-user">Petr</h1>
        </div>
        <div className="header-icons">
          <img src={Phone} className="icon" alt="" />
          <img src={VideoCall} className="icon" alt="" />
          <img src={OtherSett} className="icon" alt="" />
        </div>
      </div>
    )
}
export default HeaderActions