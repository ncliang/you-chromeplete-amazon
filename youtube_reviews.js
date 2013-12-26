var DEFAULT_MAX_SEARCH_TERMS = 10;
var YOUTUBE_BASE_URL = "http://www.youtube.com/results?search_query=";

chrome.storage.sync.get('maxSearchTerms', on_get_options_complete);

function on_get_options_complete(optionsFromStorage) {
  var maxSearchTerms = DEFAULT_MAX_SEARCH_TERMS; 
  if ('maxSearchTerms' in optionsFromStorage) {
    maxSearchTerms = optionsFromStorage['maxSearchTerms'];
  }
  on_max_search_terms_fetch_complete(maxSearchTerms);
}

function on_max_search_terms_fetch_complete(maxSearchTerms) {
  var itemTitle = document.getElementById("title").textContent.trim()
      .replace(/\W/g, " ");
  var itemTitleWords = itemTitle.split(/\s+/).slice(0, maxSearchTerms);
  
  var youtubeUrl = YOUTUBE_BASE_URL +
      encodeURIComponent(itemTitleWords.join(" ") + " review");

  var altImagesDiv = document.getElementById("altImages");

  var linkNode = document.createElement("a");
  linkNode.href = youtubeUrl;
  linkNode.target = "_blank";

  var iconImg = document.createElement("img");
  iconImg.src = chrome.extension.getURL("youtube_icon.png");
  iconImg.width = 40;
  iconImg.height = 40;
  iconImg.alt = "Search for reviews on YouTube";

  linkNode.appendChild(iconImg);
  altImagesDiv.appendChild(linkNode);
}
