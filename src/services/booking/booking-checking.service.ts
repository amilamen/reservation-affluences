import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IBookingChecking,
  IBookingCheckingRetrieve,
} from 'src/models/booking-checking/booking-checking';
import { URL_BOOKING } from 'src/utils/constant';

@Injectable({
  providedIn: 'root',
})
export class BookingCheckingService {
  constructor(private httpClient: HttpClient) {}

  checking(
    bookingPayload: IBookingChecking
  ): Observable<IBookingCheckingRetrieve> {
    return this.httpClient.get<IBookingCheckingRetrieve>(
      `${URL_BOOKING}${bookingPayload.resourceID}/available?datetime=${bookingPayload.bookingDate}T${bookingPayload.bookingHour}Z`
    );
  }
}
