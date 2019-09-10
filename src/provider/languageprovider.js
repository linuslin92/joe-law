import React, { Component } from 'react';
import LanguageContext from '../context/languagecontext';

import * as EN_CONT from '../content/en/content.json';
import * as ES_CONT from '../content/es/content.json';

let lang = navigator.language.search(/en/i) > -1 ? 'en' : 'es';
let PACK = {
    en: EN_CONT.default, 
    es: ES_CONT.default
}

export default class LanguageProvider extends Component {
    state = {
        pack: PACK[lang],
        switch: (e) => {
            let str = e.currentTarget.value;
            this.setState({
                pack: PACK[str]
            })
        }
    }
    render() {
        return (
            <LanguageContext.Provider value={this.state}>
                { this.props.children }
            </LanguageContext.Provider>
        )
    }
}
