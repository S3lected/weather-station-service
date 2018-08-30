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
   *         description: last weather model
   *         schema:
   *           $ref: '#/definitions/WeatherModel'
   */
  @Get('/')
  public getWeatherEntry(): Promise<WeatherModel> {
    
    let promise: Promise<WeatherModel> = new Promise( (resolve, reject) => {
      const model: WeatherModel = new WeatherModel(
        "a6040854-64c0-45ff-8e65-eac2be06e70c",
        "ESP8266",
        "D1 mini",
        1,
        1,
        1,
        "2018-07-21T17:32:28Z"
      );

      resolve(model);
    });

    return promise;
  }

  /**
   * @swagger
   * /weather/{id}:
   *   get:
   *     description: Get a weather entry by id
   *     operationId: getWeatherEntryById
   *     produces:
   *       - application/json
   *       - text/plain
   *       - text/html
   *     parameters:
   *       - name: id
   *         in: path
   *         description: id of the endpoint
   *         required: true
   *         type: integer
   *         format: int32
   *     responses:
   *       200:
   *         description: last weather model
   *         schema:
   *           $ref: '#/definitions/WeatherModel'
   */
  @Get('/:id')
  public getWeatherEntryById(@Param('id') id: string) { 

    let promise: Promise<WeatherModel> = new Promise( (resolve, reject) => {
      const model: WeatherModel = new WeatherModel(
        "a6040854-64c0-45ff-8e65-eac2be06e70c",
        "ESP8266",
        "D1 mini",
        1,
        1,
        1,
        "2018-07-21T17:32:28Z"
      );

      resolve(model);
    });

    return promise;
  }

}