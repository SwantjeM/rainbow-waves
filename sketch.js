  let x=[]
  let y=[]
  let seedX =[]
  let seedY = []
//  let filler =[]
  let fill_r =[]
  let fill_g = []
  let fill_b = []

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(126);
  ellipse(mouseX, mouseY, 33, 33);

  if (mouseIsPressed == true) {
    seedX.push(mouseX)
    seedY.push(mouseY)
    x.push(0)
    y.push(0)
//    filler.push(random(256)); 
    fill_r.push(random(256))
    fill_g.push(random(256))
    fill_b.push(random(256))
  }
//  console.log({seedX, seedY, x, y })
  if (seedX.length){
    for (let i=0; i<seedX.length; i++){ 
    x[i]+=1
    y[i]+=1
    ellipse(seedX[i], seedY[i], x[i], y[i] )
//    fill(filler[i])
      fill(fill_r[i], fill_g[i], fill_b[i])

    }

  }
}