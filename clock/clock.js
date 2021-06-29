/*
https://forest71.tistory.com/102?category=606376
*/
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');    

let radius = canvas.height / 2;

ctx.translate(radius, radius); //설정한 만큼 x,y 축이동

radius = radius * 0.90;

setInterval(drawClock, 1000); 

function drawClock(){
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius){
    let grad;
   //outer circle
    ctx.beginPath();
    ctx.arc(0,0,radius,0,2*Math.PI); // (x,y,반지름,startangle,endangle)
    ctx.fillStyle = "White";
    ctx.fill();
    
    //inner circle
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05); //그라데이션 주는 함수 
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');

    //define gradient as stroke style
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke(); 
    //draw the center of the clock
    ctx.beginPath();
    ctx.arc(0,0, radius*0.1,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    let ang;
    let num;
    ctx.font = radius*0.15 + "px arial"; 
    ctx.textBaseline = "middle"; 
    ctx.textAlign = "center"; 
    
    for(num=1; num < 13; num++){ 
        ang = num *Math.PI /6; // 12시간이 있으므로 하나당 30도씩이라는 소리
        ctx.rotate(ang); // 시간에 따라 회전
        ctx.translate(0, -radius*0.85); // 왜 위로 움직이는데 마이너스 일까요 ㅜㅜ
        ctx.rotate(-ang); // 숫자를 똑바르게 표현
        //
        ctx.fillText(num.toString(), 0, 0);
        //요기부턴 이해가 잘 안됩니다 ㅜㅜ
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    hour = hour%12;
    
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    
    drawHand(ctx, hour, radius*0.5, radius*0.07);
   
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60)); // 초침이 움직이면 분침도 약간은 움직여야한다.
   
    drawHand(ctx, minute, radius*0.8, radius*0.05);
   
    second=(second*Math.PI/30); // 1초에 6도씩 움직인다.
    //make second hand 90% of canvas's radius
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round"; //침 끝에 round 처리
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}