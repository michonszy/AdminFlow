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
            <div className="description">First things first</div>
            <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'input','Connect to host')} draggable>
                Connect to host
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Hosts group')} draggable>
                Hosts group
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output','Show output')} draggable>
                Show output
            </div>


                <div className="description">Monitoring tools</div>
                <div className="dndnode"  onDragStart={(event) => onDragStart(event, 'default','Show OS info')} draggable>
                    Show OS info
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Process listing')} draggable>
                    Process listing
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Kernel version/CPU info ')} draggable>
                    Kernel version/CPU info
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Installed pkgs  ')} draggable>
                    Installed pkgs
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Get nginx logs ')} draggable>
                    Get nginx logs
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Get application logs ')} draggable>
                    Get application logs
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Network connections ')} draggable>
                    Network connections
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Disk info ')} draggable>
                    Disk info
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Neofetch ')} draggable>
                    Neofetch
                </div>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'default','grep /value/ ')} draggable>
                    grep /value/
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'default','Generate monitoring dashboard ')} draggable>
                    Generate monitoring dashboard
                </div>


                <div className="description">DBs related commands</div>
                <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'default','SELECT')} draggable>
                    SELECT
                </div>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'default','FROM')} draggable>
                    FROM
                </div>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'default','WHERE')} draggable>
                    WHERE
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'default','Show output as graph')} draggable>
                    Show output as graph
                </div>


                <div className="description">Windows commands</div>
                <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'default','Get registry key value')} draggable>
                    Get registry key value
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Check licence')} draggable>
                    Check licence
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'default','Create monitoring dashboard (windows)')} draggable>
                    Create monitoring dashboard (windows)
                </div>

            </div>
        </aside>

    );
};
