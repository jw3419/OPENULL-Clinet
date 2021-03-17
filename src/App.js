import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMusicList } from "./api/musics";
import MusicList from "./pages/musicList";
import MusicDetail from "./pages/musicDetail";

const App = () => {
  const [musicList, setMusicList] = useState([]);
  useEffect(() => {
    const requestMusicList = async () => {
      const musicData = await getMusicList();
      setMusicList(musicData.data.feed.entry);
    };
    requestMusicList();
    return;
  }, []);
  console.log(musicList);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => (
            <MusicList musicList={musicList} setMusicList={setMusicList} />
          )}
        />
        <Route
          path="/detail/:musicId"
          render={(props) => <MusicDetail musicList={musicList} {...props} />}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
