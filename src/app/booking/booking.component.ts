import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBookingCheckingRetrieve } from 'src/models/booking-checking/booking-checking';
import { BookingCheckingService } from 'src/services/booking/booking-checking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  bookingMessage: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private bookingCheckingService: BookingCheckingService
  ) {
    this.bookingForm = this.formBuilder.group({
      bookingDate: [null, Validators.required],
      bookingHour: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onCheckAvailability() {
    this.bookingCheckingService
      .checking({
        resourceID: 1000,
        bookingDate: this.bookingForm.controls['bookingDate'].value,
        bookingHour: this.bookingForm.controls['bookingHour'].value,
      })
      .subscribe(
        (bookingCheckingResponse: IBookingCheckingRetrieve) => {
          if (bookingCheckingResponse.available) {
            this.bookingMessage = 'La ressource est disponible';
          } else {
            this.bookingMessage = "La ressource n'est pas disponible";
          }
        },
        (error: HttpErrorResponse) => {
          this.bookingMessage = error.error.error;
        }
      );
  }
}
