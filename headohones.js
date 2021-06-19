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
    img =loadImage('headphonesw.png');
}
function draw()
{
    image(img,0,0,380,380);
   if(status!="")
   {
    objectDetector.detect(img,gotResult);  
    for(i=0; i<objects.length;i++)
       {
           fill("black");
           percent=floor(objects[i].confidence*100);
           text(objects[i].label+" "+percent+"%", objects[i].x+15,objects[i].y+15);
           noFill();
           stroke("#FFC0CB");
           rect(objects[i].x+50,objects[i].y+50,objects[i].width,objects[i].height);
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