import { BadRequestException, Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axio.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    try {
      await this.pokemonModel.deleteMany({});
      const data = await this.http.get<PokeResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=151',
      );
      const pokemonRequest = data.results.map((pokemon) => {
        const name = pokemon.name;
        const id = +pokemon.url.split('/').at(-2);
        return this.pokemonModel.insertMany([{ name, id }]);
      });
      await Promise.all(pokemonRequest);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
