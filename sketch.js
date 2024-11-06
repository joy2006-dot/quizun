function setup() {//設定初始內容指執行一次
  createCanvas(windowWidth, windowHeight);//一個畫布
  background("#e7d7c1")//背景咖啡
}

function draw() {//畫圖每秒60次
  background("#e7d7c1");//灰白
  rectMode(CENTER)//設定方形在座標中間
  noFill()//以下不要有顏色
  stroke("#f07167")//顏色
  strokeWeight(3)//粗細
  //
  var rect_width=50  +mouseX/10  //方形的寬度
  var bc_width=50    +mouseX/10   //大園的寬度
  var sc_width=25    +mouseX/100      //小圓的寬度
   //第一排
    //for迴圈
    //i=0    i為變數，要i從0開始(設定i的初始直)
    //i<20  條件判斷<當條件成立時<就繼續進到迴圈
    //=+1   I值每次改變的差距直，當回圈執行完一次，i自動+1
  for(let j=0;j<20;j=j+1){//產生第幾排
    for(let i=0;i<40;i=i+1){//產生一整排的物件
      if(j<15)  {//地幾到幾排共五排設定的顏色
        stroke("#90a955")
      }
      ellipse(25+50*i,25+50*j, rect_width)//在座標2525，劃一個圓   
      rect(25+50*i,25+50*j, bc_width) //畫方形，在2525
      ellipse(50+50*i,50+50*j, sc_width)//化小圓，直徑為25
      }
  } 
}
