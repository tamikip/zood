

var center_search_div = document.createElement('div')
center_search_div.className = 'center-search'
var center_search_input = document.createElement('input')
var search_result = document.createElement('div')
search_result.className = 'search-result'

center_search_div.appendChild(center_search_input)
center_search_div.appendChild(search_result)
document.body.appendChild(center_search_div)


var is_display = false;

function displayCenterSearch() {

    if (!is_display) {
        // 
        // document.getElementsByTagName('input').focus();
        center_search_div.style.display = 'block';
        black_overlay.style.display = 'block';
        center_search_input.focus();
        is_display = !is_display;
    }
    
}


function closeCenterSearch() {
    center_search_div.style.display = 'none';
    black_overlay.style.display = 'none';
    is_display = !is_display;
}


function startSearch(params) {
    
}


function addSearchBar(search_src,key_map) {
    var search_bar = document.createElement('div');
    search_bar.className = 'search-bar';
    var search_img = document.createElement('img');
    var search_keymap = document.createElement('div');
    search_keymap.className = 'search-keymap';
    search_keymap.innerText = 'Search ' + key_map;
    search_img.src = search_src;
    search_bar.appendChild(search_img);
    search_bar.appendChild(search_keymap);
    search_bar.onclick = displayCenterSearch;
    document.body.appendChild(search_bar);
}

document.onkeydown = function (e) {
    // event.preventDefault();
    var ev = window.event || e;
    if(ev.key === 'k' && ev.ctrlKey){
        displayCenterSearch()
        ev.preventDefault()
    }
    if(ev.keyCode == 27){
        closeCenterSearch()
    }
}