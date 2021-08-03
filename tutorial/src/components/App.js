import './App.css';
import React from 'react';

class Codelab extends React.Component{
  render(){
      let text = 'Hi I am codelab';
      let style={
          backgroundColor : 'aqua'
      };
      return(
          <div style={style}>{text}</div>
      );
  }
}

class Props extends React.Component{
  render(){
      return(
          <div>
            <h1>Hello {this.props.name}</h1>
            <div>{this.props.children}</div>
          </div>
      );
  }
}

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      value : this.state.value+1
    });
  }

  render(){
    return(
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>Press Me</button>
      </div>
    );
  }
}

class ContactInfo extends React.Component{
  render(){
    return(
      <div>{this.props.contact.name} {this.props.contact.phone}</div>
    );
  }
}

class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contactData : [
        {name : 'Abet', phone : '010-0000-0001'},
        {name : 'Bbet', phone : '010-0000-0002'},
        {name : 'Cbet', phone : '010-0000-0003'},
        {name : 'Dbet', phone : '010-0000-0004'}
      ]
    }
  }
  render(){
    const mapToComponent = (data) => {
      return data.map((contact, i) => {
        return (<ContactInfo contact = {contact} key = {i}></ContactInfo>)
      })
    };

    return(
      <div>
        {mapToComponent(this.state.contactData)}
      </div>
    );
  }
}



function App() {
  return (
    <div>
      <Codelab/>
      <Props name="unknown">이 사이에 있는거</Props>
      <Counter/>
      <Contact/>
    </div>
  );
}

export default App;
