var canvas;
var stage;
var img = new Image();
var sprite;

window.onload = function () {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.addEventListener("stagemousedown", clickCanvas);
    stage.addEventListener("stagemousemove", moveCanvas);

    var data = {
        images: ["2.png"],
        frames: {width: 20, height: 20, regX: 10, regY: 10}
    }

    sprite = new createjs.Sprite(new createjs.SpriteSheet(data));
    createjs.Ticker.setFPS(20);
    createjs.Ticker.addEventListener("tick",tick);
}

function tick(e) {
    var t = stage.getNumChildren();
    for (var i=t-1;i>0;i--){
        var s =stage.getChildAt(i);

        s.vY += 2;
        s.vX += 1;
        s.x += s.vX;
        s.y += s.vY;

        s.scaleX = s.scaleY = s.vS+s.scaleX;
        s.alpha += s.vA;

        if (s.alpha<=0 || s.y>canvas.height){
            stage.removeChildAt(i);
        }
    }
    stage.update(e);
}

function clickCanvas(e) {
    adds(Math.random()*200+100,stage.mouseX,stage.mouseY,2);
}

function moveCanvas(e) {
    adds(Math.random()*2+1,stage.mouseX,stage.mouseY,1);
}

function adds(count,x,y,speed) {
    for (var i =0;i<count;i++){
        var s = sprite.clone();
         s.x = x;
         s.y = y;
         s.alpha = Math.random()*0.5 + 0.5;
         s.scaleX = s.scaleY = Math.random()+0.3;

         var a = Math.PI * 2 * Math.random();
         var v = (Math.random()-0.5)*30*speed;
         s.vX = Math.cos(a)*v;
         s.vY = Math.sin(a)*v;
         s.vS = (Math.random()-0.5)*0.2; // scale->缩放的变化
         s.vA = -Math.random()*0.05-0.01; // alpha->透明度的变化
        stage.addChild(s);

    }
}