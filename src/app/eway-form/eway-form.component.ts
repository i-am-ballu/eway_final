import { Component, OnInit } from '@angular/core';
import { EwayForm } from '../model/eway-form.model';
import { FormGroup, FormBuilder, Validators, FormControl ,FormArray} from '@angular/forms';

@Component({
  selector: 'app-eway-form',
  templateUrl: './eway-form.component.html',
  styleUrls: ['./eway-form.component.css']
})
export class EwayFormComponent implements OnInit {
  ewayform : EwayForm=new EwayForm ;
  // ewayfo:FormGroup;
  EwayForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm()
   this.ewayform = {"supplyType":"O",
    "subSupplyType":"1",
    "subSupplyDesc":" ",
    "docType":"INV",
    "docNo":"111-127",
    "docDate":"22/12/2017",
    "fromGstin":"29AACCH2364P1Z3",
    "fromTrdName":"welton",
    "fromAddr1":"2ND CROSS NO 59  19  A",
    "fromAddr2":"GROUND FLOOR OSBORNE ROAD",
    "fromPlace":"FRAZER TOWN",
    "fromPincode":263652,
    "actFromStateCode":5,
    "fromStateCode":5,
    "toGstin":"02EHFPS5910D2Z0",
    "toTrdName":"sthuthya",
    "toAddr1":"Shree Nilaya",
    "toAddr2":"Dasarahosahalli",
    "toPlace":"Beml Nagar",
    "toPincode":176036,
    "actToStateCode":2,
    "toStateCode":2,
    "transactionType":4,
    "dispatchFromGSTIN":"29AAAAA1303P1ZV",
    "dispatchFromTradeName":"ABC Traders",
    "shipToGSTIN":"29ALSPR1722R1Z3",
    "shipToTradeName":"XYZ Traders",
    "otherValue": -100,
    "totalValue":56099,
    "cgstValue":0,
    "sgstValue":0,
    "igstValue":300.67,
    "cessValue":400.56,
    "cessNonAdvolValue":400,
    "totInvValue":68358,
    "transporterId":"05AAACH6188F1ZM",
    "transporterName":"",
    "transDocNo":"",
    "transMode":"1",
    "transDistance":"656",
    "transDocDate":"",
    "vehicleNo":"PVC1234",
    "vehicleType":"R",
    "itemList":[{
    "productName":"Wheat",
    "productDesc":"Wheat",
    "hsnCode":1001,
    "quantity":4,
    "qtyUnit":"BOX",
    "cgstRate":0,
    "sgstRate":0,
    "igstRate":3,
    "cessRate":0,
    "cessNonAdvol":0,
    "taxableAmount":5609
    }]
  }
  }
  createForm()
  {
    this.EwayForm = new FormGroup({
      supplyType: new FormControl('', [
    
      ]),
    })

 
  }
  submit(){
    console.log(this.ewayform)
  }
}



