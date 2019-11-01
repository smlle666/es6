var input = document.querySelector("input[type = 'text']");

function search(key = ''){
    let paragraphs = document.querySelectorAll("p");

    for(let p of paragraphs){
        let text = p.innerHTML;
        p.innerHTML = text.split('<span>').join('').split('</span>').join('');

    }

    if (key === ''){
        alert('Ничего не найдено.');
        return;
    }
    
    for(let p of paragraphs){
        let text = p.innerHTML;
        p.innerHTML = text.split(key).join('<span>' + key + '</span>');
    }
}

var searchBtn = document.querySelector(".search");
searchBtn.addEventListener('click',function(){
    search(input.value);
});