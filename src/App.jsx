import React from 'react';

import Header from './components/Header';
import Saldo from './components/Saldo';
import Saque from './components/Saque';
import Options from './components/Options';
import Success from './components/Success';

const conta = {
  saldo: 1000,
  saque:'',
  show: false,
  success: false,
}

class App extends React.Component{

  state = {...conta}

  constructor(props) {
    super(props);
  }

  render(){

    const getValue = (e) => {
      const saque = e.target.value;
      this.setState({ saque: saque });
    }

    const sacar = () => {
        const updateValue = this.state.saldo - this.state.saque;
        this.setState({saldo: updateValue, show: false, success: true});
    }

    const showOptions = () => {
      if(this.state.saldo >= this.state.saque){
        this.setState({show: true, success: false});
      }else{
        alert('Valor não permitido');
      }
    }

    return(
      <div className="app">
        <Header />
        <Saldo saldo={this.state.saldo} />
        <Saque click={getValue} show={showOptions}/>
        {this.state.show && <Options sacar={sacar} value={this.state.saque} />}
        {this.state.success && <Success />}
      </div>
    );
  }
}

export default App;