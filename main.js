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

  function showResponse() {
    // Finds the DOM element for the response and stores in responseElement
    let responseElement = document.getElementById('eightBallResponses');
    // Changes the display in order to be able to see the response
    responseElement.style.display = 'inline-block';
    // Generates a random index to correspond with the response array
    let randomIndex = Math.floor(Math.random() * response.length);
    // Declares new variable for response text, combines adding new lines before response with string displaying random response
    let responseText = `<br><br>${response[randomIndex]}`;
    // Updates and returns the element's random response
    responseElement.innerHTML = responseText;
  }
  


  