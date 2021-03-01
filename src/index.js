import React from 'react'
import ReactDOM from 'react-dom'

let music={
  sa: 10,
  re: 20,
  alankar: 50,
  raga: 16
}


 class MusicCounter extends React.Component{

  render(){
    return(
    <section>
      <div>
      <p>total sa {this.props.sa}</p>
      </div>
      <div>
      <p>total raga {this.props.raga}</p>
      </div>
      <div>
      <p>total re {this.props.re}</p>
      </div>
      
    </section>
    )
  }
 }
ReactDOM.render(
  <MusicCounter 
  raga={music.raga}
  sa={music.sa}
  re={music.re}/>,
  document.getElementById('root')
)