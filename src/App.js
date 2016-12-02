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
            "name": "HTML",
            "children": [],
            "state": "success",
            "completePercent": 100,
            "id": "6"
        }, {
            "name": "JS",
            "children": [],
            "state": "success",
            "completePercent": 100,
            "id": "11"
        }, {
            "name": "CSS",
            "children": [],
            "state": "success",
            "completePercent": 100,
            "id": "16"
        }, {
            "name": "JavaScript",
            "children": [
                {
                    "name": "React",
                    "children": [],
                    "state": "success",
                    "completePercent": 100,
                    "id": "21"
                }, {
                    "name": "Angular.js",
                    "children": [],
                    "state": "success",
                    "completePercent": 100,
                    "id": "26"
                }, {
                    "name": "Backbone",
                    "children": [],
                    "state": "success",
                    "completePercent": 100,
                    "id": "27"
                }
            ],
            "state": "success",
            "completePercent": 100,
            "id": "17"
        }, {
            "name": "MVC",
            "children": [],
            "state": "failure",
            "completePercent": 100,
            "id": "31"
        }, {
            "name": "Deploy",
            "children": [],
            "state": "success",
            "completePercent": 100,
            "id": "37"
        }, {
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
                    <h2>MoTree</h2>
                </div>
                <div className="graph-tree">
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
