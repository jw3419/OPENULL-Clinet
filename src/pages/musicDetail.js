import { Fragment } from "react";

const MusicDetail = ({ match, musicList }) => {
  const musicData = musicList.filter(
    (music) => match.params.musicId === music.id.attributes[`im:id`]
  );
  console.log(musicData);
  return musicData.length === 0 ? (
    <Fragment />
  ) : (
    <>
      <div>
        <img src={musicData[0][`im:image`][2].label} alt={""} />
      </div>
      <div>
        <div>Title: {musicData[0][`im:name`].label}</div>
        <div>Artist: {musicData[0][`im:artist`].label}</div>
        <div>Category: {musicData[0][`category`].attributes.label}</div>
        <div>Release: {musicData[0][`im:releaseDate`].attributes.label}</div>
        <div>Price: {musicData[0][`im:price`].label}</div>
      </div>
    </>
  );
};

export default MusicDetail;
