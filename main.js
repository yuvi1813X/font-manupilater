noseX=0;
noseY=0;
leftwrist=0;
rightwrist=0;
difference=0;
function setup()
{
    canvas = createCanvas(550, 550)
    canvas.position( 560, 150 )
    
    video = createCapture(VIDEO)
    video.size(550,500)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw(){
    background('#13E896');
    fill('blue');
    stroke('blue');
    textSize(difference);
    text("yuvraj",100,100)
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        leftwrist=results[0].pose.leftWrist.x;
        rightwrist=results[0].pose.rightWrist.x;
        difference=floor(leftwrist-rightwrist);
        

    }
}