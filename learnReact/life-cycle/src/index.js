import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor(props) {
    super(props)
    console.log(this.props)
    console.log(props,"props-APP")
    this.state = {
      number: 0,
      name:"react"
    }
    console.log(this.state,"state-APP")
  }

  static defaultProps = {
    a:2
  }
  componentWillMount() {
    console.log('componentWillMount-----App')  
  }
  componentDidMount() {
    this.setState({
      number:this.state.number+10
    })
    console.log('componentDidMount---App')  
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps----App')
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate---App--true')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate----App')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate---App')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount---App')
  }

  handleClickAddNumber = () => {
    this.setState({
      number:this.state.number+1
    })
  }

  handleClickReduceNumber = () => {
    this.setState({
      number:this.state.number-1
    })
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }

  render() {
    console.log("render---APP")
    return (
      <>
        <h4>{this.props.number}</h4>
        <button onClick={this.handleClickAddNumber}>+</button>  
        <span>{this.state.number}</span>
        <Content name={this.state.name} />      
        <button onClick={this.handleClickReduceNumber}>-</button>         
      </>      
    )
  }
}

class Content extends React.Component {
 
  constructor(props) {
    console.log("constructor--Content-children")
    super(props)
    this.state = {
      a:1
    }
    console.log(this.state,"state-Child")
  }

  handleClickAddNumberChildren = () => {
    this.setState({
      a:this.state.a+1
    })
  }

  handleClickReduceNumberChildren = () => {
    this.setState({
      a:this.state.a-1
    })
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }

  componentWillMount() {
    console.log('componentWillMount-----Content')  
  }
  componentDidMount() {
    console.log('componentDidMount---Content')  
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps----Content')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log('shouldComponentUpdate---Content---true')
    // if (nextProps.name === this.props.name) {
    //   return false
    // }
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps,nextState)
    console.log('componentWillUpdate----Content')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps,prevState)
    console.log('componentDidUpdate---Content')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount---Content')
  }
  render() {
    console.log("render---Content")
    return (
      <>
        <span>{this.props.name}</span>
        <button onClick={this.handleClickAddNumberChildren}>childern+</button>  
        <span>{this.state.a} </span>
        <button onClick={this.handleClickReduceNumberChildren}>childern-</button>         
      </>  
    )
  }
}

ReactDOM.render(
  <App number="900"/>,
  document.querySelector('#root'),
  console.log("render--first"),
)