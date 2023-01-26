/*
const PlayerName = document.createElement("div");
PlayerName.classList.add("name");
PlayerName.textContent = "My name is SOU";
PlayerName.setAttribute(
    'style', 'color : red; background : black; max-width:150px;');
PlayerName.style.display ='flex';
PlayerName.style.justifyContent = 'center'
document.querySelector("#MyName").appendChild(PlayerName);
*/
/*
let pName = document.createElement("div");
let myText = document.createTextNode("product one");
let myComment = document.createComment("This the last released product , check it out !")
pName.className = "Product";
pName.setAttribute("src", "image");
pName.appendChild(myComment);
pName.appendChild(myText);
document.body.appendChild(pName);
console.log(pName);
*/

/*
let myMain = document.createElement('div');
let myHeader = document.createElement('h1');
let myPara = document.createElement('p');

let headerText = document.createTextNode('All the products :');
let paraText = document.createTextNode("Products description ...");
//append headerText to the my header
myHeader.appendChild(headerText);
//append ParaText to the myPara
myPara.appendChild(paraText);

myMain.appendChild(myHeader);
myMain.appendChild(myPara);

document.body.appendChild(myMain);
*/
/*
let para = document.createElement("p");
para.setAttribute("style", "color:red;");
para.textContent = "Hey I’m red!";
document.body.appendChild(para);

let header = document.createElement("h3");
header.textContent = "I’m a blue h3!";
header.setAttribute("style", "color:blue;");
document.body.appendChild(header);

let container = document.createElement("div");
container.setAttribute("style", 'border : solid Black; background:pink;');
let fHeader = document.createElement("h1");
fHeader.textContent = "I'm in a div";
let fPara = document.createElement("p");
fPara.textContent = "ME TOO!";
container.appendChild(fHeader);
container.appendChild(fPara);
document.body.appendChild(container);
*/

window.addEventListener("keydown", (e)=>{
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
    key.addEventListener("transitionend", () => {key.classList.remove("playing")});
});
