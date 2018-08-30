/**
 * @swagger
 * definition:
 *   WeatherModel:
 *     type: object
 *     required:
 *       - id
 *       - deviceType
 *       - deviceModel
 *       - temperature
 *       - humidity
 *       - pressure
 *       - timestamp
 *     properties:
 *       id:
 *         type: string
 *         pattern: "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
 *         example: "a6040854-64c0-45ff-8e65-eac2be06e70c"
 *       deviceType:
 *         type: string
 *       deviceModel:
 *         type: string
 *       temperature:
 *         type: number
 *       humidity:
 *         type: number
 *       pressure:
 *         type: number
 *       timestamp:
 *         type: string
 */
export class WeatherModel {
  id: string;
  deviceType: string;
  deviceModel: string;
  temperature: number;
  humidity: number;
  pressure: number;
  timestamp: string;

  constructor(id: string, deviceType: string, deviceModel: string, temperature: number, humidity: number, pressure: number, timestamp: string) {
    this.id = id;
    this.deviceType = deviceType;
    this.deviceModel = deviceModel;
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.timestamp = timestamp;
  }

}