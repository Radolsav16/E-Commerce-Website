export default function CartItem({
    cartInfo
}) {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img
            src={cartInfo.imageURL}
            className="card-img-top"
            alt={cartInfo.name}
          />
          <div className="card-body">
            <h5 className="card-title">{cartInfo.name}</h5>
            <p className="card-text">Price: ${cartInfo.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
