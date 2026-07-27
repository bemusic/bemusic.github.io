import './ErrorDialog.scss'
import escape from 'lodash/escape'

function template({ message, url, line, col, e }) {
  return (
    `<h1>An error has occured!</h1>` +
    `<p>${escape(message)}</p>` +
    (url
      ? `<p class="ErrorDialogのwhere">${escape(
          url + ':' + line + ':' + col
        )}</p>`
      : '') +
    `<pre wrap="wrap">${escape(
      (e && e.stack) || 'No stack trace available'
    )}</pre>` +
    `<div class="ErrorDialogのclose">&times;</div>`
  )
}

function show(message, e, url, line, col) {
  const div = document.createElement('div')
  div.className = 'ErrorDialog'
  div.innerHTML = template({ message, url, line, col, e })
  document.body.appendChild(div)
  const close = div.querySelector('.ErrorDialogのclose')
  if (close) {
    close.addEventListener(
      'click',
      function () {
        div.parentNode.removeChild(div)
      },
      false
    )
  }
}

export { show }
