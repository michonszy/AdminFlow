import React from 'react';
import './favoritesbar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.css";

export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
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

            <div className="description">Here you can find your favorite actions</div>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                Favorite Node1
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Favorite Node2
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Favorite Node3
            </div>
            </div>
        </aside>
    );
};
