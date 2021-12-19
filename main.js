song="";
scoreLeftWrist=0;
leftWristX=0;
leftWristY=0;
rightwristY=0;
rightwristX=0
scorerightWrist=0;

function preload(){
song=loadSound("music.mp3");
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide()
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log("Posenet is initialized")
}
function gotPoses(results){
if(results.length>0){
console.log(results);
scoreLeftWrist=results[0].pose.keypoints[9].score;
scorerightWrist=results[0].pose.keypoints[10].score;
console.log("scoreLeftWrist="+scoreLeftWrist);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristx="+leftWristX+"leftWristY="+leftWristY);
    rightwristX=results[0].pose.rightWrist.x;
    rightwristY=results[0].pose.rightWrist.y;
    console.log("rightWristx="+rightwristX+"rightWristY="+rightwristY);
    }
    }
function draw(){
image(video,0,0,600,500)
fill("red");
stroke("red");
if(scorerightWrist>0.2){
circle(rightwristX,rightwristY,20);
song.stop();
}
}
function Play(){
song.play()
song.setVolume(1)
song.rate(1)
}
