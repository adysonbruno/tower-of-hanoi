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



//
// let first;
// let second;
// let lastElementFirst;
// let lastElementSecond;
// let count =0;
// const h2Jogada = document.getElementById("jogada");
//
// const start = document.getElementById("start")
// start.addEventListener('click', event => {
//     if(count===0){
//         first = event.currentTarget.id;
//         lastElementFirst = start.lastElementChild;
//         count++;
//         h2Jogada.innerText = "Para onde quer mover?";
//     }else if(count===1){
//         second = event.currentTarget.id;
//         if(start.lastElementChild!==null){
//             lastElementSecond = start.lastElementChild;
//         }
//
//         if(start.lastElementChild===null || lastElementFirst.clientWidth<lastElementSecond.clientWidth){
//             let discMove = document.getElementById(lastElementFirst.id);
//             start.appendChild(discMove);
//             h2Jogada.innerText = "Escolha um bloco para mover:";
//         }else{
//             alert("Não é possível colocar um bloco maior em cima de um menor!");
//         }
//         count=0;
//     }
//
// });
//
// const offset = document.getElementById("offset")
// offset.addEventListener('click', event => {
//     if(count===0){
//         first = event.currentTarget.id;
//         lastElementFirst = offset.lastElementChild;
//         count++;
//         h2Jogada.innerText = "Para onde quer mover?";
//     }else if(count===1){
//         second = event.currentTarget.id;
//         if(offset.lastElementChild!==null){
//             lastElementSecond = offset.lastElementChild;
//         }
//         if(offset.lastElementChild===null || lastElementFirst.clientWidth<lastElementSecond.clientWidth){
//             let discMove = document.getElementById(lastElementFirst.id);
//             offset.appendChild(discMove);
//             h2Jogada.innerText = "Escolha um bloco para mover:";
//         }else{
//             alert("Não é possível colocar um bloco maior em cima de um menor!");
//         }
//         count=0;
//     }
// });
//
// const end = document.getElementById("end")
// end.addEventListener('click', event => {
//     if(count===0){
//         first = event.currentTarget.id;
//         lastElementFirst = end.lastElementChild;
//         count++;
//         h2Jogada.innerText = "Para onde quer mover?";
//     }else if(count===1){
//         second = event.currentTarget.id;
//         if(end.lastElementChild!==null){
//             lastElementSecond = end.lastElementChild;
//         }
//         if(end.lastElementChild===null || lastElementFirst.clientWidth<lastElementSecond.clientWidth){
//             let discMove = document.getElementById(lastElementFirst.id);
//             end.appendChild(discMove);
//             h2Jogada.innerText = "Escolha um bloco para mover:";
//         }else{
//             alert("Não é possível colocar um bloco maior em cima de um menor!");
//         }
//         count=0;
//     }
//
//     if(end.childElementCount===4){
//         alert("VOCÊ VENCEU!!!! PARABÉNS!!!")
//     }
// });
//
