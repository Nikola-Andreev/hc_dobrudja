import React, {Component} from 'react'
import GoogleMap from './Maps'
import '../../css/contacts.css'
import Navigation from '../common/Navigation'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div>
                    <span className='hallAddress'>
                        <h3>Contact address</h3>
                        <p>HC Dobrudja</p>
                        <p>Dobrotica 46-E-6</p>
                        <p>9300 Dobrich</p>
                        <p>Bulgaria</p>
                        <p><i className="fas fa-phone"> </i> +359 888 203525</p>
                        <p><i className="fas fa-envelope"> </i> hc.dobrudja@gmail.com</p>
                    </span>
                    <span className='hcAddress'>
                        <h3>Sport hall address</h3>
                        <p>Sport complex "Rusalka"</p>
                        <p>"General Kolev" 82</p>
                        <p>9300 Dobrich</p>
                        <p>Bulgaria</p>
                    </span>
                </div>
                <GoogleMap/>
            </div>
        )
    }
}