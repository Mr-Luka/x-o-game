import {useState} from 'react';


export default function Player({playersName, symbol}){
    const [ isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(playersName);

    function handleClick(){
        setIsEditing(isEditing => !isEditing);
    }

    function onChange(e){
        setPlayerName(e.target.value)
    }

    let editableName = <span className="player-name">{playerName}</span>
    if(isEditing){
        editableName = <input type='text' required value={playerName} onChange={onChange}/>
    }

    return (
        <li >
            <span className="player">
            {editableName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
           </li>
    )
}