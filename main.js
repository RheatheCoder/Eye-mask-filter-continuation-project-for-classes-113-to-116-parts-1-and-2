function preload(){

}

function setup(){
    createCanvas = (400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose', gotPoses);
}

function draw(){
image (video, 0, 0, 400, 400);
}

function takesnapshot(){
    save('My Eye Mask Selfie');
}

function gotPoses(results){
    if (results > 0){
        console.log(results);
        console.log ('pose x = ' + results[0].pose.nose.x);
        console.log ('pose y = ' + results[0].pose.nose.y);
    }
}