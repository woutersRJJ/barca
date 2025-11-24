export function Player(props) {
    const {player} = props

    return <div className='speler'>
        <h4>{player.naam} {player.voornaam}</h4>
        <div>{player.bijnaam || 'bijnaam onbekend'}</div>
        <div>{player.nationaliteit}</div>
        <div>Geboren {player.geboortejaar}</div>
        <div>Seizoen {player.debuutseizoen}-{player.eindseizoen}</div>
        <Teams teams={player.teams}/>
    </div>
}

function Teams(props) {
    const {teams} = props

    if (teams == null)
        return <p>geen andere clubs</p>
    else
        return <div>
            <p>Clubs</p>
            <ul>{teams.map((c, index) => <Team team={c} key={index}/>)}</ul>
        </div>
}

function Team(props) {
    const {team} = props

    return <li>{team}</li>
}