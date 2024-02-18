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

  let showResponse = function()
  {
    let index = Math.floor(Math.random() * response.length);
    let answer = response[index];
    let circle = document.getElementById( 'circle' );
    circle.style.display = 'inline-block';
    circle.innerHTML = '<br><br>' + answer;
  }
  
