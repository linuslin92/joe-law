import React, { Component } from 'react';
import LanguageContext from '../context/languagecontext';

import * as EN_CONT from '../content/en/content.json';
import * as ES_CONT from '../content/es/content.json';

let EN = navigator.language.search(/en/i) > -1;
let PACK = {
    en: EN_CONT.default, 
    es: ES_CONT.default
}

export default class LanguageProvider extends Component {
    state = {
        languages: PACK[(EN ? 'en' : 'es')]
    }
    render() {
        return (
            <LanguageContext.Provider value={{
                pack: this.state.languages,
                switch: lang => {
                    return {
                        languages: PACK[lang]
                    }
                }
            }}>
                { this.props.children }
            </LanguageContext.Provider>
        )
    }
}
