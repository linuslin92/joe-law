import React, { Component } from 'react';

import CriminalLaw from './areas/criminaldefense';
import FamilyLaw from './areas/familylaw';
import ImmigrationLaw from './areas/immigrationlaw';
import PersonalInjury from './areas/personalinjury';
import FileNotFound from '../pagenotfound/pagenotfound';

const components = {
    criminal_law: CriminalLaw,
    family_law: FamilyLaw,
    immigration_law: ImmigrationLaw,
    personal_injury: PersonalInjury,
    pageNotFound: FileNotFound
}

export default class Area extends Component {
    area = this.props.match.params.area;
    constructor(props) {
        super(props);

        this.state = {
            area: this.props.match.params.area,
            content: this.props.content
        }
    }
    static getDerivedStateFromProps (props, state) {
        if(props.match.params.area !== state.area) {
            return {area:props.match.params.area}
        } else {
            return { ...state }
        }
    }
    render() {
        let found = Object.keys(components).indexOf(this.state.area) > -1;
        let key = found ? this.state.area : 'pageNotFound';
        let Comp = components[key];
        let area = found ? this.state.content.areas[key] : this.state.content.pagenotfound;
        return (
            <Comp content={area} />
        )
    }
}