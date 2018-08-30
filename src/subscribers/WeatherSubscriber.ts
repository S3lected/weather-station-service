import { EventSubscriber, On } from 'event-dispatch';

@EventSubscriber()
export class WeatherSubscriber {

  @On('onWeatherCreate')
  onWeatherCreate({ socket, name }) {
    console.log('name', socket, name);
  }

}