import { useState } from "react";

const Tour = (props) => {

   const { id, image, info, name, price, getTour } = props;


  const [readMore, setReadMore] = useState(false)

  const readMoreFunc = ()=>{
    setReadMore(oldState => !oldState)
  }



  return (
    <section className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore? info: `${info.substring(0,200)}...`}</p>
        <span className="info-btn" onClick={readMoreFunc}>Read More</span>
      </div>

      <button type="button" className="btn delete-btn" onClick={() => getTour(id)}>
        Delete
      </button>
    </section>
  );
}
export default Tour 