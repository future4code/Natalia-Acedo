import React from 'react';
import styled from 'styled-components'
import axios from "axios";

const ContainerPokemon = styled.div ` 
    margin: 50px;
`


class Pokemon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemons: [], 
            pokemonName: undefined,
            pokemonImageFront: undefined,
            pokemonImageBack: undefined,
            pokemonType: [],
            pokemonAbilities: []
        }
    }

    componentDidMount() {
        this.pokemons()
    }

    pokemons = () => {
        axios
        .get( "https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => {
            this.setState({pokemons: response.data.results})
        })
    }

    onChangeSelectPokemon = (event) => {
       if (event.target.value !== "") {
        axios
        .get (event.target.value)
        .then (response => {
            this.setState({
                pokemonName: response.data.name,
                pokemonImageFront: response.data.sprites.front_default,
                pokemonImageBack: response.data.sprites.back_default,
                pokemonType: response.data.types,
                pokemonAbilities: response.data.abilities
            })
        })
       } else {
           this.setState({pokemonName: undefined})
       }
    }

   

    render () {
        return (
            <ContainerPokemon>
                <h1>Pokémon</h1>
                <select onChange={this.onChangeSelectPokemon}>
                    <option value="">Choose</option>
                    {this.state.pokemons.map((pokemon) => {
                        return <option value={pokemon.url}>{pokemon.name}</option>
                    })}
                </select>
                
                {this.state.pokemonName && (
                <div>
                    <h2>{this.state.pokemonName}</h2>
                    <img src={this.state.pokemonImageFront}></img>
                    <img src={this.state.pokemonImageBack}></img>
                    <h4>Type</h4>
                    {this.state.pokemonType.map((type) => {
                        return <p>{type.type.name}</p>                  
                    })}
                    <h4>Abilities</h4>
                    {this.state.pokemonAbilities.map((ability) => {
                        return <p>{ability.ability.name}</p>                  
                    })}
                </div>
                )} 
            </ContainerPokemon>

        )
    }
}

export default Pokemon