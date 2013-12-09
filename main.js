$(document).ready(function() {
/////////////////////////////////////

// // // // // // // // //
// // Variable Setup // //
// // // // // // // // //
var correctStat = 0;
var incorrectStat = 0;

var currentJSON = {};
var currentType = "pka";
var pKaTree = {

 "HOSO_s2_O_H_":{"answer":"-10", "name":"sulfuric acid", "img":""},
 "I_H_":{"answer":"-10", "name":"hydroiodic acid", "img":""},
 "Br_H_":{"answer":"-9", "name":"hydrobromic acid", "img":""},
 "Cl_H_":{"answer":"-7", "name":"hydrochloric acid", "img":""},
 "ArSO_s2_O_H_":{"answer":"-6.5", "name":"an arylsufonic acid", "img":""},
 "H_s2_O_S+__H_":{"answer":"-1.7", "name":"hydronium ion", "img":""},
 "O_s2_NO_H_":{"answer":"-1.5", "name":"nitric acid", "img":""},
 "F_H_":{"answer":"3", "name":"hydrofluoric acid", "img":""},
 "CH_s3_COO_H_":{"answer":"4.8", "name":"acetic acid", "img":""},
 "HOCOO_H_":{"answer":"5", "name":"carbonic acid", "img":""},
 "HS_H_":{"answer":"7", "name":"hydrogen sulfide", "img":""},
 "ArS_H_":{"answer":"7", "name":"thiophenol", "img":""},
 "H_s3_N_S+__H_":{"answer":"9", "name":"ammonium ion", "img":""},
 "N_T_C_H_":{"answer":"9", "name":"hydrogen cyanide", "img":""},
 "2,4-pentanedione":{"answer":"9", "name":"2,4-pentanedione", "img":"http://i00.i.aliimg.com/photo/520457247/24_Pentanedione.summ.jpg"},
 "ArO_H_":{"answer":"10", "name":"a phenol", "img":""},
 "acetone enol":{"answer":"11", "name":"acetone enol", "img":"http://www.thecatalyst.org/experiments/Kaur/images/keto_enol_eq.gif"},
 "methyl acetoacetate":{"answer":"11", "name":"methyl acetoacetate", "img":"http://static.coleparmer.com/large_images/AGROS12615.jpg"},
 "dimethyl malonate":{"answer":"13", "name":"dimethyl malonate", "img":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Dimethyl_malonate.png/180px-Dimethyl_malonate.png"},
 "CH_s3_O_H_":{"answer":"15.5", "name":"methanol", "img":""},
 "HO_H_":{"answer":"15.7", "name":"water", "img":""},
 "cyclopentadiene":{"answer":"16", "name":"cyclopentadiene", "img":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Cyclopentadiene.png/100px-Cyclopentadiene.png"},
 "CH_s3_CH_s2_O_H_":{"answer":"16", "name":"ethanol", "img":""},
 "(CH_s3_)_s2_CHO_H_":{"answer":"16.5", "name":"2-propanol", "img":""},
 "acetaldehyde":{"answer":"17", "name":"acetaldehyde", "img":"http://www.sigmaaldrich.com/content/dam/sigma-aldrich/structure1/148/mfcd00006991.eps/_jcr_content/renditions/medium.png"},
 "acetamide":{"answer":"17", "name":"acetamide", "img":"http://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Acetamide_skeletal.svg/512px-Acetamide_skeletal.svg.png"},
 "(CH_s3_)_s3_CO_H_":{"answer":"18", "name":"t-butanol", "img":""},
 "acetone":{"answer":"19", "name":"acetone", "img":"http://0.tqn.com/d/chemistry/1/7/j/F/1/acetone.jpg"},
 "N_T_CCH_s2__H_":{"answer":"25", "name":"acetonitrile", "img":""},
 "methyl acetate":{"answer":"25", "name":"methyl acetate", "img":"http://upload.wikimedia.org/wikipedia/commons/5/5d/Methyl_acetate.png"},
 "CH_s3_C_T_C_H_":{"answer":"25", "name":"propyne", "img":""},
 "N,N-dimethylacetamide":{"answer":"30", "name":"N,N-dimethylacetamide", "img":"http://wtt-pro.nist.gov/wtt-pro/image.png?cmp=n.n-dimethylacetamide"},
 "Ph_s3_C_H_":{"answer":"32", "name":"triphenylmethane", "img":""},
 "1,3-pentadiene":{"answer":"33", "name":"1,3-pentadiene", "img":"http://wtt-pro.nist.gov/wtt-pro/image.png?cmp=~e~-1.3-pentadiene"},
 "H_H":{"answer":"35", "name":"molecular hydrogen", "img":""},
 "H_s2_N_H_":{"answer":"38", "name":"ammonia", "img":""},
 "diisopropylamine":{"answer":"40", "name":"diisopropylamine", "img":"http://upload.wikimedia.org/wikipedia/commons/0/06/Diisopropylamine_structuur.png"},
 "PhCH_s2__H_":{"answer":"41", "name":"toluene", "img":""},
 "Ph_H_":{"answer":"43", "name":"benzene", "img":""},
 "H_s2_CCH_s2_":{"answer":"44", "name":"ethene", "img":""},
 "propene":{"answer":"43", "name":"propene", "img":"http://upload.wikimedia.org/wikipedia/commons/d/d1/Propylene.PNG"},
 "H_s3_C_H_":{"answer":"48", "name":"methane", "img":""},
 "CH_s3_CH_s2__H_":{"answer":"50", "name":"ethane", "img":""},
 "cyclohexane":{"answer":"51", "name":"cyclohexane", "img":"http://upload.wikimedia.org/wikipedia/commons/5/54/Cyclohexane-2D-skeletal.png"},
}

var mechTree = {

 "Claisen condensation":{"answer":"claisen condensation", "img":"http://chemwiki.ucdavis.edu/@api/deki/files/2995/image069.png?revision=1"},
 "nucleophilic acyl substitution":{"answer":"nucleophilic acyl substitution", "img":"http://chemwiki.ucdavis.edu/@api/deki/files/2724/image005.png?revision=1"},
 "aldol reaction":{"answer":"aldol reaction", "img":"http://chemwiki.ucdavis.edu/@api/deki/files/2959/image033.png?revision=1"},
 "conjugate addition":{"answer":"conjugate addition", "img":"http://chemwiki.ucdavis.edu/@api/deki/files/13134/7.jpg?revision=1"},
 "Michael addition":{"answer":"Michael addition", "img":"http://chemwiki.ucdavis.edu/@api/deki/files/3166/image008.png?revision=1"},
 "nucleophilic addition reaction":{"answer":"nucleophilic addition reaction", "img":"http://www.chembook.co.uk/eq20-18.jpg"},
 "electrophilic addition":{"answer":"electrophilic addition", "img":"http://www.curlyarrows.chem.ed.ac.uk/org/gif/image90.gif"},
 "decarboxylation":{"answer":"decarboxylation", "img":"http://chemwiki.ucdavis.edu/@api/deki/files/3011/image085.png?revision=1"},
 "Sn1":{"answer":"Sn1", "img":"http://www.chemgapedia.de/vsengine/media/vsc/en/ch/12/oc/substitution/sn_1/einleitung/mesngif.gif"},
 "Sn2":{"answer":"Sn2", "img":"http://upload.wikimedia.org/wikipedia/commons/3/39/SN2_reaction_mechanism.png"},
 "E1":{"answer":"E1", "img":"http://chemwiki.ucdavis.edu/@api/deki/files/7300/E1_mechanism_1.gif?size=bestfit&width=651&height=207&revision=1"},
 "hemiacetal":{"answer":"hemiacetal", "img":"http://www.personal.kent.edu/~cearley/org52/mechanisms/hemiacetal.png"},
 "E2":{"answer":"E2", "img":"http://chemwiki.ucdavis.edu/@api/deki/files/3166/image008.png?revision=1"},

}

// // // // // // // // //
// // Core Functions // //
// // // // // // // // //
function getChemicalStyle(name) {
 //Variable Setup
 var styled="";
 var styleActive = false;
 var specialScript = false;

 for (var i in name){
  var e = name[i];
  if (styleActive) {
   if (e === "_"){
    if (specialScript) {
     styled += "</div>" //End the div.
     specialScript = false;
    }
    styleActive = false;
   } else if (specialScript) {
      styled += e; 
   } else {
    switch(e){
     case "S":
      styled += "<div class=\"superScript\">";
      specialScript = true;
      break;
     case "s":
      styled += "<div class=\"subScript\">";
      specialScript = true;
      break;
     case "H":
      styled += "<div class=\"highlightedStructure\">-H</div>";
      break;
     case "T": //Triple Bar
      styled += "&equiv;";
      break;

     default:
      alert("Unknown styling specified: " + e);
      styled += e;
      break;
    }
   }
  } else {
  //Add the element if it is not signifying an element to be styled.
   if (e === "_"){
    styleActive = true;
   } else {
    styled += e;
   }
  }
 }
 return styled;
}

function getQuestion(type, key, subJSON){
 var q = "";
 if (type=="pka") {
  q += "<div class=\"cardQuestion\"> What is the pKa of " + subJSON["name"] + "?</div>";
  if (subJSON["img"]!=""){
   q += "<img src=\""+subJSON["img"]+"\" class=\"cardImage\"></img>";
  } else {
   q += "<div class=\"cardImage\">"+getChemicalStyle(key)+"</div>";
  }
 } else if (type=="mechanisms"){
  q = "<div class=\"cardQuestion\">What is the name for the following mechanism?</div>";
  q += "<img class=\"cardImage\" src=\""+subJSON["img"]+"\"></img>"
 } else {
  q = "Unknown category!";
 } 
 return q;
}

function chooseRandomAnswerKey(tree){
  return Object.keys(tree)[Math.floor(Math.random() * Object.keys(tree).length)]; 
}

function getOtherAnswerKeys(tree, correctKey, numberAnswers){
 //Collect the true answer from the tree.
 keyArray = Array(correctKey);
 var dataArray = Object.keys(tree);
 var dataCount = dataArray.length;

 //Collect random keys from the tree.
 var i=0;
 while (i < numberAnswers){
  var randomKey = dataArray[Math.floor(Math.random() * dataCount)]; 
  //Make sure no answers repeat.
  var answerArray = getAnswersfromKeys(tree, keyArray);
  if (answerArray.indexOf(tree[randomKey]["answer"])<0){
   keyArray.push(randomKey);
   i += 1;
  }
 }
 return keyArray;
}

function getAnswersfromKeys(tree, keyArray){
 return $.map(keyArray, function(n){return tree[n]["answer"]});
}

function getRandomArray(array){
 // Uses the super-nifty Fisher-Yates shuffle algorithm. 
 // More: (http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
 for (var i = array.length-1; i > 0; i--){
  var j = Math.floor(Math.random() * (i + 1)); //Get a random index of the array.
  var temp = array[i]; //Temporarily store the current element.
  array[i] = array[j]; //Now swap the Ith and Jth elements.
  array[j] = temp;
 }
 return array;
}

function getObjectFromString(str){
 if (str=="pka"){ 
  return pKaTree 
 } else if (str=="mechanisms"){ 
  return mechTree
 } else {
  alert("Illegal string option passed!");
 }
}

function makeNewCard(currentType){
 //Variable Setup
 var tree = getObjectFromString(currentType);
 var answerKey = chooseRandomAnswerKey(tree);
 var answerArray = getAnswersfromKeys(tree, getOtherAnswerKeys(tree, answerKey, 3)); 
 var randomAnswerArray = getRandomArray(answerArray);
 //Set the currentJSON file to the new JSON entry.
 currentJSON = tree[answerKey];

 //Collect the question.
 content = getQuestion(currentType, answerKey, currentJSON);

 //Collect and organize the answers to the question.
 answers = "";
 var correctClass = "";
 for (var i in randomAnswerArray){
  if (randomAnswerArray[i]==tree[answerKey]["answer"]){
   correctClass = " correctClass";
  } else {
   correctClass = "";
  }
  answers += "<div class=\"buttonContainer\"><div class=\"answer activeAnswer"+correctClass+"\">"+randomAnswerArray[i]+"</div></div>";  
 }

 newCard = "<div class=\"container card\"><div class=\"content\">"+content+"</div><div class=\"buttonContainer\">"+answers+"</div></div>";
 return newCard;
}

//Update the stats container.
function updateStats(){
  $(".correctStat").html(correctStat);
  $(".incorrectStat").html(incorrectStat);
  var percent = Math.round(100.0*correctStat/(incorrectStat+correctStat));
  $(".percentStat").html(percent);
}

function setNewCard(){
 $(".cardContainer").prepend(makeNewCard(currentType));
}

function getPhraseFor(message){
 if (message=="good"){
  var optionsArray = ["Good!", "Right-o!", "Nice!", "Oh yeah!", "Yup!", "Yes!"];
 } else {
  var optionsArray = ["Nope!", "Try again!", "Not that one!", "Oops!"];
 }
 return optionsArray[Math.floor(Math.random() * optionsArray.length)]; 
}

function showRibbon(message, correct){
 $(".ribbon").remove();
 if (correct) {
  var style = "correctAnswer";
 } else {
  var style = "incorrectAnswer";
 }

 $("body").append("<div class=\"ribbon " + style +"\">"+message+"</div>");
 $(".ribbon").delay(1000).fadeOut();
}

// // // // // // // // //
// //   Interaction  // //
// // // // // // // // //
$(".startButton").click(function() {
 $(".cardContainer").prepend(makeNewCard(currentType));
 $(this).closest(".card").remove();
});

$(document).on("click",".activeAnswer", function() {
 var answer = $(this).html();

 if (answer === currentJSON["answer"]){
  $(this).addClass("correctAnswer");
  $(".activeAnswer").removeClass("activeAnswer");
  setNewCard();
  showRibbon(getPhraseFor("good"), true);
  correctStat++;
 } else {
  $(this).addClass("incorrectAnswer");
  $(this).removeClass("activeAnswer");
  showRibbon(getPhraseFor("bad"), false);
  incorrectStat++;
 }

 updateStats();

});

$(".category").click(function() {
 currentType = $(this).html().trim().toLowerCase();

 //Clear the stats.
 correctStat=0;
 incorrectStat=0;
 updateStats();

 //Clear the card container.
 $(".cardContainer").empty();
 setNewCard();
});

//Expand images if needed.
$(document).on("click","img", function() {
 if (!$(".mask").length){
  var popupWindow = "<div class=\"mask\"><div class=\"popupContainer\"><img src=\"";
  popupWindow += $(this).attr("src") + "\" class=\"popupContents\"></img></div></div>";
  $("body").append(popupWindow);  
 }
});

$(document).on("click",".mask", function() {
 $(".mask").remove();
});

////////////////////////////////////
});
