import { Component, OnInit } from '@angular/core';
import { FromStation, ToStation, NoOfTicket, TypeOfClass, Irctc } from '../../irctc.model';
import { FormService } from '../../core/form.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-irctcform',
  templateUrl: './irctcform.component.html',
  styleUrls: ['./irctcform.component.css']
})
export class IrctcformComponent implements OnInit {
  public fromStation: FromStation[];
  public toStation: ToStation[];
  public noOfTicket: NoOfTicket[];
  public typeOfTicket: TypeOfClass[];
  public irctcFormData :Irctc[];
  // data1: Irctc;

  submitted: boolean;

  // fromStation: string;
  // to: string;
  // noOfTicket: number;
  // typeOfTicket: string;
  // date: Date;
  // trainNo: number;
  profileForm = this.fb.group({
    fromStation: ['', Validators.required],
    toStation: ['', Validators.required],
    noOfTicket: ['', Validators.required],
    typeOfTicket: ['', Validators.required],
    date: ['', Validators.required],
    trainNo: ['', Validators.required]
  });
  constructor(private serviceResponce: FormService, private fb: FormBuilder) {

    this.irctcFormData =[];
    this.submitted = false;
  }
  ngOnInit() {
    this.fromStation = this.serviceResponce.getFormStation();
    this.toStation = this.serviceResponce.getToStation();
    this.noOfTicket = this.serviceResponce.getNoOfTickets();
    this.typeOfTicket = this.serviceResponce.getTypeOfTicket();
    // this.data1 = {
    //   id: null,
    //   fromStation: null,
    //   toStation: null,
    //   noOfTicket: null,
    //   typeOfTicket: null,
    //   date: null,
    //   trainNo: null
    // }
    console.log(this.noOfTicket);

  }

  onSubmit(formdata) {
    console.log("id ", formdata);

    
    this.serviceResponce.adddata(formdata).subscribe
      (tickets => {
        this.irctcFormData.push(tickets)
        this.submitted = true;
      })

  }

}
