import { Fragment } from "react";
import "../style/musicDetail.css";

const MusicDetail = ({ match, musicList }) => {
  const musicData = musicList.filter(
    (music) => match.params.musicId === music.id.attributes[`im:id`]
  );

  return musicData.length === 0 ? (
    <Fragment />
  ) : (
    <div id="container2">
      <h1 id="header2">{musicData[0].title.label}</h1>
      <div id="content1">
        <img src={musicData[0][`im:image`][2].label} alt={""} />
      </div>
      <div id="content2">
        <div>Title: {musicData[0][`im:name`].label}</div>
        <div>Artist: {musicData[0][`im:artist`].label}</div>
        <div>Genre: {musicData[0][`category`].attributes.label}</div>
        <div>Release: {musicData[0][`im:releaseDate`].attributes.label}</div>
        <div className="important">Price: {musicData[0][`im:price`].label}</div>
      </div>
    </div>
  );
};

export default MusicDetail;
