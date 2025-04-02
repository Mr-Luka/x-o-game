export default function Log({turns}){
    return (
        <div className='logs'>
            <h1>Log</h1>
            <div className='log'>
                {turns.map(turn => 
                <li key={`${turn.square.row} ${turn.square.col}`}>
                    {turn.player} Selected {turn.square.row} - {turn.square.col}
                </li>)}
            </div>
        </div>
    )
}
