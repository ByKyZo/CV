(function () {
    splitChars();
})();

function splitChars() {
    const getChars = document.querySelectorAll('[data-split-chars]');
    getChars.forEach((el) => {
        el.innerHTML = el.textContent.replace(
            /\S/gm,
            '<span class="__char" style="display: inline-block;">$&</span>'
        );
    });
}
