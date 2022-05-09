import React from 'react';

function SimulationWrapper(flowRate, tIn) {
    return class extends React.Component {

        timestep = 100;

        constructor(props) {
            super(props);

            this.state = {
                temperatureStart: tIn,
                temperatureSource: 80,
                temperatureOut: 80,
                flowRate: flowRate,
                exch: 0.25, // exchanger effectiveness
                specificHeat: 1,
                storageMass: 10,
                time: 0
            }
            console.log("constructor called")

            this.simulateWaterFlowheat();
        }

        simulateWaterFlowheat() {

            const exch = this.state.exch;
            const m = this.state.storageMass;
            const cp = this.state.specificHeat;
            const tSrc = this.state.temperatureSource;
            const tStart = this.state.temperatureStart;

            const a = (1/(m*exch))*(exch*m*cp*tSrc);
            const b = (-1/(m*cp))*(exch*m*cp);
            const tOut = ((a / b) + tStart) * Math.pow(exch, b * (this.state.time/1000)) - (a / b);
            const time = this.state.time + this.timestep;

            this.setState({
                temperatureOut: tOut,
                time: time
            });
            setTimeout(() => {this.simulateWaterFlowheat()}, this.timestep); // recursively iterate
        }

        componentDidMount() {

            console.log("componentDidMount called")
        }

        render() {
            return (
                <div style={{position:"absolute", color:"#F9C219", textAlign:"left", left: 64, top: 25}}>
                    <div>Temperature start: {this.state.temperatureStart}</div>
                    <div>Temperature source: {this.state.temperatureSource}</div>
                    <div>Temperature: {this.state.temperatureOut}</div>
                    <div>flow rate: {this.state.flowRate}</div>
                    <div>T out: {this.state.storageMass}</div>
                    <div>time: {this.state.time}</div>
                </div>
            )
        }
    }
}

export default SimulationWrapper;