import React, { Component } from 'react';

import CriminalLaw from './areas/criminaldefense';
import FamilyLaw from './areas/familylaw';
import ImmigrationLaw from './areas/immigrationlaw';
import PersonalInjury from './areas/personalinjury';

const components = {
    criminal_law: CriminalLaw,
    family_law: FamilyLaw,
    immigration_law: ImmigrationLaw,
    personal_injury: PersonalInjury
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
        let Comp = components[this.state.area];
        let area = this.state.content.areas;
        return (
            <Comp content={area[this.state.area]} />
        )
    }
}