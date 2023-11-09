img="";
status ="";
objects = [];
objectDetector = ""

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', ModelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects..."
}

function draw() {
    image(img , 0 , 0 , 640 , 420);
    console.log("image loaded.")
    /* fill("#FF0000");
    text("dog", 45 , 75);
    noFill();
    stroke("#FF0000");
    rect(30 , 60 , 450 , 350);
    
    fill("#FF0000");
    text("cat" , 350 , 100);
    noFill();
    stroke("#FF0000")
    rect(300 , 60 ,300 , 350);*/

    if (status != "") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "status: objects detected!";

            fill("#FF0000");
            percent = floor(object[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}

function ModelLoaded() {
    console.log("model loaded.")
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error , results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}