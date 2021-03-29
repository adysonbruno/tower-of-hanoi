const createTowers = ()=>{
    let main = document.getElementById("main");

    let start = document.createElement("div");
    start.className = "towers";
    start.id = "start";
    main.appendChild(start);

    let offset = document.createElement("div");
    offset.className = "towers";
    offset.id = "offset";
    main.appendChild(offset);

    let end = document.createElement("div");
    end.className = "towers";
    end.id = "end";
    main.appendChild(end)
}

createTowers();

const createDisc = () =>{
    let towerStart = document.getElementById("start")

    let discXBig = document.createElement("div")
    discXBig.id = "xbig";

    towerStart.appendChild(discXBig);
}

createDisc();