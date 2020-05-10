// @flow

import Icon from '@atlaskit/icon';

import React, { Component } from 'react';

import LogoSVG from '../../../images/logo.svg';

import LogoPNG from '../../../images/logo.png';

/**
 * Logo component.
 */
export default class Logo extends Component<*> {

    /**
     * Render function of component.
     *
     * @returns {ReactElement}
     */
    render() {
        return (
                 <div>
                     <img 
                            src={ LogoPNG } width="32" height="32"/>
                 </div>
        );
    }
}