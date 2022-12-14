const unorderedList = document.getElementById('list');
const activities = [ '🚴', '🤸', '🏃'];
const otherUl=document.querySelector('.another')
const fragmentHtml=document.createDocumentFragment()
activities.forEach(e => {
    const listItem = document.createElement('p');
    listItem.innerText = e;
    otherUl.appendChild(listItem)
});
activities.forEach(e => {
    const listItem = document.createElement('p');
    listItem.innerText = e;
    unorderedList.appendChild(listItem)
});

