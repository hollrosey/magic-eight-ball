// These will be the answers that show randomly each turn
let response = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

// Function to go into the array and retrieve a response
  let showResponse = function()
  {
// Creates random index that matches to answer in array
    let index = Math.floor(Math.random() * response.length);
// Goes into array and retrieves the corresponding response    
    let answer = response[index];
// Retrieves the HTML element that will contain the response text    
    let circle = document.getElementById( 'eightBallResponses' );
// Displays the background for the response by changing display CSS to none   
    circle.style.display = 'inline-block';
// Displays the text response from the eight ball   
    circle.innerHTML = '<br><br>' + answer;
  }
  
