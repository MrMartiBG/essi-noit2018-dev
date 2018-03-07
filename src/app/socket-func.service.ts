import * as io from 'socket.io-client';

export class SocketFuncService {
  private url = "localhost:3030";
  private socket;

  constructor() {
    this.socket = io(this.url);
    this.socket.on("server_error", function(info) {
      console.log("server_error", info);
    });
  }
  public registerUser(user, result) {
    this.socket.emit('register_user', user, result);
  }
  public loginUser(user, result) {
    this.socket.emit('login_user', user, result);
  }
  public logoutUser(result) {
    this.socket.emit('logout_user', result);
  }
  public addCar(carInfo, result) {
    this.socket.emit('add_car', {brand: carInfo.brand, model: carInfo.model, generation: carInfo.generation, engine: carInfo.engine, vin_number: carInfo.vin}, result);
  }
  public fetchMyCars(result) {
    this.socket.emit('fetch_my_cars', {}, result);
  }
  public addServiceCar(serviceId, carId, result) {
    this.socket.emit('add_service_car', {service_id: serviceId, car_id: carId}, result);
  }
  public fetchServiceCar(serviceId, carId, result) {
    this.socket.emit('fetch_service_car', {service_id: serviceId, car_id: carId}, result);
  }
  public addServiceInfo(serviceInfo, result) {
    this.socket.emit('add_service_info', serviceInfo, result);
  }
  public fetchServiceInfo(serviceId, result) {
    this.socket.emit('fetch_service_info', serviceId, result);
  }
  public addServiceUser(userInfo, serviceInfo, result) {
    this.socket.emit('add_service_user', {user_id: userInfo.id, user_type: userInfo.type, service_id: serviceInfo.id}, result);
  }
  public fetchServiceUser(serviceId, result) {
    this.socket.emit('fetch_service_user', {service_id: serviceId}, result);
  }
  public addModification(result) {
    //this.socket.emit('add_modification', {car_id: carId, service_id: serviceId, status: status, mileage: mileage, date: date, type: type, part: part, description: description}, result);
  }
  public fetchModification(result) {
    this.socket.emit('fetch_modification', {}, result);
  }
}
