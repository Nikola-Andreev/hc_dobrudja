import React, {Component} from 'react'
import Navigation from '../common/Navigation'
import Ranking from './Ranking'

export default class Season extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Ranking/>
            </div>
        )
    }
}