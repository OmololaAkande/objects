// Question 1
// Using constructor method,create an InstagramPost() constructor function that takes the properties below as arguments.
// * Handler of author,
// * Content,
// * Image link posted by the author of the post,
// * Number of Views,
// * Number of likes,

function InstagramPost(handle, content, imageLink, views, likes) {
  this.handle = handle;
  this.content = content;
  this.handle = handle;
  this.imageLink = imageLink;
  this.views = views;
  this.likes = likes;
}

// Question 2
// 2 InstagramPost object from the constructor fuction created above :

const Instagram = new InstagramPost('pulsenigeria247', '2023 election update' , 'https://www.instagram.com/p/CpIowoDNtfV/?utm_source=ig_web_copy_link', 100000, 46233);
console.log (Instagram);

const Instagram2 = new InstagramPost('dairyofanaijagirl','Happening live at Lagos Collation Center', 'https://www.instagram.com/p/CpI2K46LmPX/?utm_source=ig_web_copy_link',1000, 694);
console.log (Instagram2);

// Question 3a:
// Using the factory method , implement a createPerson() function that takes name, age, and location as arguments. Afterwards, create an object representing Musa from the factory function.

function createPerson(name, age, location){
  return{
    name : name,
    age : age,
    location : location,
  }
}

const Musa = createPerson('Musa',19,'lagos-state');
console.log(Musa);

// Question 3b:
// Also , implement a factory functiom createJambScore() that takes eng , govt , lit, crk,as arguments. Then create an object representing Musa's Jamb scores. Add the object as a property to musa object you created above in (a) above.

function createJambScore(eng,govt,lit,crk){
  return{
    eng:eng,
    govt:govt,
    lit:lit,
    crk:crk
  }
}

const musaJambScore = createJambScore( 70,85,82,94);
console.log(musaJambScore);

Musa.createJambScore=musaJambScore;
console.log(Musa);

// Question 4:
// What are the different ways you can clone an object? Give examples for each of them.
// Object.assign
// spread method

// Question 5:

// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
// 	’Omoyele Sowore is the presidential candidate of AAC’

const presidentialCandidates = {
  AAC:"Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC : "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar"
  
}

for(const value in presidentialCandidates ){
  console.log(presidentialCandidates[value] + " " + 'is the presidential candidate of ' + value);
}





