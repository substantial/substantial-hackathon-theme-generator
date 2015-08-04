var verbs = [
  'Hallucinating',
  'Exploring',
  'Discovering',
  'Gamifying',
  'Demystifying',
  'Reinventing',
  'Creating',
  'Killing',
  'Overcoming',
  'Simplifying'
];


var nouns = [
  'Privacy',
  'The Future',
  'Ownership',
  'Video Games',
  'Animals',
  'Compassion',
  'Money',
  'Equality',
  'Learning',
  'The Ego',
  'Love',
  'Obsolescence',
  'Sustainability',
  'Friendships',
  'Musicianship',
  'Reality',
  'Piracy',
  'Politics',
  'Toys',
  'Serendipity',
  'Sports',
  'Dating'
];

function patternA(){
  var noun = _.sample(nouns);
  var verb = _.sample(verbs);
  return verb + " " + noun;
}

function patternB(){
  var noun = _.sample(nouns);
  var noun2 = _.sample(nouns);

  var verb = _.sample(verbs);
  return verb + " " + noun + " of " + noun2;
}

function patternC(){
  var noun = _.sample(nouns);
  var noun2 = _.sample(nouns);

  var verb = _.sample(verbs);
  return verb + " " + noun + " in " + noun2;
}

function patternD(){
  var noun = _.sample(nouns);
  var noun2 = _.sample(nouns);

  var verb = _.sample(verbs);
  return verb + " " + noun + " with " + noun2;
}



function getResult(){
  return _.sample([patternA,
    patternA, patternA, patternA,
    patternA, patternA, patternA,
    patternB, patternC, patternD])()

}

$(function(){
  $('#draw').click(function(){
    console.log("you drew an entry");
    var result = getResult();
    $('#result').fadeOut({duration: 200, complete: function(){
      $('#result').text(result).fadeIn({duration: 270});
    }});
  });
});
