import './BenchmarkPanel.scss'
import React from 'react'

export default class BenchmarkPanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      text: 'wow'
    }
  }

  render () {
    return (
      <div
        className='BenchmarkPanel'
        onClick={this.handleInteraction}
        onTouchStart={this.handleInteraction}
      >
        {this.state.show ? (
          <article>
            <b>Benchmark Stats</b>
            <br />
            {this.renderTable()}
          </article>
        ) : (
          'Show Benchmark Stats'
        )}
      </div>
    )
  }

  componentDidMount () {
    setInterval(() => this.forceUpdate(), 1000)
  }

  renderTable = () => {
    let stats = this.props.bench.stats
    return (
      <table>
        <tbody>
          {Object.keys(stats).map(key => {
            let stat = stats[key]
            return (
              <tr>
                <td>
                  <strong>{key}</strong>
                </td>
                <td align='right'>{'' + stat}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  handleInteraction = e => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ show: !this.state.show })
  }
}
