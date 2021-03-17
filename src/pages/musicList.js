import { useState } from "react";
import Card from "../components/cards";

const MusicList = ({ musicList, setMusicList }) => {
  const [searchWord, setSerachWord] = useState("");
  const onChangeHandler = (e) => {
    setSerachWord(e.target.value);
  };
  const onClickHandler = () => {
    let findMusics = musicList.filter((music) =>
      music[`im:name`].label.includes(searchWord)
    );
    setMusicList(findMusics);
  };
  return (
    <>
      <div>Music List - Top 100</div>
      <div>
        <span>
          <input onChange={onChangeHandler} />
        </span>
        <span>
          <button onClick={onClickHandler}>검색</button>
        </span>
      </div>
      <div>
        {musicList.map((music) => (
          <Card key={music.id.attributes[`im:id`]} musicData={music} />
        ))}
      </div>
    </>
  );
};

export default MusicList;
