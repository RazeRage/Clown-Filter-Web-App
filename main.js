noseX = 10;
noseY = 20;

function preload() {
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    //video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotposes)
}
function modelLoaded() {
    console.log('poseNet is Initiaized')
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        console.log("nose x =" + results[0].pose.nose.x)
        console.log("nose y =" + results[0].pose.nose.y)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    }
}
function draw() {
    image(video, 0, 0, 300, 300)
    fill("Purple")
    stroke("Black")
    circle(noseX, noseY, 20)
}

function take_snapshot() {
    save("myFilterImage.png")
}
