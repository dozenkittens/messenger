import Settings from '../assets/settings.png'
const HeaderLogo =()=>{
    return(
        <div className="header-logo">
        <img src={Settings} className="icon" alt="" />
        <h1 className="h1-logo">Messenger</h1>
      </div>
    )
}
export default HeaderLogo