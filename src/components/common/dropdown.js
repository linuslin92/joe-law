import React, { Component } from 'react';
import './dropdown.scss';

/*
 * Props -  
 *   handler    : function  (Event);
 *   callback   : function  (string: languageType );
 *   data       : Object    {default: { id }, options: { label, value, id }}
 *   style      : Ojbect    {styles} [optional]
 */
export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        const defOptId = this.props.data.default.id;
        const defOpt = this.props.data.options.filter(option=>option.id===defOptId)[0];

        this.state = {
            selectLabel: defOpt.label,
            selectValue: defOpt.value,
            selectId: defOpt.id
        }
    }
    toggleOpen = (e) => {
        document.querySelector('.dropdownSelect').classList.toggle('open');
    };
    
    render() {
        const clickevent = (e) => { 
            this.props.handler(e);
            this.toggleOpen();
            let target = e.target;
            this.setState({
                selectLabel: target.textContent,
                selectValue: target.getAttribute('value'),
                selectId: target.getAttribute('data-option-id')
            });
            this.props.callback(target.getAttribute('value'));
        };
        
        return (
            <div className="dropdown" style={ this.props.style }>
                <input 
                    className="dropdownSelect" 
                    readOnly 
                    value={ this.state.selectLabel } 
                    data-value={ this.state.selectValue } 
                    data-key={ this.state.selectId } 
                    onClick={ this.toggleOpen } />
                <ul className="dropdownOptions">
                    {
                        this.props.data.options.map(option=>{
                            return (
                                <li value={ option.value } key={ option.id } data-option-id={ option.id } onClick={ clickevent }>
                                    { option.label }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}