import './App.css';
import logo from './amazon-logo.png'
import comic from './comic.png'
import { useState } from 'react'
import './fonts/Ember.ttf'

function App() {
  const [submit, setSubmit] = useState('');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [passReEnter, setPassReEnter] = useState('')
  const [redoForm, setRedoForm] = useState(null)

  const handleSubmit = (event) => {
    if(passReEnter !== pass) {
      event.preventDefault();
      setRedoForm(true)
    } else {
      setSubmit('done')
    }
  }

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value)
        break;
      case 'email':
        setEmail(event.target.value)
        break;
      case 'password':
        setPass(event.target.value)
        break;
      case 'reenter':
        setPassReEnter(event.target.value)
      break;
      default: return
  }
}

  if( submit === '' ) {
    return (
      <div className='App'>
        <main className='App-main'>
          <p className={ redoForm === null ? 'hidden' : null}>
            There was a problem Passwords must match
          </p>
          <img className={'logo-dimensions'} src={logo} alt='amazon logo'/>
            <form className={'form-flex'} onSubmit={handleSubmit}>
              <p>Create account</p>
              <label className={'padding'}>Your name</label>
              <input 
                type='text' 
                value={name}
                name='name' 
                required 
                onChange={handleChange}
              />
              <label className={'padding'}>Email</label>
              <input 
                type='text' 
                value={email}
                name='email' 
                required 
                onChange={handleChange}
              />
              <label className={'padding'}>Password</label>
              <input 
                type='text' 
                value={pass}
                name='password' 
                placeholder='At least 6 characters'
                required 
                onChange={handleChange}/>
              <p>&#9432; Passwords must be at least 6 characters.</p>
              <label>Re-enter password</label>
              <input 
                type='text' 
                value={passReEnter}
                name='reenter' 
                required 
                onChange={handleChange}
              />
              <button className='btn' type={'submit'}>Create your Amazon account</button>
              <p>By creating an account, you agree to Amazon 
                <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088'> Conditions of Use</a> and 
                <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496'> Privacy Notice.</a></p>
              <hr></hr>
              <p>Already have an account? <a href='https://www.amazon.com/ap/signin?clientContext=130-4649631-2400710&openid.return_to=https%3A%2F%2Ftrack.amazon.com%2F&prevRID=YB3M9WPQE6W56KY0SC9X&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_shippingrecipientcentral_us&openid.mode=checkid_setup&siteState=clientContext%3D133-5959651-2511706%2CsourceUrl%3Dhttps%253A%252F%252Ftrack.amazon.com%252F%2Csignature%3DaIjtVnII3EuhLKiVpJY6BuFeqXYj3D&marketPlaceId=A2BR6UVHX99FEC&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_shippingrecipientcentral_us_amazon&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'>Sign-In</a></p>
            </form>
            <hr></hr>
            <p className={'center-align'}>
              <a className={'margin-right'} href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088'>Conditions of Use</a>  
              <a className={'margin-right'} href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496'>Privacy Notice</a>
              <a href='https://www.amazon.com/gp/help/customer/display.html'>Help</a>
            </p>
            <p className={'center-align'}>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
          </main>
      </div>
    )
  } else {
    return (
      <div className={'flex'}>
        <div className={'padding'}>
          <h3>Name: <span>{name}</span></h3>
          <h3>Email: <span>{email}</span></h3>
          <h3>Password: <span>{pass}</span></h3>
          <h3>Re-Entered Password: <span >{passReEnter}</span></h3>
        </div>
        <img className={'img-dimension'} src={comic} alt={'comic'}/>
      </div>
    )
  }
}


export default App;
