import { parseServerTime } from './now'

import { expect } from 'chai'

describe('parseServerTime', function () {
  it('parses a Cloudflare /cdn-cgi/trace body (sub-second ts)', function () {
    const body = 'fl=632f176\nh=bemuse.ninja\nts=1785001804.753\ncolo=BKK\n'
    expect(parseServerTime(body)).to.equal(1785001804753)
  })

  it('parses a whole-second ts', function () {
    expect(parseServerTime('ts=1785001774')).to.equal(1785001774000)
  })

  it('parses a bare epoch-millisecond number', function () {
    expect(parseServerTime('1785001804753')).to.equal(1785001804753)
  })

  it('returns null for an unrecognized body', function () {
    expect(parseServerTime('not a timestamp')).to.equal(null)
    expect(parseServerTime('')).to.equal(null)
  })
})
