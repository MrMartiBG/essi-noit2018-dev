import * as io from 'socket.io-client';

export class SocketFuncService {
  private url = "localhost:3030";
  private socket;

  constructor() {
    this.socket = io(this.url);
  }
  public loginUser(user) {
    this.socket.emit('login_user', user);
  }
  public registerUser(user) {
    this.socket.emit('register_user', user);
  }

}
