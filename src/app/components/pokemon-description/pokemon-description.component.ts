import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../../services/pokemon-api.service';
import { Pokemon } from '../../models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.css']
})
export class PokemonDescriptionComponent implements OnInit {

  pokemon: Pokemon = {name: '', url: '', sprites: {front_default: ''}};

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonAPIService,
    private location: Location
  ) {  }

  ngOnInit(): void {
    this.fetchPokemon();
  }

  fetchPokemon(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.fetchPokemon(id)
      .subscribe(data => this.pokemon = data);
  }

  goBack(): void {
    this.location.back();
  }

}
