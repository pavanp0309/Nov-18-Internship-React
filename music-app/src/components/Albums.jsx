import React from "react";

const Albums = () => {
  return (
    <div className="albums my-3 container p-4 shadow border border-danger">
      {/* row-1 */}
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <div className="card shadow">
            <img src="./src/assets/music-images/m1.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* row -2 with 3 columns */}
      <div className="row my-2">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="card shadow album">
            <img src="./src/assets/music-images/m2.jpg" alt="" />
          </div>
        </div>
        {/* col-2 */}
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="card shadow album">
            <img src="./src/assets/music-images/m2.jpg" alt="" />
          </div>
        </div>
        {/* col-3 */}
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="card shadow album">
            <img src="./src/assets/music-images/m3.jpg" alt="" />
          </div>
        </div>
        {/* col-4 */}
            
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="card shadow album">
            <img src="./src/assets/music-images/m3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;
