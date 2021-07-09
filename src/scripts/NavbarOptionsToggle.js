// script for WhatsApp clone by sadi @3-7-2021

let navbar_options_toggler = false;


function NavbarOptionsToggle() {
    // console.log('script mounted successfully');
    const toggleitem = document.querySelector('.tripledot-options-container');
    navbar_options_toggler = !navbar_options_toggler;
    // console.log(navbar_options_toggler);
    if(navbar_options_toggler) {
        toggleitem.style.zIndex = '999';
        toggleitem.style.display = "inline-block";
        toggleitem.focus();
    } else {
        toggleitem.style.display = 'none';
        toggleitem.style.zIndex = '-199';
    }
}

export function checkislink(event) {
    // event.preventDefault();
    if(event.nativeEvent.relatedTarget) {
        const tolink = event.nativeEvent.relatedTarget.getAttribute('data-islink');
        if(tolink) return false;
        else NavbarOptionsToggle();
    } else {
        NavbarOptionsToggle();
    }
}

export default NavbarOptionsToggle;