const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();
// updateSelectedCount();

let tickectPrice = +movieSelect.value;
console.log(tickectPrice);

function setMoviesData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}    

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
    console.log(seatsIndex);
    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * tickectPrice;
}

// populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    console.log(selectedSeats); 
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach( (seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');   
            }
        })
    }    
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}   

   
// Movie oku
movieSelect.addEventListener('change', e => {
    tickectPrice = +e.target.value;
    setMoviesData(e.target.selectedIndex, e.target.value);
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