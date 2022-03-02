export interface IBookingChecking {
  resourceID: number;
  bookingDate: string;
  bookingHour: string;
}

export interface IBookingCheckingRetrieve {
  available: boolean;
  error: string;
}
