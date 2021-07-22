// import { createRequire } from 'module';
// import {PythonShell} from 'python-shell';
// import path from 'path';

// const require = createRequire(import.meta.url);
document.getElementById("myButtons").onclick = play_game;
function myFunction(){
  console.log('asd');
}

function play_game(){
    document.getElementById("myButtons").disabled = true;
    // console.log(process.env.PATH);
    console.log("HI")
    // import python from 'python-shell';
    // const electron = require("electron")
    const {PythonShell} = require('python-shell');
    var path = require("path")
    var ele = document.getElementsByName('contact');
              
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        var user = ele[i].value;
        // window.alert(user)
        // window.alert("COOLIO")
        // console.log(5+6)
    }
    // var city = document.getElementById("choice").value
    // document.getElementById("choice").value = "";

    var options = {
        scriptPath: path.join(__dirname, '/../Teachable-Machine-Object-Detection'),
        // pythonPath: '/usr/local/bin/python3',
        args : [user]
    }
    // PythonShell.run('tm_obj_det.py', options, function (err, results) {
    //     if (err) throw err;
    //     swal(results[0]);
    // });
    
    var game = new PythonShell('tm_obj_det.py', options);
    game.on('message', function(message1){
        // window.alert("COOL")
        document.getElementById("imageid").src= message1+".png";
        var arr = ["Rock", "Paper", "Scissors"];
        // document.getElementById("user").innerText = "You chose: "+ message1;
        var comp = arr[Math.floor(Math.random() * arr.length)]
        // document.getElementById("comp").innerText = "The computer chose: "+ comp;
        document.getElementById("computerchoice").src = comp + ".png";
        if (comp==message1) {
            document.getElementById("results").innerText = "Tie! Wanna play again?";
        } else if(comp == "Rock" && message1=="Scissors"){
            document.getElementById("results").innerText = "You lose :(";
        }else if(comp == "Scissors" && message1=="Paper"){
            document.getElementById("results").innerText = "You lose :(";
        }else if(comp == "Paper" && message1=="Rock"){
            document.getElementById("results").innerText = "You lose :(";
        }else{
            document.getElementById("results").innerText = "You win!";
        }
        document.getElementById("myButtons").disabled = false;

    })
}
