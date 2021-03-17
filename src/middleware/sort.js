export const sortHandler = (e, musicList) => {
  let sortMusics;
  if (e.target.value === "오름출시") {
    sortMusics = musicList.sort(function (a, b) {
      return (
        new Date(b[`im:releaseDate`].label) -
        new Date(a[`im:releaseDate`].label)
      );
    });
  } else if (e.target.value === "내림출시") {
    sortMusics = musicList.sort(function (a, b) {
      return (
        new Date(a[`im:releaseDate`].label) -
        new Date(b[`im:releaseDate`].label)
      );
    });
  } else if (e.target.value === "오름이름") {
    sortMusics = musicList.sort(function (a, b) {
      return a[`im:name`].label < b[`im:name`].label
        ? -1
        : a[`im:name`].label > b[`im:name`].label
        ? 1
        : 0;
    });
  } else if (e.target.value === "내림이름") {
    sortMusics = musicList.sort(function (a, b) {
      return a[`im:name`].label > b[`im:name`].label
        ? -1
        : a[`im:name`].label > b[`im:name`].label
        ? 1
        : 0;
    });
  } else if (e.target.value === "오름랭킹") {
    sortMusics = musicList.sort(function (a, b) {
      return Number(a[`im:itemCount`].label) - Number(b[`im:itemCount`].label);
    });
  } else if (e.target.value === "내림랭킹") {
    sortMusics = musicList.sort(function (a, b) {
      return Number(b[`im:itemCount`].label) - Number(a[`im:itemCount`].label);
    });
  }

  return sortMusics;
};
