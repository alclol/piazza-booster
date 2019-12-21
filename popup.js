// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
    switch (e.target.id) {
        case 'unresolved':
            chrome.tabs.executeScript(null,
                    {code:'followups = document.getElementsByClassName("clarifying_discussion clearFix");' +
                      'for (i = 0; i < followups.length; i++) {' +
                      'if (followups[i].className.valueOf() != "clarifying_discussion clearFix unresolved".valueOf()) {' +
                      'document.getElementsByClassName("clarifying_discussion clearFix")[i].style.display = "none";' +
                      '}' + 
                      '}'
                  });
            break;
        case 'no-reply':
            chrome.tabs.executeScript(null,
            {code: 'all_replies = document.getElementsByClassName("all_replies");' +
                'for (i = 0; i < all_replies.length; i++) {' +
                'all_replies[i].style.display = "none";' +
                '}'
            });
            break;
        case  'reset':
            chrome.tabs.executeScript({
                code: "resetAll();"
            });
            break;
        case 'see-only':
            target = document.getElementById("target").value;
            chrome.tabs.executeScript({
                code: "filterAll('" + target + "');"
            });
            break;
        }
        
        window.close();
        
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('.option');
  chrome.tabs.executeScript({
    file: 'tmp.js',
  });
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
