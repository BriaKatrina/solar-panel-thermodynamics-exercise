import React, { Fragment } from 'react';

function SimulationWrapper(flowRate, tIn) {
    return class extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                tIn: tIn,
                tOut: 100,
                tRise: 0,
                flowRate: flowRate,
                heatRemoved: 0,
            }

        }

        componentDidMount() {
            this.setState({
                tIn: 100,
                tOut: 100
            }, () => {

            });
        }

        render() {
            return (
                <Fragment>

                </Fragment>
            )
        }
    }
}

export default SimulationWrapper;