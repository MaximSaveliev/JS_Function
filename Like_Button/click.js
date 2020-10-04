let like_button = document.querySelector(".like_button");
let i = 0;
function click_like(){
    like_button.innerHTML = `<i class="fas fa-heart"></i>  ${i}`;
    i++;
}
click_like();