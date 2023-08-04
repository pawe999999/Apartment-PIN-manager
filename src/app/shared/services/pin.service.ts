import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { Pin } from '../interfaces/pin.interface';


@Injectable({providedIn: 'root'})
export class PinService {

    public pinList$: BehaviorSubject<Pin[]>= new BehaviorSubject<Pin[]>([])

    constructor(private apiService: ApiService) {
       this.apiService.getPinList().subscribe(pinResponse => {
            this.pinList$.next(pinResponse.pins)
       })
     }
    
     public addNewPin(newValue: Pin): void {
        this.pinList$.next([...this.pinList$.value, newValue])
     }

     public deletePin(id: string): void {
        const filterd = this.pinList$.value.filter(pin => String(pin.id) !== id)
        this.pinList$.next(filterd)
     }
}