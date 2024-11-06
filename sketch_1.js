function setup() {//設定初始內容指執行一次
    createCanvas(windowWidth, windowHeight);//一個畫布
    background("#e7d7c1")//背景咖啡
  }

  function draw() {//畫圖每秒60次
    background("#e7d7c1");//灰白
    noFill()//以下不要有顏色
    rectMode(CENTER)//設定方形在座標中間
    stroke("#f07167")
    strokeWeight(3)
    //第一排
    //for迴圈
    //i=0    i為變數，要i從0開始(設定i的初始直)
    //i<20  條件判斷<當條件成立時<就繼續進到迴圈
    //=+1   I值每次改變的差距直，當回圈執行完一次，i+1
    for(let i=0;i<20;i=i+1){
    ellipse(25+50*i,25,50)   
    rect(25+50*i,25,50) 
    ellipse(50+50*i,50,25)
    }

    }