/*
    Author: Aman Singh 
    Follow @aman9113 github @its__aman0008 instagram
    Note:
    This script is free to use, do not pay anyone anything.
    To modify or redistribute, kindly follow the license agreement strictly.
*/

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.msg == "Sending Data") {
    let ansKey = message.keys;
    console.log(ansKey);
    //time out for 2 secoond
    setTimeout(function () {
      document
        .querySelector(
          `#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.adaptive-question-box.bg-white.p-1.ng-star-inserted > div:nth-child(2) > mcq-question > div > div.question-answers.mb-0 > div:nth-child(${
            ansKey + 1
          }) > div > label > span`
        )
        .click();
      document
        .querySelector(
          "#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.d-block.d-lg-none.fixed-bottom.ng-star-inserted > div > a"
        )
        .click();
    }, 2000);

    setTimeout(() => {
      document
        .querySelector(
          "#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.save-next-btn.d-block.d-lg-none.fixed-bottom.ng-star-inserted > a"
        )
        .click();
    }, 3000);
  }

  if (message.msg == "start") {
    chrome.runtime.sendMessage({ msg: "startPanel" });
  };
});

