window.addEventListener("click", (e) => {
    e.target.innerHTML = reverse(e.target.textContent);
});


function reverse(text) {
    let chars = text.split('');
    let result = "";
    for (let i = 0; i < chars.length; i++) {
        result += chars[chars.length - 1 - i];
    }
    return result;
}