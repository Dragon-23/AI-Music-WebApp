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
       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;
       console.log("leftWristX = " +leftWristX+ "leftWristY = "+leftWristY);
       scoreofrightWrist = results[0].pose.keypoints[10].score;
       rightWristX = results[0].pose.rightWrist.x;
       rightWristY = results[0].pose.rightWrist.y;
       console.log("rightWristX = " +rightWristX+ "rightWristY = "+rightWristY);
    }
    
}
function preload()
{
    song = loadSound("music.mp3");
    believer= loadSound("music2.mp3");
}

function draw()
{
    image(video, 0,0, 400, 350);
    if(scoreofleftWrist > 0.2)
   { 
    fill("#ff0000");
    stroke("#800080");
    circle(leftWristX, leftWristY, 21);
   song.play();
   believer.stop();
   document.getElementById("song-name") = " Harry Potter";

   }

else if(scoreofrightWrist > 0.2)
{
    fill("#ff0000");
    stroke("#800080");
    circle(rightWristX, rightWristY, 21);
    believer.play();
    song.stop();
    document.getElementById("song-name") = " Peter Pan";
    
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
