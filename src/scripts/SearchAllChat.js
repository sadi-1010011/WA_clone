// script for WA search feature by sadi, 4-7-21: 6pm


function SearchAllChat() {
    const search_box = document.getElementById('searchAllchat');
    search_box.style.display = 'inline-block';
    search_box.style.padding = '1rem 0';
}

export function SearchClose() {
    const search_box = document.getElementById('searchAllchat');
    search_box.style.padding = '0';
    search_box.style.display = "none"
}

export default SearchAllChat;