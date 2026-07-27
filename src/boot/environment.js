import 'jquery'
import 'bemuse/bootstrap'
import FastClick from 'fastclick'
import React from 'react'

window.React = React

// fastclick's CJS `module.exports` IS the `attach` function, with the class
// exposed as `.FastClick`. Resolve `attach` across the possible interop shapes
// so this works under both webpack and Vite.
const attach =
  (FastClick && FastClick.FastClick && FastClick.FastClick.attach) ||
  FastClick.attach ||
  FastClick
attach(document.body)
