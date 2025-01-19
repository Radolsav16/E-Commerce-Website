export default function StartBannner(){
    return(
        <>
            <div
  id="template-mo-zay-hero-carousel"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <ol className="carousel-indicators">
    <li
      data-bs-target="#template-mo-zay-hero-carousel"
      data-bs-slide-to={0}
      className="active"
    />
    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={1} />
    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="container">
        <div className="row p-5">
          <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
            <img
              className="img-fluid"
              src="./assets/img/banner_img_01.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 mb-0 d-flex align-items-center">
            <div className="text-align-left align-self-center">
              <h1 className="h1 text-success">
                <b>TrendyTime</b>
              </h1>
              <h3 className="h2">Perfect Clothing for you!</h3>
              <p>
              Discover the perfect blend of comfort and style with our latest clothing collection, designed to make every moment effortlessly chic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container">
        <div className="row p-5">
          <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
            <img
              className="img-fluid"
              src="./assets/img/banner_img_02.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 mb-0 d-flex align-items-center">
            <div className="text-align-left">
              <h1 className="h1 text-success">TrendyTime</h1>
              <h3 className="h2">Match Accessories you want!</h3>
              <p>
              From elegant jewelry to must-have bags, our accessories are crafted to complement your unique personality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container">
        <div className="row p-5">
          <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
            <img
              className="img-fluid"
              src="./assets/img/banner_img_03.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 mb-0 d-flex align-items-center">
            <div className="text-align-left">
              <h1 className="h1 text-success">TrendyTime</h1>
              <h3 className="h2">Find useful product for home!</h3>
              <p>
              From cozy decor to practical must-haves, our home products are designed to bring comfort and elegance to every corner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a
    className="carousel-control-prev text-decoration-none w-auto ps-3"
    href="#template-mo-zay-hero-carousel"
    role="button"
    data-bs-slide="prev"
  >
    <i className="fas fa-chevron-left" />
  </a>
  <a
    className="carousel-control-next text-decoration-none w-auto pe-3"
    href="#template-mo-zay-hero-carousel"
    role="button"
    data-bs-slide="next"
  >
    <i className="fas fa-chevron-right" />
  </a>
</div>
        </>
    )
}