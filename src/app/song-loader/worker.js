import 'bemuse/bootstrap'

import Promise from 'bluebird'
import indexer from 'bemuse-indexer'

/* global FileReaderSync */
if (
  typeof FileReader === 'undefined' &&
  typeof FileReaderSync !== 'undefined'
) {
  // Need to shim FileReader so that bemuse-chardet works.
  global.FileReader = function FileReaderShim () {
    let reader = new FileReaderSync()
    return {
      readAsText (blob, enc) {
        try {
          this.result = reader.readAsText(blob, enc)
          this.onload()
        } catch (e) {
          this.onerror(e)
        }
      }
    }
  }
}

addEventListener('message', function ({ data }) {
  let files = data.files.map(convertBuffer)
  postMessage({ type: 'started' })
  function onProgress (current, total, file) {
    postMessage({ type: 'progress', current, total, file })
  }
  Promise.try(function () {
    return indexer.getSongInfo(files, { onProgress })
  })
    .then(function (song) {
      song.warnings.forEach(function (warning) {
        if (global.console && console.warn) {
          console.warn(warning)
        }
      })
      postMessage({ type: 'result', song: song })
    })
    .catch(function () {
      console.error('CAUGHT')
    })
    .done()
})

function convertBuffer (file) {
  file.data = Buffer.from(new Uint8Array(file.data))
  return file
}
