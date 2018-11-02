import { Injectable } from '@angular/core';
import { FromStation, ToStation, NoOfTicket, TypeOfClass, Irctc } from '../irctc.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FormService {
//create object array to store some data
  //define array
  public fromStation: FromStation[];
  public toStation:  ToStation[];
  public noOfTicket: NoOfTicket[];
  public typeOfTicket: TypeOfClass[];


  constructor(private http : HttpClient) {
    this.fromStation = [
      { fromStation: "Valsad" },
      { fromStation: "Vapi" },
      { fromStation: "Surat" },
      { fromStation: "Bilimora" },
      { fromStation: "Navsari" }
    ];
    this.toStation = [
      { toStation: "Valsad" },
      { toStation: "Vapi" },
      { toStation: "Surat" },
      { toStation: "Bilimora" },
      { toStation: "Navsari" }];
    this.noOfTicket = [
      { noOfTicket: 1 },
      { noOfTicket: 2 },
      { noOfTicket: 3 },
      { noOfTicket: 4 },
      { noOfTicket: 5 },
      { noOfTicket: 6 },
      { noOfTicket: 7 }];
    this.typeOfTicket = [
      { typeOfTicket: "AC" },
      { typeOfTicket: "nonAC" },
      { typeOfTicket: "General" }];
  }
  /**
   * get method
   */
  getFormStation():FromStation[]{
    
    return this.fromStation;
  }
  getToStation():ToStation[]{
    return this.toStation;
  }
  getNoOfTickets():NoOfTicket[]{
    return this.noOfTicket;
  }
  getTypeOfTicket():TypeOfClass[]{
    return this.typeOfTicket;
  }
  private ticketsurl = 'api/tickets';  

  getTicketData(): Observable<Irctc[]> {
    return this.http.get<Irctc[]>(this.ticketsurl)
}

adddata (tickets): Observable<Irctc> {
  return this.http.post<Irctc>(this.ticketsurl,tickets);
    
    
  
}

}