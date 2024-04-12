let smDavid={
    x:400,
    y:300,
    ray:15
};
const a = new Array(8).fill().map(() => new Array(8).fill());
for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        a[i][j] = {
            x: i,
            y: j,
            afisare: function afisare() {
                stroke("black");
                strokeWeight(0.5);
                if (this.x % 2 == 0) {
                    if (this.y % 2 == 0) {
                        fill("white");
                    }
                    else {
                        fill("black");
                    }
                }
                else {
                    if (this.y % 2 == 0) {
                        fill("black");
                    }
                    else {
                        fill("white");
                    }
                }
                square(20+this.x * 50,10+this.y * 50, 50);
            }
        }
    }
}
function setup() {
    createCanvas(1200, 600);
    background(240, 240, 240);
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            a[i][j].afisare();
        }
    }
}
function draw(){
    for(i=0;i<8;i++){
        pawn(45+50*i,35,"blue");
    }
    for(i=0;i<8;i++){
        pawn(45+50*i,385,"red");
    }
}
function pawn(x,y,color){
        //head
        stroke("black");
        fill(color);
        circle(x, y, smDavid.ray*2);
        //eyes
        stroke("black");
        fill("pink");
        ellipse(x-smDavid.ray/(25/15), y-smDavid.ray/(25/18), smDavid.ray/2.5, smDavid.ray/5);
        ellipse(x+smDavid.ray/5, y-smDavid.ray/(25/18), smDavid.ray/2.5, smDavid.ray/(25/7));
        stroke("cyan");
        circle(x-smDavid.ray/(25/15), y-smDavid.ray/(25/18), smDavid.ray/12.5);
        circle(x+smDavid.ray/5, y-smDavid.ray/(25/18), smDavid.ray/12.5);
        //mouth
        stroke("black");
        fill("grey")
        arc(x-smDavid.ray/5, y+smDavid.ray/12.5, smDavid.ray/(25/30), smDavid.ray/(25/15), -3.14, Math.PI);
        stroke("black");
        fill("white")
        arc(x-smDavid.ray/(25/9), y-smDavid.ray/(25/4), smDavid.ray/(25/7), smDavid.ray/(25/7), 0, Math.PI);
        arc(x-smDavid.ray/25, y-smDavid.ray/(25/4), smDavid.ray/(25/7), smDavid.ray/(25/7), 0, Math.PI);
}