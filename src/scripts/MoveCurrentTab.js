// script for Moving current Tab. by sadi @4-7-21 : 6pm;

let globalCurrentTab = 1;

function MoveCurrentTab(tabIndex = 1) {
    // only run if not clicked the same tab , :{ thats a hell lot of energy wasting on unnecessary computation}
    if(globalCurrentTab === tabIndex) return;
    globalCurrentTab = tabIndex;
    // tab index default to chats section
    switch (tabIndex) {
        case 0: // cam tab
            setCurrentTabIndicator('10%', '90%');
            setCurrentTab(tabIndex);
                break;
        case 1: // chats tab
            setCurrentTabIndicator('30%', '60%');
            setCurrentTab(tabIndex);
                break;
        case 2: // status tab
            setCurrentTabIndicator('30%', '30%');
            setCurrentTab(tabIndex);
                break;
        case 3: // calls tab
            setCurrentTabIndicator('30%', '0%');
            setCurrentTab(tabIndex);
                break;
        default: // chats tab
            setCurrentTabIndicator('30%', '60%');
            setCurrentTab(tabIndex);
    }
}


function setCurrentTabIndicator(width, marginright) {
    // use both parameters to set current tab indicator
    const currentTab = document.getElementById('navbar_current_menu');
    currentTab.style.width = width;
    currentTab.style.marginRight = marginright;
}

function setCurrentTab(currentIndex) {
    // let homescreen = document.getElementById('homescreen_container');
    // const camTab = document.getElementById('chats_container');
    const camTab = document.getElementById('camera_container');
    const chatsTab = document.getElementById('chats_container');
    const statusTab = document.getElementById('status_container');
    const callsTab = document.getElementById('callhistory_container');
    let allTabs = [camTab, chatsTab, statusTab, callsTab];
    
    let a;
    // hide every tab and show only
    for(a = 0; a < allTabs.length; a++) {
        allTabs[a].style.display = 'none';
        // console.log(a);
    }
    // current tab
    allTabs[currentIndex].style.display = 'block';
    // console.log('swithed tabs');
}

// REUSABLE FEATURE

    // everything reUSEDD...    
            
// END

export default MoveCurrentTab;