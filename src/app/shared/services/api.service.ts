import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PinResponse } from '../interfaces/pin.interface';

@Injectable({providedIn: 'root'})

export class ApiService {
    
    public getPinList(): Observable<PinResponse> {
       return of({
        listVersion: 0,
        pins: [
            {
                id: 1,
                alias: 'B PIN',
                pin: '135790',
                validFrom: '01/01/2023',
                validTo: '01/06/2023',
            },
            {
                id: 2,
                alias: 'C PIN',
                pin: '024690',
                validFrom: '01/02/2023',
                validTo: '01/07/2023',
            },
            {
                id: 3,
                alias: 'A PIN',
                pin: '192837',
                validFrom: '01/03/2023',
                validTo: '01/08/2023',
            }]
       })
    }
    
}