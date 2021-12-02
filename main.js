function preload()
{

}
function setup()
{
 video = createCapture(VIDEO);
 video.size(500 , 500);
 video.position(40 , 170)
 canvas = createCanvas(500 , 500);
 canvas.position(565 , 170);
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose',  gotPoses);
}
function modelLoaded()
{
    console.log("Pose Net is Initialized");
}
function draw()
{

}
function gotPoses(results)
{
    if (results.length > 0) 
    {
     console.log(results);    
    }
}