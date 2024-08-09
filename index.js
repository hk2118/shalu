const ani=document.querySelector('.animate');
const content=['Love you kutty','Sorry Kutty'];
let contentIndex=0
let characterIndex=0

function update(){
    characterIndex++
    console.log(characterIndex);
    
    ani.innerHTML=`<h1>${content[contentIndex].slice(0,characterIndex)}</h1>`
    if (characterIndex==content[contentIndex].length){
        contentIndex=contentIndex+1
        characterIndex=0
    }
    if(content.length==contentIndex){
        contentIndex=0
    }

    setTimeout(update,200)

}
update()