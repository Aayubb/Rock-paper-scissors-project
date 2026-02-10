// Function for computer's choice

function getComputerChoice(){
    let random_num = Math.floor(Math.random() * 3 + 1);
    
    let random_choice;

    if(random_num === 1){
        random_choice= "Rock";
    }
    else if(random_num === 2){
        random_choice = "Paper";
    }
    else{
        random_choice ="Scissors";
    }
    console.log()
    return random_choice;
}

//Function for user's choice
function getHumanChoice(){
    let choice = prompt("Enter your choice: Rock, Paper or Scissors. ");

    if(choice == "Rock"){
        console.log("You choose");
    }
}