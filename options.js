var DEFAULT_MAX_SEARCH_TERMS = 10;

function save_options() {
  chrome.storage.sync.set({'maxSearchTerms': document.getElementById('maxSearchTerms').value},
      function() {});
}

function get_options() {
  chrome.storage.sync.get('maxSearchTerms', restore_options);
}

function restore_options(optionsFromStorage) {
  if ('maxSearchTerms' in optionsFromStorage) {
    document.getElementById('maxSearchTerms').value = optionsFromStorage['maxSearchTerms'];
  } else {
    document.getElementById('maxSearchTerms').value = DEFAULT_MAX_SEARCH_TERMS;
  }
}

document.addEventListener('DOMContentLoaded', get_options);
document.querySelector('#save').addEventListener('click', save_options);
