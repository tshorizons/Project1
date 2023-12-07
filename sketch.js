



let gene =[0,0,10,20];
let moth = [20,20,10,10];
let refa =[300,300,30,30];



function setup() {
  createCanvas(400, 400);
  gene = new Gene(gene);
  newgene = new nextGene(moth);

  
  refa = new Refer(refa);
  

  



  frameRate(1);
  //noLoop();

  /*
  let num=1-4;
  console.log("Absolute", abs(num),"\n", "Actual", num);
  */
  
}

function draw() {
  
  //let r=random(290,300);

  
  //background(125,125,125);
  //fill(0,0,255);
  //rect(300,0,40,40);
 // gene = new Gene(gene);


  
  
  //gene.move();

  refa.display(refa);
  console.log(refa.x+15, refa.y+15);
  
  gene.check(refa.x+15,refa.y+15);
  gene.display();

  
  //newgene.check(0,300);
  //newgene.move();
  newgene.check(refa.x+15,refa.y+15)
  newgene.display();



  

  /*

  console.log("x entry" ,gene.x, "\n","y entry",refa.x);

  let diff = gene.x - refa.x
  console.log("difference", abs(diff));

  if (abs(diff)>150){
    console.log("bigger");
    

  }
*/
}


class Refer{
  constructor(ref){

   //for (let i=0;ref.length;i++){
    this.x=ref[0];
    this.y=ref[1];
    this.w=ref[2];
    this.h=ref[3];
   // }
  }

    display(){

    fill(255,125,0);
    //rectMode(CENTER);
    let b =0; //random(0,100);
    rect(this.x+b,this.y+b,this.w,this.h);

    }


  }
  




class Gene{

  constructor(idiot){
    //for (let i=0;i<gene.length;i++){

    this.x=idiot[0];
    this.y=idiot[1];
    this.w=idiot[2];
    this.h=idiot[3];
    //}

  }

  
  check(a,b){

   //this.z=20
   gene.x1=random(0,a);
      if (gene.x1>gene.x){
        gene.x=gene.x1;
      }

      gene.y1=random(0,b);
      if (gene.y1>gene.y){
        gene.y=gene.y1;
      }

      console.log("Gene  X",gene.x,  "\n",  "Gene Y", gene.y);
  }
  

  move(){
    //translate(width/2,height/2);
    this.x=this.x+random(100,400);
    this.y=this.y+ random(100,400);
    if (this.y>height || this.y<0){
      this.y=220;
    }

    if (this.x>width || this.x<0){
      this.x=220;

    }
    //this.y=0;
    //this.x=0;
  }

  display(){
    fill(0,125,255);
    //rectMode(CENTER);
   // rect(this.a,this.b,this.c,this.d);
   //console.log(this.x,this.y);
    circle(this.x,this.y,this.w);
  }


}

class nextGene{

  constructor(idiot){
    //for (let i=0;i<gene.length;i++){

    this.x=idiot[0];
    this.y=idiot[1];
    this.w=idiot[2];
    this.h=idiot[3];
    //}

  }

  
  check(a,b){

   //this.z=20
   let genex1=random(0,a);
      if (genex1>this.x){
        this.x=genex1;
      }

      let geney1=random(0,b);
      if (geney1>this.y){
        this.y=geney1;
      }

      console.log("Gene  X",gene.x,  "\n",  "Gene Y", gene.y);
  }
  

  move(){
    //translate(width/2,height/2);
    this.x=this.x+random(100,400);
    this.y=this.y+ random(100,400);
    if (this.y>height || this.y<0){
      this.y=50;
    }

    if (this.x>width || this.x<0){
      this.x=50;

    }
    //this.y=0;
    //this.x=0;
  }

  display(){
    fill(255,255,0);
    //rectMode(CENTER);
   // rect(this.a,this.b,this.c,this.d);
   //console.log(this.x,this.y);
    circle(this.x,this.y,this.w);
  }


}