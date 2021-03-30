const Main = document.getElementById("main");

const createTowers = () => {
  let start = document.createElement("div");
  start.className = "towers";
  start.id = "start";
  Main.appendChild(start);

  let offset = document.createElement("div");
  offset.className = "towers";
  offset.id = "offset";
  Main.appendChild(offset);

  let end = document.createElement("div");
  end.className = "towers";
  end.id = "end";
  Main.appendChild(end);
};

createTowers();
let startTower = document.getElementById("start");
let offsetTower = document.getElementById("offset");
let endTower = document.getElementById("end");

const createDisc = () => {
  let discXBig = document.createElement("div");
  discXBig.className = "disc";

  discXBig.id = "xbig";
  startTower.appendChild(discXBig);

  let discBig = document.createElement("div");
  discBig.className = "disc";

  discBig.id = "big";
  startTower.appendChild(discBig);

  let discMedium = document.createElement("div");
  discMedium.className = "disc";

  discMedium.id = "medium";
  startTower.appendChild(discMedium);

  let discSmall = document.createElement("div");
  discSmall.className = "disc";

  discSmall.id = "small";
  startTower.appendChild(discSmall);
};

createDisc();

const eventClickTower = () => {
  let selected = false;
  let discSelected = "";

  startTower.addEventListener("click", (event) => {
    let tower = event.currentTarget;
    let lastDisc = tower.lastElementChild;
    if (selected === false) {
      discSelected = lastDisc;
      selected = true;
    } else if (selected === true && lastDisc === null) {
      tower.appendChild(discSelected);
      selected = false;
    } else if (
      selected === true &&
      lastDisc.clientWidth > discSelected.clientWidth
    ) {
      tower.appendChild(discSelected);
      selected = false;
    }

    console.log(selected);
  });

  offsetTower.addEventListener("click", (event) => {
    let tower = event.currentTarget;
    let lastDisc = tower.lastElementChild;
    if (selected === false) {
      discSelected = lastDisc;
      selected = true;
    } else if (selected === true && lastDisc === null) {
      tower.appendChild(discSelected);
      selected = false;
    } else if (
      selected === true &&
      lastDisc.clientWidth > discSelected.clientWidth
    ) {
      tower.appendChild(discSelected);
      selected = false;
    }
    console.log(selected);
  });

  endTower.addEventListener("click", (event) => {
    let tower = event.currentTarget;
    let lastDisc = tower.lastElementChild;
    if (selected === false) {
      discSelected = lastDisc;
      selected = true;
    } else if (selected === true && lastDisc === null) {
      tower.appendChild(discSelected);
      selected = false;
    } else if (
      selected === true &&
      lastDisc.clientWidth > discSelected.clientWidth
    ) {
      tower.appendChild(discSelected);
      selected = false;
    }
  });
};
eventClickTower();
