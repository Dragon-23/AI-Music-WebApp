song="";
believer="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreofleftWrist = 0;
scoreofrightWrist = 0;
function setup()
{
canvas = createCanvas(400,350);
canvas.position(440, 200);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("PoseNet Is Intialized");
}

function gotPoses(results)
{
    if( results.length > 0)
    {
        console.log(results);
        scoreofleftWrist = results[0].pose.keypoints[9].score;
        console.log("Score of left wrist is ="+scoreofleftWrist+"Score of right wrist is ="+scoreofrightWrist);
       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;
       console.log("leftWristX = " +leftWristX+ "leftWristY = "+leftWristY);
       rightWristX = results[0].pose.rightWrist.x;
       rightWristY = results[0].pose.rightWrist.y;
       console.log("rightWristX = " +rightWristX+ "rightWristY = "+rightWristY);

       scoreofrightWrist = results[0].pose.keypoints[10].score;

    }
    
    
    
}
function preload()
{
    song = loadSound("music.mp3");
    believer= loadSound("Believer.mp3");
}

function draw()
{
    image(video, 0,0, 400, 350);
    fill("#ff0000");
    stroke("#800080");
    if(scoreofrightWrist > 0.2)
    {

    
    circle(rightWristX, rightWristY, 21);
    
    if(rightWristY >0 && rightWristY <=100)
    {
        document.getElementById("speed").innerHTML = "Speed rate is 0.5x";
       
        if( name == "music")
    {
        song.rate(0.5);
    }
    else if( name == "Believer")
    {
        believer.rate(0.5);
    }
    }

    else if(rightWristY >100 && rightWristY <= 200)
    {
        document.getElementById("speed").innerHTML = "Speed rate is 1x";
        

        if( name == "music")
        {
            song.rate(1);
        }
        else if( name == "Believer")
        {
            believer.rate(1);
        }
    }


    else if( rightWristY >200 && rightWristY <= 300)
    {
        document.getElementById("speed").innerHTML = "Speed rate is 1.5x";
        if( name == "music")
        {
            song.rate(1.5);
        }
        else if( name == "Believer")
        {
            believer.rate(1.5);
        }
    }

    else if(rightWristY >300 && rightWristY <= 400)
    {
        document.getElementById("speed").innerHTML = "Speed rate is 2x";
        if( name == "music")
        {
            song.rate(2);
        }
        else if( name == "Believer")
        {
            believer.rate(2);
        }
    }

    else if(rightWristY >400 && rightWristY <= 500)
    {
        document.getElementById("speed").innerHTML = "Speed is 2.5x";
        if( name == "music")
        {
            song.rate(2.5);
        }
        else if( name == "Believer")
        {
            believer.rate(2.5);
        }
    }
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if(scoreofleftWrist > 0.2)
   { 
    fill("#ff0000");
    stroke("#800080");
    circle(leftWristX, leftWristY, 21);
    InnumberleftWristY =  Number(leftWristY);
    remove_decimals = floor(InnumberleftWristY);
    InnumberleftWristY_divide_1000 = remove_decimals / 1000;
    volume = InnumberleftWristY_divide_1000 * 2;
    document.getElementById("volume").innerHTML = "Volume : " +volume;

    if( name == "music")
    {
        song.setVolume(volume);
    }
    else if( name == "Believer")
    {
        believer.setVolume(volume);
    }
        }




function play()
{
    name = document.getElementById("name").value;
    if( name == "Believer"){
        believer.play();
        song.stop();
        believer.setVolume(1);
        believer.rate(1);
    }
    if( name == "music"){
    song.play();
     believer.stop();
     song.setVolume(1);
     song.rate(1);
    }
}

function pause()
{
    name = document.getElementById("name").value;
    if( name == "Believer"){
        believer.pause();
    }
    if( name == "music"){
        song.pause();
    }
}

function stop()
{
    name = document.getElementById("name").value;
    if( name == "Believer"){
        believer.stop();
    }
    if( name == "music"){
        song.stop();
    }
}
