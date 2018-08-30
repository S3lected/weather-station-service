import { Controller, Get, Param, Post, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { InsertOneWriteOpResult } from 'mongodb';
import { WeatherService, WeatherModel } from '../services/WeatherService';
import { resolve } from 'path';

@Controller("/weather")
export class WeatherController {

  //@Inject()
  //weatherService: WeatherService;


  /**
   * @swagger
   * /weather:
   *   post:
   *     description: Adds a new weather entry
   *     operationId: addWeatherEntry
   *     produces:
   *       - application/json
   *       - text/plain
   *       - text/html
   *     responses:
   *       200:
   *         description: OK
   */
  @Post('/')
  public addWeatherEntry(@Body() weather: WeatherModel) {
    console.log(weather);
    
    let response = {"function": "addWeatherEntry"}
    return response;
  }

  /**
   * @swagger
   * /weather:
   *   post:
   *     description: Get the last weather entry
   *     operationId: getWeatherEntry
   *     produces:
   *       - application/json
   *       - text/plain
   *       - text/html
   *     responses:
   *       200:
   *         description: OK
   */
  @Get('/')
  public getWeatherEntry() {
    
    let response = {"function": "getWeatherEntry"}
    return response;
  }

}