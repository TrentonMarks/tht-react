/**
 * @file
 * A JavaScript file for the Snippet module.
 */

(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.snippet = {
    attach: function (context, settings) {

      $(context).find('body').once('snippetBehavior').each(() => { // only attach this behavior once

        /* Snippets Data (an object of snippets attached to drupalSettings in .module hook_form_alter) */
        const snippets = drupalSettings.snippet.snippets;

        /* Create Element: 'Copy' button */
        const $snippetContainer = $('#edit-snippet .form-item'); // get element containing the select input
        const $snippetBtn = $('<button type="button" id="snippet-button">Copy</button>'); // create the 'copy' button
        $snippetContainer.append($snippetBtn); // append the button to the container

        /* Create Element: Alert message container */
        const $snippetCopiedAlertContainer = $('<div></div>'); // create the container for the alert message when clicking 'copy' button
        $snippetContainer.append($snippetCopiedAlertContainer); // append the button to the container

        /* On Click Event: 'Copy' button */
        $snippetBtn.click(() => {
          /* Copy snippet to clipboard */
          let selectedOption = $('select[name="snippet_enabled"]').children("option:selected").val(); // the currently selected snippet
          let snippet; // the string of html to be copied
          if (selectedOption == '1') { // if the first snippet is selected
            snippet = snippets[Object.keys(snippets)[0]]; // set string value
          } else if (selectedOption == '2') { // if the second snippet is selected
            snippet = snippets[Object.keys(snippets)[1]]; // set string value
          } else if (selectedOption == '3') { // if the third snippet is selected
            snippet = snippets[Object.keys(snippets)[2]]; // set string value
          } else if (selectedOption == '4') { // if the forth snippet is selected
            snippet = snippets[Object.keys(snippets)[3]]; // set string value
          } else if (selectedOption == '5') { // if the fifth snippet is selected
            snippet = snippets[Object.keys(snippets)[4]]; // set string value
          } else if (selectedOption == '6') { // if the sixth snippet is selected
            snippet = snippets[Object.keys(snippets)[5]]; // set string value
          } else if (selectedOption == '7') { // if the seventh snippet is selected
            snippet = snippets[Object.keys(snippets)[6]]; // set string value
          } else if (selectedOption == '8') { // if the eighth snippet is selected
            snippet = snippets[Object.keys(snippets)[7]]; // set string value
          } else if (selectedOption == '9') { // if the ninth snippet is selected
            snippet = snippets[Object.keys(snippets)[8]]; // set string value
          }
          copySnippetToClipboard(snippet); // copy snippet to clipboard
          showCopiedSnippetAlert(); // alert that snippet was copied to clipboard
          removeCopiedSnippetAlert(); // remove alert
        });

        /* Function: Copy string to clipboard */
        function copySnippetToClipboard(str) {
          let textarea = document.createElement('textarea'); // create a temporary textarea
          textarea.value = str; // set its value (string to be copied)
          textarea.setAttribute('readonly', ''); // set non-editable to avoid focus and move outside of view
          textarea.style = { position: 'absolute', left: '-9999px' }; // move out of view
          document.body.appendChild(textarea); // append it
          textarea.select(); // select its text
          document.execCommand('copy'); // copy text to clipboard
          document.body.removeChild(textarea); // remove the temporary textarea
        }

        /* Function: Show alert  */
        function showCopiedSnippetAlert() {
          let $alert = $('<p id="snippet-copied-alert">Copied snippet!</p>'); // create alert message
          $snippetCopiedAlertContainer.append($alert); // append the alert
        }

        /* Function: Remove alert */
        function removeCopiedSnippetAlert() {
          setTimeout(function () { // wait 1.75 seconds
            $snippetCopiedAlertContainer.empty(); // remove the alert
          }, 1750);
        }

      });

    }
  }
})(jQuery, Drupal, drupalSettings);
