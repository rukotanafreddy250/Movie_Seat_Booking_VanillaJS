const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let tickectPrice = +movieSelect.value;
console.log(tickectPrice);

// local starage 
// const memory = localStorage.setItem('seats');

// update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    console.log();
    // copy total and count
    const seatsIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    });
    console.log(seatsIndex);

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    console.log(selectedSeats);
    
    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * tickectPrice;
}

// Movie oku
movieSelect.addEventListener('change', e => {
    tickectPrice = +e.target.value;
    console.log(e.target.selectedIndex);
    updateSelectedCount();
    console.log(e.target.value);
});


// seat click event 
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
    console.log(e.target);
});