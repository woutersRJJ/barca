import {LEGENDS_DATA} from "../data/data";

export function Legends() {
    return <div>
        <h2>Legends</h2>
        {LEGENDS_DATA.sort((a,b)    =>b.geboortejaar - a.geboortejaar).map((l, index) => <Speler speler={l} key={index}/>)}
    </div>
}

function Speler(props) {
    const {speler} = props
    const specialStyle = {
        backgroundColor: 'pink',
        width: '25%',
        float: 'left',
        margin: '2vw',
        borderRadius: '4px',
        textAlign: 'center'
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

function Clubs(props){
    const {clubs}=props

    const listItemsStyle = {
        display: 'inline-block',
        margin: '0 10px'
    }

    if (clubs==null)
        return <p>geen andere clubs</p>
    else
        return<div>
            <p>Clubs</p>
            <ul style={listItemsStyle}>{clubs.map((c, index) => <Club club={c} key={index}/>)}</ul>
    </div>

}

function Club(props){
    const {club}=props


    return <li>{club}</li>
}