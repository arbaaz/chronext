chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.command === 'exec') {
    exec();
  }
});

function exec(){
  const issueTitle = document.querySelector('.js-issue-title').textContent.trim();
  const [z, org, repo, type, issueNumber] = window.location.pathname.split('/');
  const val = `#${issueNumber}: ${repo} - ${issueTitle}`;
  copyToClipboard(val);
  alert(`${val} \n is copied to the clipboard`);
}

function copyToClipboard( text ){
  var copyDiv = document.createElement('div');
  copyDiv.contentEditable = true;
  document.body.appendChild(copyDiv);
  copyDiv.innerHTML = text;
  copyDiv.unselectable = "off";
  copyDiv.focus();
  document.execCommand('SelectAll');
  document.execCommand("Copy", false, null);
  document.body.removeChild(copyDiv);
}
