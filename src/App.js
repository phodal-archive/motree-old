import React, {Component} from 'react';
import {PipelineGraph} from './PipelineGraph';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    onNodeClick(id) {
        console.log(id + ' was be clicked');
    }

    render() {
        var graphNodes = [{
            "name": "Checkout",
            "children": [],
            "state": "success",
            "completePercent": 100,
            "id": "6"
        }, {
            "name": "Create Virtualenv",
            "children": [],
            "state": "success",
            "completePercent": 100,
            "id": "11"
        }, {
            "name": "Install",
            "children": [],
            "state": "success",
            "completePercent": 100,
            "id": "16"
        }, {
            "name": "Test",
            "children": [
                {
                    "name": "Unit Test",
                    "children": [],
                    "state": "success",
                    "completePercent": 100,
                    "id": "21"
                }, {
                    "name": "E2E Test",
                    "children": [],
                    "state": "success",
                    "completePercent": 100,
                    "id": "26"
                }
            ],
            "state": "success",
            "completePercent": 100,
            "id": "16"
        }, {
            "name": "Release",
            "children": [],
            "state": "success",
            "completePercent": 100,
            "id": "31"
        }, {"name": "Deploy", "children": [], "state": "success", "completePercent": 100, "id": "37"}, {
            "name": "AC",
            "children": [],
            "state": "success",
            "completePercent": 100,
            "id": "43"
        }];
        var selectedStage = [{}];
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-intro">
                    <PipelineGraph
                        stages={graphNodes}
                        selectedStage={selectedStage[0]}
                        onNodeClick={
                            (name, stageId) => {
                                this.onNodeClick(stageId);
                            }
                        }
                    />
                </div>
            </div>
        );
    }
}

export default App;
