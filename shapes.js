img= "";
status= "";
objects=[];
function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
function preload()
{
    img =loadImage('shhapes.jpg');
}
function draw()
{
    image(img,0,0,380,380);
   if(status!="")
   {
    objectDetector.detect(img,gotResult);  
    for(i=0; i<objects.length;i++)
       {
           fill("#FFC0CB");
           percent=floor(objects[i].confidence*100);
           text("Umbrella"+" "+percent+"%", 20,110);
           noFill();
           stroke("#FFC0CB");
           rect(20,120,200,200);
       }
   }
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status= true;
}

function gotResult(error,results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function back()
{
    window.location = "index.html";
}