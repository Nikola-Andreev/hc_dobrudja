import React, {Component} from 'react'
import '../../css/ranking.css'
import axios from 'axios'
import i18n from "../../i18n/i18n";

export default class Ranking extends Component {

    constructor(props) {
        super(props)
        let lng = sessionStorage.getItem('language') || 'bg'
        this.state = {
            lng: lng
        }
        this.onLanguageChanged = this.onLanguageChanged.bind(this)
    }

    componentDidMount() {
        i18n.on('languageChanged', this.onLanguageChanged)
    }

    componentWillUnmount() {
        i18n.off('languageChanged', this.onLanguageChanged)
    }

    onLanguageChanged(lng) {
        sessionStorage.setItem('language', lng)
        this.setState({
            lng: lng
        })
    }

    componentWillMount() {
        axios.get('https://hc-dobrudja.firebaseio.com/2017-2018/Teams.json')
            .then((res) => {
                let sortedTeams = Object.keys(res.data).sort((a, b) => {
                    return  res.data[b]['points'] - res.data[a]['points']
                })
                let lng = this.state.lng
                this.setState({
                    sorted: sortedTeams,
                    teams: res.data,
                    lng: lng
                })
            })
            .catch( (err) => {
                console.log(err)
            })
    }

    render() {
        let lng = this.state.lng
        let table = []
        if(this.state && this.state.sorted) {
            for (let i = 0; i < this.state.sorted.length; i++) {
                let teamKey = this.state.sorted[i]
                table.push(<tr key={teamKey} id={teamKey}>
                    <td>{i + 1}</td>
                    <td>
                        <img src={'./img/clubs/' + teamKey + '.png'} alt={teamKey} width={'40px'} height={'40px'}/>
                        {i18n.t(this.state.sorted[i], {lng})}
                    </td>
                    <td>{this.state.teams[teamKey]['matches']}</td>
                    <td>{this.state.teams[teamKey]['wins']}</td>
                    <td>{this.state.teams[teamKey]['draws']}</td>
                    <td>{this.state.teams[teamKey]['loses']}</td>
                    <td>{this.state.teams[teamKey]['diff']}</td>
                    <td>{this.state.teams[teamKey]['points']}</td>
                </tr>)
            }
        }
        return (
            <table className={'ranking'}>
                <thead>
                    <tr>
                        <td>№</td>
                        <td>{i18n.t('team', {lng})}</td>
                        <td>{i18n.t('matches', {lng})}</td>
                        <td>{i18n.t('wins', {lng})}</td>
                        <td>{i18n.t('draws', {lng})}</td>
                        <td>{i18n.t('loses', {lng})}</td>
                        <td>{i18n.t('diff', {lng})}</td>
                        <td>{i18n.t('points', {lng})}</td>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        )
    }
}