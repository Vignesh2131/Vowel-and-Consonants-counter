const text = document.querySelector('textarea');
const btn = document.querySelector('.btnCount');
const result = document.querySelector('.result');
const clear = document.querySelector('.btnClear')



btn.addEventListener('click', function () {
    let ccount = 0;
    let vcount = 0;
    let inputText = text.value.toLowerCase().split('');
    console.log(inputText);
    inputText.forEach(function (s,i) {
        if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s =='u' ) {
            vcount++;
        } else {
            ccount++;
        }
    })
    result.textContent = `There are ${vcount} vowels and ${ccount} consonants`;
    
})

clear.addEventListener('click', function () {
    result.textContent = text.value = '';
})