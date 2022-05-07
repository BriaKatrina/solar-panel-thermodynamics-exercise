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
                <div style={{position:"absolute", color:"#F9C219", textAlign:"left", left: 64, top: 25}}>
                    <div>T in: {this.state.tIn}</div>
                    <div>T out: {this.state.tOut}</div>
                    <div>T rise: {this.state.tRise}</div>
                    <div>flow rate: {this.state.flowRate}</div>
                    <div>heat removed: {this.state.heatRemoved}</div>
                </div>
            )
        }
    }
}

export default SimulationWrapper;