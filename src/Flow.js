import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls, Background, MiniMap, ControlButton
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './Sidebar';

import './index.css';
import Favoritesbar from "./Favoritesbar";
import {getValue} from "@testing-library/user-event/dist/utils";
import {getNodeText} from "@testing-library/react";
import Outputpanel from "./Outputpanel";





const initialEdges = [{ id: '1-2', source: '1', target: '2' , type:'step'}];



const initialNodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: { label: 'Connect to host' },
        type: 'input'
    },
    {
        id: '2',
        position: { x: 100, y: 100 },
        data: { label: 'Ask for installed linux version' },
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

function Flow() {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onSave = useCallback(() => {
        if (reactFlowInstance) {
            const flow = reactFlowInstance.toObject();
            localStorage.setItem(reactFlowInstance, JSON.stringify(flow));
            console.log(JSON.stringify(flow));

        }
    }, [reactFlowInstance]);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: event.dataTransfer.getData('tekst')},
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );


    return (
        <div className="dndflow">
            <Favoritesbar />

            <ReactFlowProvider>

                <div className="reactflow-wrapper" ref={reactFlowWrapper}  style={{ height: '750px', width:'500px' }}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        fitView
                    >
                        <div className="controls">
                            <button className="executeButton">Execute </button>
                            <button className="saveButton" onClick={onSave}>Save </button>
                        </div>

                        <Controls />
                        <Background/>
                        <MiniMap nodeStrokeWidth={3} zoomable pannable />

                    </ReactFlow>
                    <Outputpanel/>
                </div>

                <Sidebar />

            </ReactFlowProvider>
        </div>
    );
};

export default Flow;
