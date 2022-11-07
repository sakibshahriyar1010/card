const panals = document.querySelectorAll('.panal');

panals.forEach(panal => {
    panal.addEventListener('click', () => {
        revomeActive()
        panal.classList.add('active')
    })
});


function revomeActive(){

    panals.forEach(panal => {
        panal.classList.remove('active');
    })

}