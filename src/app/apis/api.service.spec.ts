import { TestBed, inject } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

import { ApiService } from './api.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';


describe('ApiService', () => {
  let service: ApiService;
  let http: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, provideHttpClient()]
    });

    service = TestBed.inject(ApiService);
    http = jasmine.createSpyObj('HttpClient', ['get'])
  });

  afterEach(() => {
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });  
});


