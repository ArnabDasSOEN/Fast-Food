import "./css/RandomPokemon.css"

function RandomPokemon(){
    
    const number = Math.floor(Math.random() * 150) + 1
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`
    
    return (
        <div className="RandomPokemon">
            <h1>Random Pokemon #{number}</h1>
            <img src={url} />
        </div>
    );
}


export default RandomPokemon;