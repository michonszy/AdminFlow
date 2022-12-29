import React from 'react';
import './favoritesbar.css';

export default () => {
    const onDragStart = (event, nodeType,tekst) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('tekst',tekst)
        event.dataTransfer.effectAllowed = 'move';

    };

    return (
        <aside>
            <div className="sidePanel">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className="description">Here you can select hosts (this would be either dragable or just checkboxes)</div>
                <div className="dndnode input"  onDragStart={(event) => onDragStart(event, 'default','host-1-ftpsrv.pl')} draggable>
                    host-1-ftpsrv.pl
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','host2.de')} draggable>
                    host2.de
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'default','host3-eu.cz')} draggable>
                    host3-eu.cz
                </div>

            </div>
        </aside>

    );
};
