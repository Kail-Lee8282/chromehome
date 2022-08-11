const searchInput = document.getElementById("input-search");

function onSearchEvent(event){
    
    if(event.key === "Enter"){
        console.log(event.target.value);
        location.href=`https://www.google.com/search?q=${event.target.value}`;
        searchInput.value = "";
    }
}

searchInput.addEventListener("keypress",onSearchEvent);