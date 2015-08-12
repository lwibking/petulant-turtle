/**************************************************************/
/* Wes Anderson Movie Maker */
/**************************************************************/
function protagonist()
{
    var protagonist = new Array;
        protagonist[0]="Greeting card writer/designer who moonlights as a private investigator"; 
        protagonist[1]="Tenderhearted dog-catcher who secretly keeps all the dogs she catches and is training them to run in the Iditarod (the dogs aren't huskies or malamutes and they all wear various sweaters, parkas, and snow-boots)";
        protagonist[2]="Twentysomething encyclopedia salesman who's an old soul at heart and speaks fluent Latin";
        protagonist[3]="Independently wealthy entomologist, tracking down a mythical moth said to spin sugary silk that is the key to immortality";
        protagonist[4]="Wordsmith who makes up the names for the colors of new crayons and shades of paint (he's especially proud of \"Mint Julep Memories\", \"Sunkissed Peach\", \"Foggy with a Chance of Intrigue\", and \"Dante's Inferno\"). Plus special bonus:  The first scene of the film will be shot in black-and-white, with colors appearing one-by-one as the protagonist comes up with new color names and the plot unfolds";
        protagonist[5]="Animatronic animal repairman who's employed by Chuck-E-Cheese-style family restaurants (this will be a road trip movie as our hero travels from town to town and falls in love with a down-on-her-luck waitress who trained as a chef in Europe)"; 
        protagonist[6]="Fun-loving heiress to the \"YoLo brand fruit-on-the-bottom yogurt fortune\"";
        protagonist[7]="Reclusive lexicographer/illegitimate descendent of Noah Webster/linguistics PhD student seeking to scientifically determine what is the most melodious word ever uttered in any language, as part of a pact he once made with his (now dead) true love. Spoiler alert: at the end of the movie he determines that that word = his dead true love's name";
    
    rdmProtagonist = Math.floor(Math.random()*protagonist.length);
    document.getElementById("txtbox") .value=protagonist[rdmProtagonist];

    /*document.getElementById("buttonID").setAttribute("style","visibility:hidden");*/

}

function setting()
{
    var setting = new Array;
        setting[0]="Converted sawmill, which the hero's sidekick inherited from his wealthy uncle, timber millionaire Rutherford Charles. The saws have been removed, so the characters ride the chutes to get around from room to room (allowing us to show the audience a whimsical cross-section of the building)";
        setting[1]="Cramped flat over a radio repair shop that's going out of business";
        setting[2]="Elaborate treehouse that was designed by \"cult-favorite, otherwise forgotten 1920s avant-garde filmmaker Emile Zarbogast\" for his unfinished masterpiece, \"THE FORBIDDEN FOREST\"";
        setting[3]="A giant blue whale that was once part of \"Sir Funs-a-Lot's Mini-Golf Course\", which everyone enters and exits through the whale's smiling mouth";

    rdmSetting = Math.floor(Math.random()*setting.length);
    document.getElementById("txtbox2") .value=setting[rdmSetting];
    
    /*document.getElementById("buttonID2").setAttribute("style","visibility:hidden");*/
}

function nemesis()
{
    var nemesis = new Array;
        nemesis[0]="Tall, slender man \"from the Continent\" who wears a monocle and waxy, curled moustaches and may or may not be a disgraced Andorran nobleman";
        nemesis[1]="Former world's #1 seeded badminton player who's been forced into early retirement after taking a birdy to the eye (and who now wears a black eyepatch with decorative birdy feathers sticking out of it because the birdy is still lodged in his eye socket, grossly enough)";
        nemesis[2]="Deactivated KGB agent who was stranded on a deserted island when the Soviet Union fell and who never realized that the Cold War ended";
        nemesis[3]="Wealthy gadabout Phinneas Carlyle";
        nemesis[4]="Art collector-cum-money launderer whose calling card is a one dollar bill folded up to look like a crisply folded Oxford shirt with a red mustache painted on George Washington's face";

    rdmNemesis = Math.floor(Math.random()*nemesis.length);
    document.getElementById("txtbox3") .value=nemesis[rdmNemesis];
    
    /*document.getElementById("buttonID3").setAttribute("style","visibility:hidden");*/
    
}

function soundtrack()
{
    var soundtrack = new Array;
        soundtrack[0]="Piccolo concertoes written by a Scottish monk in the 18th century, which you discovered and became obsessed with in autumn 2012, while visiting the set of Werner Herzog's new movie set in the highlands (you will explain all this in detail in a feature for Vanity Fair)";
        soundtrack[1]="Morrissey lyrics sung a cappella by high-pitched schoolchildren";
        soundtrack[2]="No music whatsoever this time - what a twist!";
        soundtrack[3]="Old-timey gospel melodies sung by church choirs, but without the overtly Christian/religious lyrics";
        soundtrack[4]="Techno beats performed with banjos, hand-clapping, and timpanis";
        soundtrack[5]="Reggae tribute to Mozart";
        soundtrack[6]="Beatles covers sung backwards";
        soundtrack[7]="An operatic concept-album that sounds exactly like it was written by The Decemberists but was actually written by yourself (the libretto) and your college roommate who now has her own music studio in her backyard in Brooklyn (music). During the press tour for this film, the two of you will share a lot of amusing anecdotes about your college days and how you came up with this concept senior year and were so excited to revisit it now";
        soundtrack[8]="Ancient Japanese imperial court music (\"gagaku\")";        

    rdmSoundtrack = Math.floor(Math.random()*soundtrack.length);
    document.getElementById("txtbox4") .value=soundtrack[rdmSoundtrack];
    
    /*document.getElementById("buttonID4").setAttribute("style","visibility:hidden");*/ 
}

function majorMotif()
{
    var majorMotif = new Array;
        majorMotif[0]="Unrequited love";
        majorMotif[1]="Iconoclasm";
        majorMotif[2]="Family dysfunction";
        majorMotif[3]="Family dysfunction";
        majorMotif[4]="Family dysfunction";
        majorMotif[5]="Family dysfunction";
        majorMotif[6]="Family dysfunction";
        majorMotif[7]="Family dysfunction";
        majorMotif[8]="Family dysfunction";
        majorMotif[9]="Family dysfunction";
        majorMotif[10]="Family dysfunction";

    rdmMajorMotif = Math.floor(Math.random()*majorMotif.length);
    document.getElementById("txtbox5") .value=majorMotif[rdmMajorMotif];
    
    /*document.getElementById("buttonID5").setAttribute("style","visibility:hidden");*/
}

