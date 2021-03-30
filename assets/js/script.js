const createTowers = ()=>{
    let main = document.getElementById("main");

    let cardStart = document.createElement("div")
    cardStart.className = "card"

    let start = document.createElement("div");
    start.className = "towers";
    start.id = "start";
    cardStart.appendChild(start)
    let h2Start = document.createElement("h2")
    h2Start.innerText = "Start"
    cardStart.appendChild(h2Start)

    main.appendChild(cardStart);

    let cardOffset = document.createElement("div")
    cardOffset.className = "card"

    let offset = document.createElement("div");
    offset.className = "towers";
    offset.id = "offset";
    cardOffset.appendChild(offset)
    let h2Offset = document.createElement("h2")
    h2Offset.innerText = "Offset"
    cardOffset.appendChild(h2Offset)

    main.appendChild(cardOffset);

    let cardEnd = document.createElement("div")
    cardEnd.className = "card"

    let end = document.createElement("div");
    end.className = "towers";
    end.id = "end";
    cardEnd.appendChild(end)
    let h2End = document.createElement("h2")
    h2End.innerText = "End"
    cardEnd.appendChild(h2End)

    main.appendChild(cardEnd);
}

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

let selected = false;
let discSelected = "";
let movesCount = 0;
let moves = document.getElementById("movescount");
let h2Jogada = document.getElementById("jogada");

const eventClickTower = () => {

    let towers = document.querySelectorAll(".towers");


    towers.forEach((current) => {
        current.addEventListener("click", (event) => {
            let tower = event.currentTarget;
            let lastDisc = tower.lastElementChild;

            if (selected === false) {
                if(lastDisc===null){
                    alert("Por favor escolha uma torre que possui disco!");
                    h2Jogada.innerText = "Escolha um disco para mover:";
                }else{
                    discSelected = lastDisc;
                    selected = true;
                    h2Jogada.innerText = "Para onde quer mover?";
                }
            } else if (selected === true){
                if(lastDisc === null || lastDisc.clientWidth > discSelected.clientWidth){
                    tower.appendChild(discSelected);
                    selected = false;
                    h2Jogada.innerText = "Escolha um disco para mover:";
                    movesCount+=1;
                    moves.innerText = `Moves: ${movesCount}`;
                }else if (lastDisc.clientWidth === discSelected.clientWidth){
                    alert("Por favor, selecione o disco que quer mover e para onde quer movê-lo!")
                    selected = false;
                    h2Jogada.innerText = "Escolha um disco para mover:";
                }else {
                    alert("Não é possivel colocar um disco maior sobre um menor!");
                    selected = false;
                }
            }

            if (endTower.childElementCount === 4) {
                alert("Parabéns você venceu!!");
                h2Jogada.innerText="Parabéns você venceu!!";
            }
        });
    });
};

eventClickTower();

let button = document.getElementById("reset");
button.addEventListener("click",()=>{
    startTower.innerHTML = ""
    offsetTower.innerHTML = ""
    endTower.innerHTML = "";
    selected = false;
    discSelected = "";
    h2Jogada.innerText = "Escolha um disco para mover:";
    movesCount = 0;
    moves.innerText = `Moves: ${movesCount}`;
    createDisc();
})