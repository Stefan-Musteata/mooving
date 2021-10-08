import React, {useState} from "react"
import key from '../img/key.png'
import home from '../img/home.png'

const Spelling = () => {

  const [tab, setTab] = useState({tab1: true, tab2: false})

  const handleClickActive = (name) => {
    if(name === 'tab-1') {
      setTab({tab1: true, tab2:false})
    } else {
      setTab({tab1: false, tab2:true})
    }
  }
  
  return (
    <div className="container">
      <div className="spelling">
        <div className="spelling-tabs">
          <ul>
            <li className={tab.tab1 ? 'active' : ''} onClick={() => handleClickActive('tab-1')}>
              <img src={key} alt="spelling a property" />
              <div>SPELLING A PROPERTY</div>
            </li>
            <li className={tab.tab2 ? 'active' : ''} onClick={() => handleClickActive('tab-2')}>
            <img src={home} alt="buying a property" />
              <div>BUYING A PROPERTY</div>
            </li>
          </ul>
        </div>
        <div className="content-spelling">
          <div className={tab.tab1 ? 'tab' : 'd-none'}>
            <div className="description col-6">
              <h2>
                Spelling a Property
              </h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
              </p>
              <button type="button" className="btn-call-to-action">
                CALL TO ACTION
              </button>
            </div>
            <div className="video col-6">
              <iframe width="100%" height="300" title="myFrame1"
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>
            </div>
          </div>
          <div className={tab.tab2 ? 'tab' : 'd-none'}>
            <div className="description col-6">
              <h2>
                Buying a Property
              </h2>
              <p>
                Buying Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
              </p>
              <button type="button" className="btn-call-to-action">
                CALL TO ACTION
              </button>
            </div>
            <div className="video col-6">
              <iframe width="100%" height="300" title="myFrame2"
              src="https://www.youtube.com/embed/Zu6QKV7HPmA">
              </iframe>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Spelling