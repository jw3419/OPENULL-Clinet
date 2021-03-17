import Card from "../components/cards";

const MusicList = ({ musicList }) => {
  return (
    <>
      <div>Music List</div>
      <div>
        {musicList.map((music) => (
          <Card key={music.id.attributes[`im:id`]} musicData={music} />
        ))}
      </div>
    </>
  );
};

export default MusicList;
