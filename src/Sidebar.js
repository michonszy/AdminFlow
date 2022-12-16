import React from 'react';
import './index.css';

export default () => {
    const onDragStart = (event, nodeType,tekst) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('tekst',tekst)
        event.dataTransfer.effectAllowed = 'move';

    };

    return (
        <aside>
            <div className="sidePanel">
            <div className="description">You can drag these nodes to the pane on the right.</div>
            <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'input','Connect to host')} draggable>
                Connect to host
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','get hostname')} draggable>
                get hostname
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output','Show output')} draggable>
                Show output
            </div>


                <div className="description">You can drag these nodes to the pane on the right.</div>
                <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'default','Connect to host')} draggable>
                    Connect to host
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','get hostname')} draggable>
                    get hostname
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'default','Show output')} draggable>
                    Show output
                </div>


                <div className="description">You can drag these nodes to the pane on the right.</div>
                <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'default','Connect to host')} draggable>
                    Connect to host
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','get hostname')} draggable>
                    get hostname
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'default','Show output')} draggable>
                    Show output
                </div>


                <div className="description">You can drag these nodes to the pane on the right.</div>
                <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'default','Connect to host')} draggable>
                    Connect to host
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','get hostname')} draggable>
                    get hostname
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'default','Show output')} draggable>
                    Show output
                </div>

            </div>
        </aside>

    );
};
