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
    discXBig.className = "disc";
    discXBig.id = "xbig";
    towerStart.appendChild(discXBig);

    let discBig = document.createElement("div")
    discBig.className = "disc";
    discBig.id = "big";
    towerStart.appendChild(discBig);

    let discMedium = document.createElement("div")
    discMedium.className = "disc";
    discMedium.id = "medium";
    towerStart.appendChild(discMedium);

    let discSmall = document.createElement("div")
    discSmall.className = "disc";
    discSmall.id = "small";
    towerStart.appendChild(discSmall);
}

createDisc();