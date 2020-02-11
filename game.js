var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var i = 0;
var glitch = 0;
var bestScore = [];
var scores = -1;
$("#prevbest").hide();



$("#start").click(function() {
scores++;
    if (glitch===1) {
      $("#A").hide();
      $("#B").hide();
      $("#C").hide();
      $("#start").hide();
      $("#Difficulty").hide();
      nextSequenceLevelA();
}


    if (glitch===2)  {
      $("#A").hide();
      $("#B").hide();
      $("#C").hide();
      $("#start").hide();
      $("#Difficulty").hide();
      nextSequenceLevelB();
}

    if (glitch===3) {
      $("#A").hide();
      $("#B").hide();
      $("#C").hide();
      $("#start").hide();
      $("#Difficulty").hide();
      nextSequenceLevelC();
    }


})
$("#A").click(function() {
  glitch = 1;
});

$("#B").click(function() {
  glitch = 2;
});

$("#C").click(function() {
  glitch = 3;
});



// When User clicks
$(".x").click(function() {

  var userChosenColour = $(this).attr("id");
  $("." + userChosenColour).fadeTo(100, 0.3, function() {
    $(this).fadeTo(100, 1.0);
  });

  userClickedPattern.push(userChosenColour);


  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length -1);
});


function animatePress(currentColor) {
  var cc = "#" + currentColor;
  $(cc).addClass("pressed");

  setTimeout(function() {
    $(cc).removeClass("pressed");
  }, 100);

}

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}


function nextSequenceLevelB() {
  var randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);
  userClickedPattern = [];
  var randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  var color = "." + randomChosenColor;



  $(color).fadeTo(100, 0.3, function() {
    $(this).fadeTo(100, 1.0);
  });


  playSound(randomChosenColor);

  $(document).ready(function() {
    setTimeout(function() {
      var randomNumber = Math.random() * 4;
      randomNumber = Math.floor(randomNumber);
      userClickedPattern = [];
      var randomChosenColor = buttonColor[randomNumber];
      gamePattern.push(randomChosenColor);
      var color = "." + randomChosenColor;


      $(color).fadeTo(100, 0.3, function() {
        $(this).fadeTo(100, 1.0);
      });


      playSound(randomChosenColor);
    }, 1000);
  })



  i++;
  var level = "Level " + i;

  $("#level-title").text(level);



}

function nextSequenceLevelC() {
  var randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);
  userClickedPattern = [];
  var randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  var color = "." + randomChosenColor;



  $(color).fadeTo(100, 0.3, function() {
    $(this).fadeTo(100, 1.0);
  });


  playSound(randomChosenColor);

  $(document).ready(function() {
    setTimeout(function() {
      var randomNumber = Math.random() * 4;
      randomNumber = Math.floor(randomNumber);
      userClickedPattern = [];
      var randomChosenColor = buttonColor[randomNumber];
      gamePattern.push(randomChosenColor);
      var color = "." + randomChosenColor;


      $(color).fadeTo(100, 0.3, function() {
        $(this).fadeTo(100, 1.0);
      });


      playSound(randomChosenColor);
    }, 350);
  })


    setTimeout(function() {
      var randomNumber = Math.random() * 4;
      randomNumber = Math.floor(randomNumber);
      userClickedPattern = [];
      var randomChosenColor = buttonColor[randomNumber];
      gamePattern.push(randomChosenColor);
      var color = "." + randomChosenColor;


      $(color).fadeTo(100, 0.3, function() {
        $(this).fadeTo(100, 1.0);
      });


      playSound(randomChosenColor);
    }, 700);




  i++;
  var level = "Level " + i;

  $("#level-title").text(level);



}

function nextSequenceLevelA() {
  var randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);
  userClickedPattern = [];
  var randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  var color = "." + randomChosenColor;

  $(color).fadeTo(100, 0.3, function() {
    $(this).fadeTo(100, 1.0);
  });


  playSound(randomChosenColor);

  i++;
  var level = "Level " + i;

  $("#level-title").text(level);
}

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {

      setTimeout(function() {
if (glitch===1)
        nextSequenceLevelA();
        if (glitch===2)
                nextSequenceLevelB();
                if (glitch===3)
                        nextSequenceLevelC();
      }, 1000);

    }
}
   else {
    $("#level-title").text("YOU LOST!");
    $("body").addClass("game-over");
    playSound("wrong");
bestScore[scores] = i;
    startOver();

    setTimeout(function() {
      $("body").removeClass("game-over");
      // $("#level-title").text("Press any key to start");
      $("#start").show();
      $("#A").show();
      $("#B").show();
      $("#C").show();
      $("#start").show();
      $("#Difficulty").show();
    $("#prevbest").text("Previos best: "+Math.max.apply(null,bestScore));
    $("#prevbest").show();

    }, 500);

  }
}

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  i = 0;
}
