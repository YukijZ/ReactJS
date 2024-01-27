import React,{ Component } from 'react'

export default class Players extends Component {
  render() {
    return (
<div className='container'>
    <div className='column'> 
    <div className='card'>
        <img src='assets/images/cr.jpg' alt='cr7'/>
        <h3>Cristiano Ronaldo</h3>
        <p className='title'>Manchester United</p>
        <p><button>Detail</button></p>
      </div>
    </div>
    <div className='column'> 
    <div className='card'>
        <img src='assets/images/kante.jpg' alt='kante'/>
        <h3>Kante</h3>
        <p className='title'>Chelsea</p>
        <p><button>Detail</button></p>
      </div>
    </div>
    <div className='column'> 
    <div className='card'>
        <img src='assets/images/messi.jpg' alt='messi'/>
        <h3>Lionel Messi</h3>
        <p className='title'>PSG</p>
        <p><button>Detail</button></p>
      </div>
    </div>
    <div className='column'> 
    <div className='card'>
        <img src='assets/images/neymar.jpg' alt='neymar'/>
        <h3>Neymar JR</h3>
        <p className='title'>PSG</p>
        <p><button>Detail</button></p>
      </div>
    </div>
    <div className='column'> 
    <div className='card'>
        <img src='assets/images/kane.jpg' alt='kane'/>
        <h3>Kane</h3>
        <p className='title'>tottenham</p>
        <p><button>Detail</button></p>
      </div>
    </div>
    <div className='column'> 
    <div className='card'>
        <img src='assets/images/haaland.jpg' alt='haaland'/>
        <h3>Haaland</h3>
        <p className='title'>Manchester City</p>
        <p><button>Detail</button></p>
      </div>
      <img src=''/>
      <h3></h3>
      <p className='title'></p>
      <p><button>Detail</button></p>
      return (
<div className='container'>
{Players.map((player)=>(
<div className='column' key={player.id}>
<div className='card'>
<img src={player.img}/>
<h3>{player.name}</h3>
<p className='title'>{player.club}</p>
<p><button>Detail</button></p>
</div>
</div>
))}
</div>
      )
    </div>
        
</div>
    )
  }
}