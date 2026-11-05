"use strict";

// CATEGORY FILTER ISSUE: complete this function, then enable its dropdown in HTML.
function filterResources(category) {
  // TODO: read each .resource-card's data-category and set its hidden property.
  // The value "all" should show every card.
}
document.getElementById("category-filter").addEventListener("change", (event) => {
  filterResources(event.target.value);
});

// RANDOM TIP ISSUE: use this array; do not depend on changes to the HTML tips list.
const studyTips = [
  "Break a large assignment into smaller tasks.",
  "Explain a concept aloud without looking at your notes.",
  "Test yourself with a practice question."
];
function showRandomTip() {
  // TODO: pick an array index and update #random-tip using textContent.
}
document.getElementById("tip-button").addEventListener("click", showRandomTip);
