import './SceneToolbar.scss'

import React from 'react'

export const SceneToolbar = ({ children }: { children?: ReactNode }) => (
  <div className='SceneToolbar'>{children}</div>
)

export const SceneToolbarSpacer = () => <div className='SceneToolbarのspacer' />

export default SceneToolbar
