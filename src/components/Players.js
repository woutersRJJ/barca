import {PLAYERS_DATA} from "../data/data";
import {Player} from "./Player";
import {Section} from "./Section";

export function Players() {
    return <Section title='Players' children={PLAYERS_DATA.sort((a, b) => a.naam.localeCompare(b.naam))
        .map((p, index) => <Player player={p} key={index}/>)}></Section>
}
