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
            "state": "learned",
            "completePercent": 100,
            "id": "6"
        }, {
            "name": "JS",
            "children": [],
            "state": "learned",
            "completePercent": 100,
            "id": "11"
        }, {
            "name": "CSS",
            "children": [],
            "state": "learned",
            "completePercent": 100,
            "id": "16"
        }, {
            "name": "JavaScript",
            "children": [
                {
                    "name": "React",
                    "children": [],
                    "state": "learned",
                    "completePercent": 100,
                    "id": "21"
                }, {
                    "name": "Angular.js",
                    "children": [],
                    "state": "learning",
                    "completePercent": 100,
                    "id": "26"
                }, {
                    "name": "ignored",
                    "children": [],
                    "state": "ignored",
                    "completePercent": 100,
                    "id": "27"
                }, {
                    "name": "questions",
                    "children": [],
                    "state": "questions",
                    "completePercent": 100,
                    "id": "28"
                }
            ],
            "state": "learned",
            "completePercent": 100,
            "id": "17"
        }, {
            "name": "MVC",
            "children": [{
              "name": "ignored",
              "children": [],
              "state": "ignored",
              "completePercent": 100,
              "id": "50"
            }, {
              "name": "questions",
              "children": [],
              "state": "questions",
              "completePercent": 100,
              "id": "51"
            }],
            "state": "failure",
            "completePercent": 100,
            "id": "31"
        }, {
            "name": "Deploy",
            "children": [{
                "name": "Angular.js",
                "children": [],
                "state": "learning",
                "completePercent": 100,
                "id": "32"
            }, {
                "name": "ignored",
                "children": [],
                "state": "ignored",
                "completePercent": 100,
                "id": "33"
            }],
            "state": "running",
            "completePercent": 30,
            "id": "37"
        }, {
            "name": "AC",
            "children": [],
            "state": "learned",
            "completePercent": 100,
            "id": "43"
        }];

        var selectedStage = [{}];
        return (
            <div className="App">
                <div className="App-header">
                    <div className="logo">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>MoTree</h2>
                    </div>
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
