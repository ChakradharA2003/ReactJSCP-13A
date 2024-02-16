import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const Options = props => {
  const {details} = props
  const {id, capitalDisplayText, country} = details
  if (id === 'NEW_DELHI') {
    return (
      <option id={id} value={id} selected>
        {capitalDisplayText}
      </option>
    )
  }
  return (
    <option id={id} value={id}>
      {capitalDisplayText}
    </option>
  )
}

// Write your code here
class Capitals extends Component {
  state = {
    countryText: countryAndCapitalsList[0].country,
  }

  onclickCapital = event => {
    const capitalText = event.target.value
    console.log(capitalText)
    const filterCountryAndCapitals = countryAndCapitalsList.filter(
      capital => capital.id === capitalText,
    )
    console.log(filterCountryAndCapitals)
    this.setState({
      countryText: filterCountryAndCapitals[0].country,
    })
  }

  render() {
    const {countryText} = this.state
    return (
      <div className="bg-container">
        <div className="white-card">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="input-container">
            <select className="input-style" onClick={this.onclickCapital}>
              {countryAndCapitalsList.map(each => (
                <Options key={each.id} details={each} />
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="country-text">{countryText}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
