let modal = document.getElementById("movie-modal");
let modalTitle = document.getElementById("modal-title");
let modalTrailer = document.getElementById("modal-trailer");

function openModal(id, title) {
    modalTitle.textContent = title;
    modalTrailer.src = `trailer.mp4`; // Change to the trailer's file path
    modal.style.display = "flex";
    modal.dataset.movieId = id; // Store the movie ID in the modal
}

function closeModal() {
    modal.style.display = "none";
    modalTrailer.pause(); // Stop video playback when closing modal
}

function watchMovie() {
    alert(`Enjoy watching ${modalTitle.textContent}!`);
}

function downloadMovie() {
    const movieId = modal.dataset.movieId;
    const a = document.createElement("a");
    a.href = `movies/movie${movieId}.mp4`; // Replace with your movie's file path
    a.download = `Movie_${movieId}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
