function titleCased() {
  const tutorials = [
    "what does the this keyword mean?",
    "what is the constructor oo pattern?",
    "implementing blockchain web api",
    "the test driven development workflow",
    "what is NaN and how can we check for it",
    "what is the difference between stopPropagation and preventDefault?",
    "immutable state and pure functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is jsonp?"
  ];

  return tutorials.map(function(tutorial) {
    let words = tutorial.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  });
}
