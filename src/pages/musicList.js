import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/cards";
import { sortHandler } from "../middleware/sort";
import "../style/musicList.css";

const MusicList = ({ musicList, setMusicList }) => {
  const [searchWord, setSearchWord] = useState("");
  const [sortValue, setSortValue] = useState("");
  const searchChangeHandler = (e) => {
    setSearchWord(e.target.value);
  };
  const searchClickHandler = () => {
    let findMusics = musicList.filter((music) =>
      music[`im:name`].label.includes(searchWord)
    );
    setMusicList(findMusics);
  };
  const sortChangeHandler = (e) => {
    const sortMusics = sortHandler(e, musicList);
    setMusicList(sortMusics);
    setSortValue(e.target.value);
  };
  return (
    <div id="container">
      <Link to={"/"} id="header">
        <h1>Music List - Top 100</h1>
      </Link>
      <div id="bar1">
        <select onChange={sortChangeHandler}>
          <option>선택</option>
          <option value={"오름출시"}>출시일 빠른순</option>
          <option value={"내림출시"}>출시일 늦은순</option>
          <option value={"오름이름"}>이름 순</option>
          <option value={"내림이름"}>이름 반대순</option>
          <option value={"오름랭킹"}>상위 랭킹순</option>
          <option value={"내림랭킹"}>하위 랭킹순</option>
        </select>
      </div>
      <div id="bar2">
        <input
          onChange={searchChangeHandler}
          placeholder={"검색어를 입력해주세요."}
        />
      </div>
      <div id="bar3">
        <button onClick={searchClickHandler}>검색</button>
      </div>

      <div id="main">
        {musicList.map((music) => (
          <Card key={music.id.attributes[`im:id`]} musicData={music} />
        ))}
      </div>
    </div>
  );
};

export default MusicList;
