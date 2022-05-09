import './Rendering.css'
function UseAdd(props){
   
    return (
      <div className='container'>
        <div className="add-wrap">
          <div className='wrap-title'>
          <div className="title">{props.title}</div>
          <div className="id">{props.id}</div>
          </div>
          <p>The useEffect Hook allows you to perform side effects in your 
            components.</p>
          <div className="img-user">
            <img src={props.thumbnailUrl}></img></div>
        </div>
      </div>
    )
}
export default UseAdd