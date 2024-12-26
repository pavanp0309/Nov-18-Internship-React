import React from "react";
import { albums } from "../data/songsData";

const Albums = ({setCurrentSong,setIsPlaying,currentImg,setCurrentImg}) => {
  return (
    <div className="albums  container p-4 shadow border border-danger position-fixed">
      {/* row-1 */}
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <div className="card shadow">
            <img src={currentImg} alt="" className="banner-music-img" />
          </div>
        </div>
      </div>

      {/* row -2 with 3 columns */}
      <div className="row my-2">
          {
            albums.map((album)=>(
              <div className="col-12 col-sm-12 col-md-3 col-lg-3" key={album.id}>
              <div className="card shadow album">
                <img src={album.image} 
                onClick={()=>{
                  setCurrentImg(album.songs[0].image)
                  setCurrentSong(album.songs[0].src)
                  setIsPlaying(true)
                }}
                alt="" />
              </div>
            </div>
            ))
          }

            
   
      </div>
    </div>
  );
};

export default Albums;
