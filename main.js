const[btn, ptag] = [document.querySelector('#button'), document.querySelector('#newQuoteSection')];

const quotes = [
    "STOP CAPPING YOUR OWN SUCCESS\n You have greetness in you! \n Reach your goals in tech, but stop capping it!\n Reach as far as you can! Don\'t say \"I can only get as far as this\" You will ONLY reach \"this\" If you do that! \n Don't stop yourself from reaching further!",
    "By keeping your idea to yourself, you are deny me and everyone else your greatness. \n You are denying me the ability to use your product, website or creation! STOP JUST THINKING ABOUT IT!\n GO MAKE IT!\n Let us all celebrate your success! \n You got this!",
    "You have to be so UNDENIABLY good so they *have* to hire you",
    "If you want to change your life you only need 2 things.\n You need to START and BE CONSISTENT\n There is no secret or shortcut.\n Start on your journey and be consistent in what you are doing! \n You absolutely got this!",
    "* you're your competition. Be better than you were before.\n  * avoid negative people. Surround yourself with positive people.\n  * see failures as opportunities to improve/grow as a dev\n * if you don't ask, you don't get it"

]


btn.addEventListener('click', function(){
    const randomize = Math.floor(Math.random() * quotes.length);
    ptag.innerHTML = quotes[randomize];


    /* const darkColor = ["#D3D3D3", "#C0C0C0", "#A9A9A9", "#808080", "#333"];
    const ranDarkColor = Math.floor(Math.random() * darkColor.length); */
    const color = ["#323", "yellow", "white"];
    const ranColor = Math.floor(Math.random() * color.length);
    ptag.style.backgroundColor = color[ranColor];
    /* ptag.style.backgroundColor = [ranDarkColor]; */
    if(ptag.style.backgroundColor === color[ranColor]){
    ptag.style.color = 'green';
    }/* else if(ptag.style.backgroundColor === darkColor[ranDarkColor]){
        ptag.style.color = 'white';
    } */else{
        ptag.style.color = 'pink';
    }

    


})
