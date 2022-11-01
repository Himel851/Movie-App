import React from 'react'

const Ucard = ({item}) => {
  return (
    <div className="MovieBox">
        <div className="img">
            <img src={item.cover} alt="" />
        </div>
        <div className="text">
            <h3>{item.name}</h3>
            <span>{item.time}</span> <br />
            <button>
                <i className='fa fa-play'>PLAY NOW</i>
            </button>
        </div>
    </div>
  )
}

export default Ucard