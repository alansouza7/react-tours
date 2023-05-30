const Loading = ({fetchTour}) => {

    
  return (
    <section>
      <div className="title">
        <h2>No More Tours</h2>
        <button className="btn" onClick={fetchTour} >Get Tours</button>
      </div>
    </section>
  );
}
export default Loading