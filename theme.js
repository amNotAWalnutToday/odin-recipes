let dark = false;

const theme = document.querySelector('.theme')
theme.addEventListener('click',changeTheme)

function changeTheme(e) {
    const mode = document.querySelector('.html')
    if(!dark){
        mode.classList.add('dark');
        dark = true;
    }else {
        mode.classList.remove('dark')
        dark = false;
    }
}