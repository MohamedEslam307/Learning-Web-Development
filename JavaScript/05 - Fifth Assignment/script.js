const txtName = document.getElementById(`txtName`);
const startClock = document.getElementById(`clockbutton`);
const img1 = document.getElementById(`Image 1`);
img1.counter = 0;
const img2 = document.getElementById(`Image 2`);
img2.counter = 0;
const img3 = document.getElementById(`Image 3`);
img3.counter = 0;

let clockInterval;
let timeoutid;
let timeout2;

document.addEventListener("keydown", function(event){
    if(event.altKey && event.key === "c"){
        clearInterval(clockInterval);
        alert("Clock stopped");
    }
});

startClock.addEventListener("click",function(){
    alert("Clock started");
    clearInterval(clockInterval);
    updateClock();
    clockInterval=setInterval(updateClock, 1000);
});

function updateClock(){
    const clock = document.getElementById(`clock`);
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

txtName.addEventListener("keydown", function(event){
    alert(event.key);
});

// Function to handle the click event for the images
function handleImageClick(event) {
    clearInterval(timeoutid);
    this.counter++;
    alert(`Image ${this.id} counter: ${this.counter}`);
    timeoutid=setTimeout(updateHandlers, 3000);
}

// Add initial event listeners to the images
img1.addEventListener("click", handleImageClick);
img2.addEventListener("click", handleImageClick);
img3.addEventListener("click", handleImageClick);

// Function to handle the "Game Over" click event
function handleGameOver() {
    alert("Game Over");
}

function resetUpdateHandlers(){
    img1.removeEventListener("click", handleGameOver);
    img2.removeEventListener("click", handleGameOver);
    img3.removeEventListener("click", handleGameOver);

    img1.addEventListener("click", handleImageClick);
    img2.addEventListener("click", handleImageClick);
    img3.addEventListener("click", handleImageClick);
}

function updateHandlers(event) {
    img1.removeEventListener("click", handleImageClick);
    img2.removeEventListener("click", handleImageClick);
    img3.removeEventListener("click", handleImageClick);
    
    img1.addEventListener("click", handleGameOver);
    img2.addEventListener("click", handleGameOver);
    img3.addEventListener("click", handleGameOver);
}
// Use setTimeout to remove the old event listeners and add the new one after 3 seconds
