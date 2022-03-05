status = "";



function setup()
{
    video = createCapture(VIDEO)
    video.size(480,380);

    video.hide()
    canvas = createCanvas(480, 380);
    canvas.center();

}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    

    object_name =     document.getElementById("object_name").value;
}

function modelLoaded()
{
    console.log("modelLoaded");
    status = true;
}


function draw()
{
    image(video, 0, 0, 480,380);

}