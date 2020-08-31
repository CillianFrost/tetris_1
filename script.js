let x = []
let y = []

let ypos=0
let ypos_save=0
let ypos_save_save = -10000
let random_position_save = 0

let massive_position = []
let massive_ypos = []

let x_1=[]
let y_1=[]
let x_2=[]
let y_2=[]

let close_block_xy=[]


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
           
            x_1[i]=x[i];//load coordinate grid на будуйщее
            y_1[j]=y[j]
            x_2[i]=x[i]+15;
            y_2[j]=y[j]+15;
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(15); 
    return Math.floor(Math.random() * (max - min)) + min; //calculating a random location
}

let random_position = 50*getRandomInt();

function delete_square(){  
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(65+random_position,25+ypos,34,34);
    ctx.fillRect(115+random_position,25+ypos,34,34);
    ctx.fillRect(65+random_position,75+ypos,34,34);
    ctx.fillRect(115+random_position,75+ypos,34,34);
    ypos=ypos+speed;
    ypos_save=ypos;
}

function draw_square(){  
    ctx.fillStyle="#FF0000";
    ctx.fillRect(65+random_position,25+ypos_save,34,34);
    ctx.fillRect(115+random_position,25+ ypos_save,34,34);
    ctx.fillRect(65+random_position,75+ ypos_save,34,34);
    ctx.fillRect(115+random_position,75+ ypos_save,34,34);
    ypos_save=ypos_save+speed;
}

draw();

function start_game(){
    if(ypos_save <749)
    {
    let timer_square = setInterval( function(){ 
        draw_square();
        
        // мне нужны эти пробелы тут мб будет еще много записей перезапичсей 
        let control_coordinate_x = massive_position.reverse().some(element => element == random_position);
        let control_coordinate_x_1 = massive_position.reverse().some(element => element == random_position-50);
        let control_coordinate_x_2 = massive_position.reverse().some(element => element == random_position+50);
        let index_control_coordinate_x = massive_position.indexOf(random_position);
        let control_coordinate_y = massive_ypos.reverse()[index_control_coordinate_x]; 
    
        console.log(control_coordinate_x_1);

        //да длиная поебень снизу, надо было чекнуть, код недописан, буду вводить масив кубов и фиксации значений, выше было записано, а так убрав условия x1 и x2 все норм падает как и планировал
        if(ypos_save >750 || (control_coordinate_x == true && ypos >=control_coordinate_y-150) || (control_coordinate_x_1 == true && ypos >=control_coordinate_y-150) || (control_coordinate_x_2 == true && ypos >=control_coordinate_y-150)) 
        {
            console.log(random_position);
            console.log(massive_position);

            massive_position.push(random_position);
            massive_ypos.push(ypos_save);
            
            fix_value();

            clearTimeout(timer_square);
            ypos_save=0;
            ypos = 0;
            random_position = 50*getRandomInt();
            start_game();
        }
    }, 100) ;
    }
}

function delete_game(){
setTimeout( function(){
    if(ypos_save <749)
    {
    let timer_square = setInterval( function(){ 
        delete_square();
        if(ypos_save >851)
        {
            clearTimeout(timer_square);
            ypos = 0;
            ypos_save=0
            random_position = 50*getRandomInt();
            delete_game();
            
        }
    }, 100) ;
    }
},90);
}

function fix_value()// запись координат закрашеных
{
    close_block_xy.push(random_position/50);//верх лева
    close_block_xy.push(ypos/50);

    close_block_xy.push((random_position+50)/50);//верх право
    close_block_xy.push(ypos/50);

    close_block_xy.push(random_position/50); //низ лево
    close_block_xy.push((ypos+100)/50);

    close_block_xy.push((random_position+50)/50);//нз право
    close_block_xy.push((ypos+100)/50);

    console.log(close_block_xy);
}

function game(){
delete_game();
start_game();
}
//хочу чтоб было красиво =^_^=
game();

