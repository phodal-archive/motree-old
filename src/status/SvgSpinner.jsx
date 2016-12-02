// @flow

import React, {Component, PropTypes} from 'react';
import { describeArcAsPath } from '../SVG';

export const strokeWidth = 3.5; // px. Maybe we can fetch this from CSS at runtime in the future

export default class SvgSpinner extends Component {
    render() {

        const {result} = this.props;
        const radius = (this.props.radius || 12) - (0.5 * strokeWidth); // No "inside" stroking in SVG`

        let percentage = this.props.percentage;
        const groupClasses = ['progress-spinner', result];

        if (result === 'queued') {
            percentage = 0;
        }
        else if (result === 'not_built') {
            percentage = 0;
        }
        else if (typeof percentage !== 'number' || isNaN(percentage) || percentage < 0) {
            percentage = 0;
        }
        else if (percentage === 100) {
            groupClasses.push('pc-over-100');
            percentage = 0;
        }
        else if (percentage > 100) {
            groupClasses.push('spin');
            percentage = 25;
        }

        const rotate = percentage / 100 * 360;
        const d = describeArcAsPath(0, 0, radius, 0, rotate);

        const innerRadius = radius / 3;

        return (
            <g className={groupClasses.join(' ')}>
                <rect x={-radius} y={-radius} width={radius * 2} height={radius * 2} strokeWidth={strokeWidth}/>
                <rect className="inner" x={-innerRadius} y={-innerRadius} width={innerRadius * 2}
                      height={innerRadius * 2} stroke="#fff">
                    <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="scale"
                        from="0"
                        by="3"
                        dur="4s"
                        fill="freeze"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeType="xml"
                        attributeName="fill-opacity"
                        from="0"
                        to="0"
                        values="0;0.5;0"
                        dur="4s"
                        repeatCount="indefinite"
                        fill="freeze" />
                </rect>
                { percentage ? <path className={result} fill="none" strokeWidth={strokeWidth} d={d}/> : null}
            </g>
        );
    }
}

SvgSpinner.propTypes = {
    percentage: PropTypes.number,
    radius: PropTypes.number,
    result: PropTypes.string,
};
