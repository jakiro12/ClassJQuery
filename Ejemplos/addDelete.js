const myAddItem=document.querySelector('p')
let myArr=['nombre del usuario,']
function changeContent(){
    let newContent= document.createElement('p')
    newContent.innerText=myArr[0]
    myAddItem.appendChild(newContent)
}
function deleteContent(){
   let lastChildToRemove=  myAddItem.lastChild
    myAddItem.removeChild(lastChildToRemove)
}