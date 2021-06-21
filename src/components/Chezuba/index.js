import {Component} from 'react'

import ChezubaList from '../ChezubaList'
import './index.css'

class Chezuba extends Component {
  state = {
    givenList: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({givenList: data})
  }

  render() {
    const {givenList} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="headings">Categories</h1>
          <div>
            <ChezubaList listItems={givenList} />
          </div>
        </div>
      </div>
    )
  }
}
export default Chezuba
