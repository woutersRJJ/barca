import {PLAYERS_DATA} from "../data/data";

export function Players() {
    return <div>
        <h2>Players</h2>
        {PLAYERS_DATA.sort((a, b) => a.naam.localeCompare(b.naam)).map((p, index) => <Speler speler={p} key={index}/>)}
    </div>
}

function Speler(props) {
    const {speler} = props
    const specialStyle = {
        backgroundColor: 'pink',
        width: '45%',
        float: 'left',
        margin: '2vw',
        borderRadius: '4px',
        textAlign: 'center',
        height:'280px'
    }

    return <div style={specialStyle}>
        <h4>{speler.naam}</h4>
        <div>{speler.bijnaam || 'bijnaam onbekend'}</div>
        <div>{speler.nationaliteit}</div>
        <div>Geboren {speler.geboortejaar}</div>
        <div>Seizoen {speler.debuutseizoen}-{speler.eindseizoen}</div>
        <Clubs clubs={speler.clubs}/>
    </div>
}

function Clubs(props) {
    const {clubs} = props

    const listItemsStyle = {
        display: 'inline-block',
        margin: '0 10px 10px 0',
        textAlign: 'left'
    }

    if (clubs == null)
        return <p>geen andere clubs</p>
    else
        return <div>
            <p>Clubs</p>
            <ul style={listItemsStyle}>{clubs.map((c, index) => <Club club={c} key={index}/>)}</ul>
        </div>
}

function Club(props) {
    const {club} = props

    return <li>{club}</li>
}