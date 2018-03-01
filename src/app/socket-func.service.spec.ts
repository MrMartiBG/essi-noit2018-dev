import { TestBed, inject } from '@angular/core/testing';

import { SocketFuncService } from './socket-func.service';

describe('SocketFuncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketFuncService]
    });
  });

  it('should be created', inject([SocketFuncService], (service: SocketFuncService) => {
    expect(service).toBeTruthy();
  }));
});
