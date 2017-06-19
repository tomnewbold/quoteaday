var quotes = [["Whatever the mind of man can conceive and believe, it can achieve.","Napoleon Hill", "pink"],
["Strive not to be a success, but rather to be of value.","Tom Newbold", "blue"],
["Whatever the mind of man can conceive and believe, it can achieve.", "Albert Einstein", "black"],
["Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "Robert Frost", "yellow"],
["I attribute my success to this: I never gave or took any excuse.", "Florence Nightingale", "red"],
["You miss 100% of the shots you don’t take.", "Wayne Gretzky", "orange"],
["The most difficult thing is the decision to act, the rest is merely tenacity.", "Amelia Earhart", "purple"],
["Every strike brings me closer to the next home run.", "Babe Ruth", "grey"],
["Definiteness of purpose is the starting point of all achievement.", "W. Clement Stone", "green"],
["Life isn't about getting and having, it's about giving and being.", "Kevin Kruse", "green"]];


$( document ).ready(function() {
  document.getElementById('quote-box-quote').innerHTML = quotes[0][0];
  document.getElementById('quote-box-author').innerHTML = quotes[0][1];
  $('.tweet').attr("href", 'https://twitter.com/intent/tweet?text=' + quotes[0][0]);
});



$( "#button" ).click(function() {

var number = Math.floor(Math.random() * quotes.length + 1);
var color = quotes[number][2];


  document.getElementById('quote-box-quote').innerHTML = quotes[number][0];
  document.getElementById('quote-box-author').innerHTML = quotes[number][1];
  $('.quote').css('background-color', color );
  $('h1').css('color', color);
  $('h4').css('color', color);
  $('#button').css('background-color', color);
  $('i').css('background-color', color);

  $('.tweet').click(function() {
    $('.tweet').attr("href", 'https://twitter.com/intent/tweet?text=' + quotes[number][0]);
  });


});
