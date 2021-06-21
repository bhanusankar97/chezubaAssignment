import {Component} from 'react'
import './index.css'

class Fifth extends Component {
  getId = () => {
    const {category, selectId} = this.props
    const {id} = category
    selectId(id)
  }

  render() {
    const {category} = this.props
    const {title, body} = category
    return (
      <li className="thirds-list-container">
        <div>
          <h1 className="heading">{title}</h1>
          <p className="paragraph">{body}</p>
        </div>
        <button type="button" className="button" onClick={this.getId}>
          <img
            src="https://img.icons8.com/metro/26/000000/trash.png"
            alt="delete icon"
            className="delete-icon"
          />
        </button>
      </li>
    )
  }
}
export default Fifth
