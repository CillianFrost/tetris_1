let x = []
let y = []

let ypos=0
let ypos_save=0
let ypos_save_save = -10000
let random_position_save = 0

let fix = 0;
let random = 0;

let condition  = new Boolean(true)

let massive_position = []
let massive_ypos = []

let speed = 50 // 50 pixel = 1 block in grid

let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

x[0]=0;
for (let i=1; i<17; i++){
        x[i]=x[i-1]+50;//step x 50 px
}
y[0]=0;
for (i=0; i<31; i++){
    y[i]=x[i-1]+10;// step y 10 px
}

function draw(){
    for(let j=0; j<31; j++)
    {     
        for (let i=0; i<17; i++)
        {
            ctx.fillStyle="#000000";
            ctx.fillRect(x[i],y[j],50,50);
            ctx.clearRect(x[i]+15,y[j]+15,34,34);
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(15); 
    return Math.floor(Math.random() * (max - min)) + min; //calculating a random location
}

let random_position = 50*getRandomInt();
let chois_random_block1 = chois_random_block();

function delete_square(){  
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(65+random_position, 25 + ypos, 34, 34);
    ctx.fillRect(115+random_position, 25 + ypos, 34, 34);
    ctx.fillRect(65+random_position, 75 + ypos, 34, 34);
    ctx.fillRect(115+random_position, 75+ ypos, 34, 34);
    ypos = ypos+speed;
}

function draw_square(){  
    ctx.fillStyle="#FFFF00";
    ctx.fillRect(65+random_position, 25 + ypos, 34, 34);
    ctx.fillRect(115+random_position, 25 + ypos, 34, 34);
    ctx.fillRect(65+random_position, 75 + ypos, 34, 34);
    ctx.fillRect(115+random_position, 75 + ypos, 34, 34);
}

function draw_s(){
    ctx.fillStyle="#FF0000";
    ctx.fillRect(115+random_position, 25 + ypos, 34, 34);
    ctx.fillRect(165+random_position, 25 + ypos, 34, 34);
    ctx.fillRect(65+random_position, 75 + ypos, 34, 34);
    ctx.fillRect(115+random_position, 75 + ypos, 34, 34);
}

function delete_s(){
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(115+random_position, 25 + ypos, 34, 34);
    ctx.fillRect(165+random_position, 25 + ypos, 34, 34);
    ctx.fillRect(65+random_position, 75 + ypos, 34, 34);
    ctx.fillRect(115+random_position, 75 + ypos, 34, 34);
    ypos = ypos+speed;
}

function draw_l_block(){
    ctx.fillStyle="#6A5ACD";
    ctx.fillRect(65+random_position, 25 + ypos, 34, 34);
    ctx.fillRect(65+random_position, 75 + ypos, 34, 34);
    ctx.fillRect(65+random_position, 125 + ypos, 34, 34);
    ctx.fillRect(65+random_position, 175 + ypos, 34, 34);

}

function delete_l_block(){
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(65+random_position, 25 + ypos, 34, 34);
    ctx.fillRect(65+random_position, 75 + ypos, 34, 34);
    ctx.fillRect(65+random_position, 125 + ypos, 34, 34);
    ctx.fillRect(65+random_position, 175 + ypos, 34, 34);
    ypos = ypos+speed;
}

function chois_random_block(min, max) {
    min = Math.ceil(1);
    max = Math.floor(4); 
    return Math.floor(Math.random() * (max - min)) + min; 
}

draw();

function start_game(){

    setInterval( function(){ 
       
        let control_coordinate_x = massive_position.reverse().some(element => element == random_position);
        let index_control_coordinate_x = massive_position.indexOf(random_position);
        let control_coordinate_y = massive_ypos.reverse()[index_control_coordinate_x]; 

        let control_coordinate_x_1 = massive_position.reverse().some(element => element == random_position+50);
        let index_control_coordinate_x_1 = massive_position.indexOf(random_position+50);
        let control_coordinate_y_1 = massive_ypos.reverse()[index_control_coordinate_x_1]; 

        let control_coordinate_x_2 = massive_position.reverse().some(element => element == random_position-50);
        let index_control_coordinate_x_2 = massive_position.indexOf(random_position-50);
        let control_coordinate_y_2 = massive_ypos.reverse()[index_control_coordinate_x_2];// не надо мб надо

        switch(chois_random_block1){
            case 1:
                draw_square();
                condition = (ypos >700 || (control_coordinate_x == true && ypos >= control_coordinate_y-100) || (control_coordinate_x_1 == true && ypos >= control_coordinate_y_1-100));
                break;
            case 2:
                draw_l_block(); 
                condition = (ypos >600 || (control_coordinate_x == true && ypos >= control_coordinate_y-100) || (control_coordinate_x_1 == true && ypos >= control_coordinate_y_1-100));
                break;
            case 3 :
                draw_s();
                condition = (ypos >700 || (control_coordinate_x == true && ypos >= control_coordinate_y-100) || (control_coordinate_x_1 == true && ypos >= control_coordinate_y_1-100));
                break;
        
    }
    
        if(condition == true) 
        {
            if(chois_random_block1 == 1)
            {
                massive_position.push(random_position);
                massive_ypos.push(ypos);
                massive_position.push(random_position+50);
                massive_ypos.push(ypos);
                massive_position.push(random_position);
                massive_ypos.push(ypos+50);
                massive_position.push(random_position+50);
                massive_ypos.push(ypos+50);
            }

            if(chois_random_block1 == 2)
            {
                massive_position.push(random_position);
                massive_ypos.push(ypos+150);
                massive_position.push(random_position);
                massive_ypos.push(ypos+100);
                massive_position.push(random_position);
                massive_ypos.push(ypos+50);
                massive_position.push(random_position);
                massive_ypos.push(ypos);
            }

            if(chois_random_block1 == 3)
            {
                massive_position.push(random_position+100);
                massive_ypos.push(ypos);
                massive_position.push(random_position+50);
                massive_ypos.push(ypos);
                massive_position.push(random_position);
                massive_ypos.push(ypos+50);
                massive_position.push(random_position+50);
                massive_ypos.push(ypos+50);
            }


        
            ypos = 0;
            random_position = 50*getRandomInt();
            chois_random_block1 = chois_random_block();
            start_game();

        }
    }, 100) ;
    
}

function delete_game(){
setTimeout( function(){
    {
    setInterval( function(){ 
        switch(chois_random_block1){
            case 1:
                delete_square();
                break;
            case 2:
                delete_l_block();
                break;
            case 3:
                delete_s();
                break;
    }
      
    }, 100) ;
    }
},90);
}

function game(){

    start_game();
    delete_game();
}

game();

