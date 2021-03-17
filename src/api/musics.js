import axios from "axios";

export const getMusicList = async () => {
  const musicData = await axios.get(
    `https://itunes.apple.com/us/rss/topalbums/limit=100/json`
  );

  return musicData;
};
