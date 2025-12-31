const canvas = document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);
car.draw(ctx)

animate();

function animate(){
    car.update();  
    canvas.height=window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate); // this calls the animate function again and again which gives the view of a animation being done 
}