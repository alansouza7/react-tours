import Tour from "./Tour"

const Tours = ({data, getTour}) => {

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
        <div className="tours">
          {data.map((e) => {
            return <Tour key={e.id} {...e} getTour={getTour} />;
          })}
        </div>
      </div>
    </section>
  );
}
export default Tours