import {LEGENDS_DATA} from "../data/data";
import {Player} from "./Player";
import {Section} from "./Section";

export function Legends(props) {
    return <Section title='Legends' children={LEGENDS_DATA.sort((a, b) => a.naam.localeCompare(b.naam))
        .map((p, index) => <Player player={p} key={index}/>)}></Section>
    
}
