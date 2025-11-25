type ChatWindowMessages = {
  cl_name: String
}

const ChatWindowMessages = (props: ChatWindowMessages)=>{
    let cl_ = 'mess '+ props.cl_name
    return(
        <div className={cl_}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, provident itaque ipsum nulla beatae ipsam delectus
              optio? Nam totam minus veritatis deserunt molestias perspiciatis
              quasi animi neque, non omnis ut facere sequi doloribus magnam
              distinctio hic, tenetur velit aspernatur cumque tempora! Totam
              quaerat eveniet ex dolor, veniam eius tempore delectus?
            </div>
    )
}
export default ChatWindowMessages

