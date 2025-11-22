import barca_logo from "../img/barca_logo.avif";

export function Banner(){
    return <div>
        <img src={barca_logo} alt="App logo" height={"225px"} width={"200px"} />
        <h1>Més que un club!</h1>
    </div>
}