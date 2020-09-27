let select = document.querySelectorAll('.select');
let general = document.querySelector('.general');
let control = document.querySelector('.control');

for (let i=0; i<select.length; i++) {
    select[i].addEventListener("click", goSelect);
}

control.addEventListener("click", goBack);

function goSelect(e) {
    general.classList.add("none");
    control.classList.remove("none");
    if (e.target.id=="select_standard") {
        document.getElementById('standard').classList.remove("none");
    }
    else if (e.target.id=="select_optimal") {
        document.getElementById('optimal').classList.remove("none");
    }
    else if (e.target.id=="select_excellent") {
        document.getElementById('excellent').classList.remove("none");
    }
    else if (e.target.id=="select_premium") {
        document.getElementById('premium').classList.remove("none");
    }
}

function goBack() {
    general.classList.remove("none");
    control.classList.add("none");
    document.getElementById('standard').classList.add("none");
    document.getElementById('optimal').classList.add("none");
    document.getElementById('excellent').classList.add("none");
    document.getElementById('premium').classList.add("none");
}