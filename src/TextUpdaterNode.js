import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top} />
            <div>
                <label>
                    {data.label}
                </label>


                <input id="text" name="text" onChange={onChange} />
            </div>
            <Handle type="source" position={Position.Bottom}/>

        </div>
    );
}

export default TextUpdaterNode;
