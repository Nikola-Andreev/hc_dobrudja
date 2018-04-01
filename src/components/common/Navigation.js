import React, {Component} from 'react'
import i18n from '../../i18n/i18n';

export default class Navigation extends Component {
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
    render() {
        let lng = this.state.lng
        return (
            <nav id="navigation">
                <span className="logoClub">
                    <a href="/">
                        <img src={"img/clubs/dobrudja.png"} alt="Dobrudja" width="125" height="125"/>
                    </a>
                </span>
                <span>
                    <ul id="main-menu">
                        <li><a href={"/news"}>{i18n.t('news', {lng})}</a></li>
                        <li><a href={"/club"}>{i18n.t('club', {lng})}</a></li>
                        <li><a href={"/team"}>{i18n.t('team', {lng})}</a></li>
                        <li><a href={"/season"}>{i18n.t('season', {lng})}</a></li>
                        <li><a href={"/gallery"}>{i18n.t('gallery', {lng})}</a></li>
                        <li><a href={"/contacts"}>{i18n.t('contacts', {lng})}</a></li>
                        <span className={"translate"}>
                            <li onClick={() => i18n.changeLanguage('bg')}>
                                <img src={"img/bg-flag.png"} alt="BG" width="25" height="25"/>
                            </li>
                            <li onClick={() => i18n.changeLanguage('en')}>
                                <img src={"img/uk-flag.png"} alt="EN" width="25" height="25"/>
                            </li>
                        </span>
                        <span className={"social"}>
                            <li>
                                <a href={'https://www.facebook.com/HC-DOBRUDJA-Dobrich-158172317587558/?ref=br_rs'}>
                                    <img src={"img/facebookLogo.jpg"} alt="Facebook" width="25" height="25"/>
                                </a>
                            </li>
                        </span>
                    </ul>
                </span>
                <span className="logoMunicipality">
                    <a href={"http://www.dobrich.bg"}>
                        <img src={"img/municipality.png"} alt="Dobrich" width="100" height="140"/>
                    </a>
                </span>
            </nav>
        )
    }
}