import $ from 'jquery'
const unorderedList = document.getElementById('list');
const activities = ['🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃','🏄', '🚴', '🤸', '🏃'];


activities.forEach(activity => {
    const listItem = document.createElement('p');
    listItem.innerText = activity;
    unorderedList.appendChild(listItem);
});

 

