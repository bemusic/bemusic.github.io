import FloatingMobileMenu, {
  FloatingMobileMenuSeparator,
} from 'bemuse/ui/FloatingMobileMenu'
import SceneToolbar, { SceneToolbarSpacer } from 'bemuse/ui/SceneToolbar'

import $ from 'jquery'
import FirstTimeTip from './FirstTimeTip'
import FloatingMobileButton from 'bemuse/ui/FloatingMobileButton'
import { Icon } from 'bemuse/fa'
import PropTypes from 'prop-types'
import React from 'react'
import TipContainer from 'bemuse/ui/TipContainer'
import Toggle from 'react-toggled'
import { WindowSize } from 'react-fns'

function Toolbar({ items }) {
  return (
    <WindowSize
      render={({ width, height }) =>
        width < 720 ? (
          <MobileToolbar items={items} />
        ) : (
          <DesktopToolbar items={items} />
        )
      }
    />
  )
}
Toolbar.propTypes = {
  items: PropTypes.array,
}

const defaultOptions = {
  href: 'javascript://bemuse.ninja',
  onClick: openLink,
}

Toolbar.item = (text, options) => {
  return {
    type: 'item',
    text,
    ...defaultOptions,
    ...options,
  }
}
Toolbar.spacer = () => {
  return { type: 'spacer' }
}

class DesktopToolbar extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    return (
      <SceneToolbar>
        {this.props.items.map((element, index) => {
          if (element.type === 'item') {
            return (
              <React.Fragment key={index}>
                {this.renderItem(element)}
              </React.Fragment>
            )
          } else {
            return (
              <React.Fragment key={index}>{this.renderSpacer()}</React.Fragment>
            )
          }
        })}
      </SceneToolbar>
    )
  }

  renderItem(item) {
    let content = item.text
    if (item.tip) {
      if (item.tipFeatureKey) {
        content = (
          <FirstTimeTip tip={item.tip} featureKey={item.tipFeatureKey}>
            {content}
          </FirstTimeTip>
        )
      } else {
        content = (
          <TipContainer tip={item.tip} tipVisible={!!item.tipVisible}>
            {content}
          </TipContainer>
        )
      }
    }
    return (
      <a onClick={item.onClick} href={item.href}>
        {content}
      </a>
    )
  }

  renderSpacer() {
    return <SceneToolbarSpacer />
  }
}

class MobileToolbar extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    return (
      <Toggle>
        {({ on, getTogglerProps }) => (
          <>
            <FloatingMobileMenu visible={on}>
              {this.props.items.map((element, index) => {
                if (element.type === 'item') {
                  return (
                    <React.Fragment key={index}>
                      {this.renderItem(element)}
                    </React.Fragment>
                  )
                } else {
                  return (
                    <React.Fragment key={index}>
                      {this.renderSeparator()}
                    </React.Fragment>
                  )
                }
              })}
            </FloatingMobileMenu>
            <FloatingMobileButton buttonProps={getTogglerProps()}>
              <Icon name='bars' />
            </FloatingMobileButton>
          </>
        )}
      </Toggle>
    )
  }

  renderItem(item) {
    return (
      <a onClick={item.onClick} href={item.href}>
        {item.text}
      </a>
    )
  }

  renderSeparator() {
    return <FloatingMobileMenuSeparator />
  }
}

function openLink(e) {
  e.preventDefault()
  window.open($(e.target).closest('a').get(0).href, '_blank')
}

export default Toolbar
