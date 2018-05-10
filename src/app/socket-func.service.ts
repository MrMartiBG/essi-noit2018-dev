import * as io from 'socket.io-client';

export class SocketFuncService {
  private url = "localhost:3030";
  private socket;
  isLoggedIn = false;

  constructor() {
    this.socket = io(this.url);
    this.socket.on("server_error", function(info) {
      console.log("server_error", info);
    });
  }
  public registerUser(user, result) {
    this.socket.emit('register_user', user, result);
  }
  public registerShop(user, result) {
    this.socket.emit('register_service', user, result);
  }
  public resetPassword(user, result) {
    this.socket.emit('generate_new_password', user, result);
  }
  public loginUser(user, result) {
    this.socket.emit('login_account', user, result);
  }
  public logoutUser(result) {
    this.socket.emit('logout_account',{}, result);
  }
  public addCar(carInfo, result) {
    this.socket.emit('add_car', {brand: carInfo.brand, model: carInfo.model, generation: carInfo.generation, engine: carInfo.engine, vin_number: carInfo.vin}, result);
  }
  public fetchUserCars(result) {
    this.socket.emit('fetch_car_current_user', {}, result);
  }
  public fetchCar(car, result) {
    this.socket.emit('fetch_car_public', {id: car.id}, result);
  }
  public addServiceCar(service, car, result) {
    this.socket.emit('add_service_car', {service_id: service.id, car_id: car.id}, result);
  }
  public fetchServiceCar(service, result) {
    this.socket.emit('fetch_service_car_service', {service_id: service.id}, result);
  }
  public addServiceInfo(serviceInfo, result) {
    this.socket.emit('add_service', {name: serviceInfo.name, address: serviceInfo.address, email: serviceInfo.email, mobile: serviceInfo.mobile}, result);
  }
  public fetchServiceInfo(service, result) {
    this.socket.emit('fetch_service', {id: service.id}, result);
  }
  public addServiceUser(userInfo, serviceInfo, result) {
    this.socket.emit('add_service_user', {user_id: userInfo.id, user_type: userInfo.type, service_id: serviceInfo.id}, result);
  }
  public fetchServiceUser(service, result) {
    this.socket.emit('fetch_service_user_service', {service_id: service.service_id}, result);
  }
  public addModification(modInfo, carInfo, serviceInfo, result) {
    this.socket.emit('add_modification_service', {car_id: carInfo.id, service_id: serviceInfo.id, status: carInfo.status, mileage: carInfo.mileage, type: modInfo.type, part: modInfo.part, description: modInfo.description}, result);
  }
  public fetchModification(carInfo, result) {
    this.socket.emit('fetch_modification_current_user', {car_id: carInfo.id}, result);
  }
  public fetchCarService(carInfo, result) {
    this.socket.emit('fetch_car_service', {id: carInfo.id}, result);
  }
}
