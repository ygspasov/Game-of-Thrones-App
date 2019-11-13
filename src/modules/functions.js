let ByNameAscending = function(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

let ByNameDescending = function(a, b) {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
};

let BySeason = function(a, b) {
  if (a.season < b.season) {
    return -1;
  }
  if (a.season > b.season) {
    return 1;
  }
  return 0;
};

let ByEpisode = function(a, b) {
  if (a.number < b.number) {
    return -1;
  }
  if (a.number > b.number) {
    return 1;
  }
  return 0;
};

export { ByNameAscending, ByNameDescending, BySeason, ByEpisode };
