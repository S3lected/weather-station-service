import { Service, Inject } from 'typedi';
import { WeatherModel } from '../models/WeatherModel';
import { WeatherSwagger } from './WeatherSwagger';
import { MongoService } from './MongoService';

export class WeatherService extends MongoService {

  @Inject()
  swagger: WeatherSwagger;

  collectionName: string = 'WeatherData';

  constructor() {
    super();
    console.log(this.swagger.client);
  }

  create(obj) {
    throw new Error('todo!');
  }

  async get(id?: number) {
    let client = await this.swagger.client;
    console.log("get");
    let weather;
    // if (id) {
    //   weather = await client.weather.getPetById({ petId: id });
    // } else {
    //   weather = await client.weather.getLastWeather();
    // }
    // console.log(client);

    return new WeatherModel("ID", "ESP8266", "D1 mini", 25, 100, 999, "now");
    
   // return weather;
  }

  // async save(id: string) {
  //   let client = await this.swagger.client;
  //   console.log("save");
  //   console.log(client);
  //   let pet = await client.pet.getPetById({ petId: id });
  //   //let result = await this.insertOne(pet);
  //   return pet;
  // }

  // async update() {
  //   throw new Error('todo!');
  // }

  // async destroy() {
  //   throw new Error('todo!');
  // }

}

export { WeatherModel };