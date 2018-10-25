import React, { Component } from 'react'
import Gallery from './Gallery.js'
import './App.scss'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
        imagesSrc: [
            'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/02/horsetail-falls-yosemite-permit-required.jpg',
            'https://gypsyguide.com/wp-content/uploads/2017/09/Yosemite-National-Park-1140x550.jpg',
            'http://tombricker.smugmug.com/Travel/Yosemite-National-Park/i-dNRTQvD/0/L/half-dome-yosemite-stars-moonlight-wide-L.jpg',
            'https://c1.staticflickr.com/9/8141/7566272360_e886cbf53f_b.jpg',
            'https://c1.staticflickr.com/9/8402/8642541052_cb47080164_b.jpg',
            'https://c1.staticflickr.com/9/8520/8614950749_a4697a14f8_b.jpg',
            'https://wattsupwiththat.files.wordpress.com/2018/03/aurora-purple-steve.jpg',
            'https://c1.staticflickr.com/9/8546/8609346750_9d98f03b52_b.jpg',
            'https://c1.staticflickr.com/9/8239/8539132902_3c016b1a58_b.jpg',
            'https://c1.staticflickr.com/9/8505/8532689047_03c406d565_b.jpg',
            'https://c1.staticflickr.com/8/7267/8163421864_83d15bc2ea_b.jpg',
            'https://c1.staticflickr.com/9/8202/8157071504_734990e841_b.jpg',
            'https://c1.staticflickr.com/8/7115/7533799976_42e09dbb3f_b.jpg',
            'https://c1.staticflickr.com/8/7074/7378280348_1f2392a2ac_b.jpg',
            'https://images4.alphacoders.com/279/279306.jpg'
            ],
        imgIsOpen: false
    }
  }

imageIsOpen = () => {
  this.setState({
    imgIsOpen: true
  })
}

  // nextImg = ()=> {
  //   const newIndex = this.state.images.index+1
  //   this.setState({
  //     images:newIndex
  //   })
  // }

  render() {
    return (
      <div className='App'>
        <h1>React Gallery</h1>
        <div className='galleryContainer'>

          <Gallery images={this.state.imagesSrc} onClick={()=>this.imageIsOpen()} />

        </div>

      </div>
    )
  }
}

export default App
