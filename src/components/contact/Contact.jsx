import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
          <div className="c-left">
              <h1 className="c-title">Contact Me:</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img src={Phone} alt="" className="c-icon"/>
                      +1 281 678 4893
                  </div>
                  <div className="c-info-item">
                    <img className="c-icon" src={Email} alt="" />
                    charlotte.s.stowell@gmail.com
                 </div>
                <div className="c-info-item">
                    <img className="c-icon" src={Address} alt="" />
                    555 Alvarado Street, San Francisco 94114 California
                </div>
              </div>
          </div>
          <div className="c-right">
              <p className="c-desc">
                <b>What’s my story?</b> Let's chat. Always available for freelancing if the right project comes along.
              </p>
              <form>
                  <input type="text" placeholder='Name' name='user_name' />
                  <input type="text" placeholder='Subject' name='user_subject' />
                  <input type="text" placeholder='Email' name='user_email' />
                  <textarea rows="5" placeholder='Message' name='message'/>
                  <button>Submit</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Contact
