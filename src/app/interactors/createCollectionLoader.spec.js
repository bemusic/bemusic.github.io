import assert from 'assert'
import waitUntil from 'bemuse/wait-until'

import { createCollectionLoader } from './createCollectionLoader'

function setup({ fetch }) {
  const onBeginLoading = sinon.spy()
  const onErrorLoading = sinon.spy()
  const onLoad = sinon.spy()
  const collectionLoader = createCollectionLoader({
    onBeginLoading,
    onErrorLoading,
    onLoad,
    fetch,
  })
  return { collectionLoader, onBeginLoading, onErrorLoading, onLoad }
}

describe('createCollectionLoader', () => {
  describe('load(url)', function () {
    it('should load the collection and call `onLoad`', async () => {
      const { collectionLoader, onBeginLoading, onLoad } = setup({
        fetch: (url) => {
          assert(
            url ===
              '/base/src/app/test-fixtures/example-music-server/index.json'
          )
          return Promise.resolve({
            json: () =>
              require('../test-fixtures/example-music-server/index.json'),
          })
        },
      })
      collectionLoader.load('/base/src/app/test-fixtures/example-music-server')
      await waitUntil(() => assert(onLoad.called))
      assert(onBeginLoading.called)
    })

    it('should load the collection and call `onErrorLoading` when there is an error', async () => {
      const { collectionLoader, onErrorLoading } = setup({
        fetch: (url) => Promise.reject(new Error('???')),
      })
      collectionLoader.load('/base/src/app/test-fixtures/example-music-server')
      await waitUntil(() => assert(onErrorLoading.called))
    })
  })
})
