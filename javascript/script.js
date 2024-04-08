let ParkerStats = {
    "name": "Parker",
    "Totoal Matches" : "2,485",
    "Win Percent" : "3.3%",
    "Overall Wins" : "81",
    "Overall Kills" : "3,352",
    "Solo Wins" : "10",
    "Solo Win Percent" : "1.4%",
    "Solo Kills" : "757", 
}

let JpStats = {
    "name": "JP",
    "Totoal Matches" : "4,984",
    "Win Percent" : "5.2%",
    "Overall Wins" : "257",
    "Overall Kills" : "7,915",
    "Solo Wins" : "52",
    "Solo Win Percent" : "2.3%",
    "Solo Kills" : "3,469", 
}

let MorganStats = {
    "name": "Morgan",
    "Totoal Matches" : "4,900",
    "Win Percent" : "4.1%",
    "Overall Wins" : "199",
    "Overall Kills" : "7,051",
    "Solo Wins" : "41",
    "Solo Win Percent" : "2.5%",
    "Solo Kills" : "1,881", 
}

let allStats = {
    'Morgan': MorganStats,
    'Jp' : JpStats,
    'Parker' : ParkerStats,
}

let playerObj;

function GreetPlayer(name){
    alert("Hello " + name + "!")

}


function checkGuess (){
    const guessInput = document.querySelector(".guessField");
    const guess = guessInput.value;
    let possPlayers = ["Jp", "Parker", "Morgan"];

    // console.log(); 
    if (possPlayers.includes(guess)) {
        GreetPlayer(guess);
        alert("Stats will be updated! ");
        playerObj = allStats[guess]
        statInfo();
    }
    else {
        GreetPlayer(guess);
        alert("This Person is not on the stats list");
    }
}
function runProgram (){
    playerObj = allStats["Jp"];
    statInfo();
    
}

function statInfo (){
    let TotalM = playerObj["Totoal Matches"];
    let WinP = playerObj["Win Percent"];
    let OverallW = playerObj["Overall Wins"];
    let OverallK = playerObj["Overall Kills"];
    let SoloW = playerObj["Solo Wins"];
    let SoloWinP = playerObj["Solo Win Percent"];
    let SoloK = playerObj["Solo Kills"];

    const playerNameHeading = document.querySelector("#playerName");
    playerNameHeading.textContent = `${playerObj.name}'s Stats`;
    
    const playerTotalMatches = document.querySelector("#TotalM");
    playerTotalMatches.textContent = `Total Matches: ${TotalM}`;

    const playerWinPercent = document.querySelector("#WinP");
    playerWinPercent.textContent = ` Win Percent: ${WinP}`;

    const playerOverallWins= document.querySelector("#OverallW");
    playerOverallWins.textContent = `Overall Wins: ${OverallW}`;

    const playerOverallKills = document.querySelector("#OverallK");
    playerOverallKills.textContent = `Overall Kills: ${OverallK}`;

    const playerSoloWins = document.querySelector("#SoloW");
    playerSoloWins.textContent = `Solo Wins: ${SoloW}`;

    const playerSoloWinPercent = document.querySelector("#SoloWinP");
    playerSoloWinPercent.textContent = `Solo Win Percent: ${SoloWinP}`;

    const playerSoloKills = document.querySelector("#SoloK");
    playerSoloKills.textContent = `Solo Kills: ${SoloK}`;

    const guessButton = document.querySelector(".guessSubmit");
    guessButton.addEventListener("click", checkGuess);
}
document.addEventListener("DOMContentLoaded", runProgram);
