// ---------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Grammar Checker Project
// ---------------------------------------------------------------------------

// Initiates story variable

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// Splits story into separate words

let storyWords = story.split(' ');

// Initiates unnecessaryWord, misspelledWord and badWord variable

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Counts words and logs result to console

let count = 0;

storyWords.forEach(element => {
  return count++
}, count);

console.log(count);

// Removes all instances of unnecessaryWord

storyWords = storyWords.filter(word => {
  if (word != unnecessaryWord) {
    return word;
  }
});

// Replaces all instances of misspelledWord with 'beautiful'

storyWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return 'beautiful';
  }
  else {
    return word;
  }
});

// Finds index of badWord

const badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
});

console.log(badWordIndex);

// Replaces badWord with 'really'

storyWords[78] = 'really';

// Checks if every word in story is 10 characters or less

const lengthCheck = storyWords.every(word => {
  return word.length < 11;
});

console.log(lengthCheck);

// Finds and replaces word longer than 10 characters

const longWord = storyWords.findIndex(word => {
  if (word.length > 10) {
    return word;
  }
});

console.log(longWord);

storyWords[111] = 'stunning';

// Logs edited story to console

console.log(storyWords.join(' '));