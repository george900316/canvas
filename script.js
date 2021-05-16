//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  //城堡主體繪製開始
  
  //地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
  ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
  ctx.stroke()
  
//金字塔
  ctx.beginPath()
    ctx.moveTo(50,350)
    ctx.lineTo(200,100)
    ctx.lineTo(350,350)
  ctx.closePath()
  ctx.fillStyle="#E4B165"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //飛機
    ctx.fillStyle="white"
    let plane = time*4%440-40
    ctx.fillRect(plane,50,40,15)
    ctx.strokeRect(plane,50,40,15)
  //機翼
    ctx.beginPath()
    ctx.moveTo(plane+10,50)
    ctx.lineTo(plane,40)
    ctx.lineTo(plane+10,40)
    ctx.lineTo(plane+25,50)
    ctx.closePath()
    ctx.fillStyle="red"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  //機翼下
    ctx.beginPath()
    ctx.moveTo(plane+10,65)
    ctx.lineTo(plane,75)
    ctx.lineTo(plane+10,75)
    ctx.lineTo(plane+25,65)
    ctx.closePath()
    ctx.fillStyle="red"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  //雞頭
    ctx.beginPath()
    ctx.moveTo(plane+40,50)
    ctx.lineTo(plane+60,57.5)
    ctx.lineTo(plane+40,65)
    ctx.closePath()
    ctx.fillStyle="red"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()

    //左城門旗子
      ctx.beginPath()
        ctx.moveTo(50,350)
        ctx.lineTo(50,125-mouse.y/5)
        ctx.lineTo(100,140 - (time%3)-mouse.y/5)
        ctx.lineTo(50,150-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()  
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
  //車子
    ctx.fillStyle="white"
    let carx = time%440-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 
//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})