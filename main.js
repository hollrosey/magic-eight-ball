// These will be the answers that show randomly each turn
let answer = [
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

// Shows the response when clicked
let showResponse = function() {
    // Generates a random index that correlates to a response
    let index = Math.floor(Math.random() * response.length);
    // Assigns a number to each answer in the array
    let response = answer[index]
    // Displays answer inside the magic 8 ball
    let element = document.getElementById( 'circle' );
    // Changing from none to inline-block unhides the element
    element.style.display = 'inline-block';
    // Shows answer within this element
    element.innerHTML = '<br><br>' + answer;

}
