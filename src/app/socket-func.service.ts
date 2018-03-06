import * as io from 'socket.io-client';

export class SocketFuncService {
  private url = "localhost:3030";
  private socket;

  constructor() {
    this.socket = io(this.url);
  }
  public registerUser(user) {
    this.socket.emit('register_user', user);
    this.socket.on('register_user_successful', function(info) {
      console.log('register_user_successful',info);
    });
    this.socket.on('register_user_fail', function(info) {
      console.log('register_user_fail',info);
    });
  }
  public loginUser(user) {
    this.socket.emit('login_user', user);
    this.socket.on('login_user_successful', function(info) {
      console.log('login_user_successful',info);
    });
    this.socket.on('login_user_fail', function(info) {
      console.log('login_user_fail',info);
    });
  }
  public logoutUser() {
    this.socket.emit('logout_user');
    this.socket.on('logout_user_successful', function(info) {
      console.log('logout_user_successful',info);
    });
    this.socket.on('logout_user_fail', function(info) {
      console.log('logout_user_fail',info);
    });
  }
  public addCar(carInfo) {
    this.socket.emit('add_car', {brand: carInfo.brand, model: carInfo.model, generation: carInfo.generation, engine: carInfo.engine, vin_number: carInfo.vin});
    this.socket.on('add_car_successful', function(info) {
      console.log('add_car_successful',info);
    });
    this.socket.on('add_car_fail', function(info) {
      console.log('add_car_fail',info);
    });
  }
  public fetchCar() {
    this.socket.emit('fetch_car');
    this.socket.on('fetch_car_successful', function(info) {
      console.log('fetch_car_successful',info);
    });
    this.socket.on('fetch_car_fail', function(info) {
      console.log('fetch_car_fail',info);
    });
  }
  public addServiceCar(serviceId, carId) {
    this.socket.emit('add_service_car', {service_id: serviceId, car_id: carId});
    this.socket.on('add_service_car_successful', function(info) {
      console.log('add_service_car_successful',info);
    });
    this.socket.on('add_service_car_fail', function(info) {
      console.log('add_service_car_fail',info);
    });
  }
  public fetchServiceCar(serviceId, carId) {
    this.socket.emit('fetch_service_car', {service_id: serviceId, car_id: carId});
    this.socket.on('fetch_service_car_successful', function(info) {
      console.log('fetch_service_car_successful',info);
    });
    this.socket.on('fetch_service_car_fail', function(info) {
      console.log('fetch_service_car_fail',info);
    });
  }
  public addServiceInfo(serviceInfo) {
    this.socket.emit('add_service_info', serviceInfo);
    this.socket.on('add_service_info_successful', function(info) {
      console.log('add_service_info_successful',info);
    });
    this.socket.on('add_service_info_fail', function(info) {
      console.log('add_service_info_fail',info);
    });
  }
  public fetchServiceInfo(serviceId) {
    this.socket.emit('fetch_service_info', serviceId);
    this.socket.on('fetch_service_info_successful', function(info) {
      console.log('fetch_service_info_successful',info);
    });
    this.socket.on('fetch_service_info_fail', function(info) {
      console.log('fetch_service_info_fail',info);
    });
  }
  public addServiceUser(userInfo, serviceInfo) {
    this.socket.emit('add_service_user', {user_id: userInfo.id, user_type: userInfo.type, service_id: serviceInfo.id});
    this.socket.on('add_service_user_successful', function(info) {
      console.log('add_service_user_successful',info);
    });
    this.socket.on('add_service_user_fail', function(info) {
      console.log('add_service_user_fail',info);
    });
  }
  public fetchServiceUser(serviceId) {
    this.socket.emit('fetch_service_user', {service_id: serviceId});
    this.socket.on('fetch_service_user_successful', function(info) {
      console.log('fetch_service_user_successful',info);
    });
    this.socket.on('fetch_service_user_fail', function(info) {
      console.log('fetch_service_user_fail',info);
    });
  }
  public addModification() {
    /*this.socket.emit('add_modification', {car_id: carId, service_id: serviceId, status: status, mileage: mileage, date: date, type: type, part: part, description: description});
    this.socket.on('add_modification_successful', function(info) {
      console.log('add_modification_successful',info);
    });
    this.socket.on('add_modification_fail', function(info) {
      console.log('add_modification_fail',info);
    });*/
  }
  public fetchModification() {
    this.socket.emit('fetch_modification', {});
    this.socket.on('fetch_modification_successful', function(info) {
      console.log('fetch_modification_successful',info);
    });
    this.socket.on('fetch_modification_fail', function(info) {
      console.log('fetch_modification_fail',info);
    });
  }
}
