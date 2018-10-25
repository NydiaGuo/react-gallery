import React, { Component } from 'react'
import './Gallery.scss'

class Gallery extends Component {

    render() {
        console.log(this.props)
        return (

            <div>
               
                {this.props.images.map((image,i)=>(
                    <div className='image-div' key={i}>
                        <img src={image} alt='Yosemite National Park' />
                    </div>
                ))}
                
            </div>
        )
    }
}


export default Gallery