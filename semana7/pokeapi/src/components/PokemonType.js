import React from 'react';
import styled from 'styled-components'
import axios from "axios";

const ContainerPokemonType = styled.div ` 
    margin: 50px;
`


class PokemonType extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            types: [],
            pokemons: undefined
        }
    }

    componentDidMount() {
        this.types()
    }

    types = () => {
        axios
        .get( "https://pokeapi.co/api/v2/type")
        .then(response => {
            this.setState({types: response.data.results})
        })
    }

    onChangeSelectType = (event) => {
        axios
        .get(event.target.value)
        .then(response => {
            console.log(response.data.pokemon)
            this.setState({pokemons: response.data.pokemon})
        })
    }

   

    render () {
        return (
            <ContainerPokemonType>
                <h1>Types</h1>
                <select onChange={this.onChangeSelectType}>
                    <option value="">Choose</option>
                    {this.state.types.map(type => {
                        return <option value={type.url}> {type.name} </option>
                    })}
                </select>

                {this.state.pokemons && (
                <div>
                    <h2>List of Pokémon {this.state.pokemons.length}</h2>
                    {this.state.pokemons.map((pokemon) => {
                        return <p>{pokemon.pokemon.name}</p>                
                    })}
                </div>
                )} 

                
            </ContainerPokemonType>

        )
    }
}

export default PokemonType