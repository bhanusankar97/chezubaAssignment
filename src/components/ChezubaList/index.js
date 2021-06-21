import {Component} from 'react'
import Thirds from '../Thirds'
import Fifth from '../Fifth'
import Magic from '../Magic'
import './index.css'

class ChezubaList extends Component {
  state = {
    thirdTab: true,
    fifthTab: false,
    magicTab: false,
    filteredData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({filteredData: data})
  }

  openThirdTab = () => {
    this.setState({fifthTab: false, thirdTab: true, magicTab: false})
  }

  openFifthTab = () => {
    this.setState({fifthTab: true, thirdTab: false, magicTab: false})
  }

  openMagicTab = () => {
    this.setState({fifthTab: false, thirdTab: false, magicTab: true})
  }

  updatedId = id => {
    const {filteredData} = this.state
    const filterList = filteredData.filter(eachItem => eachItem.id !== id)
    this.setState({filteredData: filterList})
  }

  filterList = event => {
    const {filteredData} = this.state
    const searchInput = event.target.value
    const filteredList = filteredData.filter(eachItem =>
      eachItem.title.includes(searchInput),
    )
    this.setState({filteredData: filteredList})
  }

  render() {
    const {filteredData} = this.state
    const thirdsList = filteredData.filter(eachItem => eachItem.id % 3 === 0)
    const fifthList = filteredData.filter(eachItem => eachItem.id % 5 === 0)
    const magicList = filteredData.filter(
      eachItem => eachItem.id % 5 === 0 && eachItem.id % 3 === 0,
    )
    const {thirdTab, fifthTab, magicTab} = this.state
    const btnName1 = thirdTab ? 'color c' : ''
    const btnName2 = fifthTab ? 'color c' : ''
    const btnName3 = magicTab ? 'color c' : ''
    return (
      <div>
        <div className="search-bar-container">
          <input
            type="search"
            className="searchBar"
            onChange={this.filterList}
          />
        </div>
        <div>
          <hr className="hr-style-one" />
          <div className="tabs-container">
            <p className={`tab ${btnName1}`} onClick={this.openThirdTab}>
              Third
            </p>
            <p className={`tab ${btnName2}`} onClick={this.openFifthTab}>
              Fifth
            </p>
            <p className={`tab ${btnName3}`} onClick={this.openMagicTab}>
              Magic
            </p>
          </div>
          <hr className="hr-style-one" />
        </div>
        <div>
          <div>
            {thirdTab && (
              <ul className="list-container">
                {thirdsList.map(eachData => (
                  <Thirds
                    category={eachData}
                    key={eachData.id}
                    selectId={this.updatedId}
                  />
                ))}
              </ul>
            )}
          </div>
          <div>
            {fifthTab && (
              <ul className="list-container">
                {fifthList.map(eachData => (
                  <Fifth
                    category={eachData}
                    key={eachData.id}
                    selectId={this.updatedId}
                  />
                ))}
              </ul>
            )}
          </div>
          <div>
            {magicTab && (
              <ul className="list-container">
                {magicList.map(eachData => (
                  <Magic
                    category={eachData}
                    key={eachData.id}
                    selectId={this.updatedId}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ChezubaList
