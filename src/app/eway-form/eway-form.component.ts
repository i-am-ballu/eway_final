import { Component, OnInit } from "@angular/core";
import { EwayForm } from "../model/eway-form.model";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-eway-form",
  templateUrl: "./eway-form.component.html",
  styleUrls: ["./eway-form.component.css"]
})
export class EwayFormComponent implements OnInit {
  ewayform: EwayForm = new EwayForm();
  // ewayfo:FormGroup;
  EwayForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public stateData: any = [
    {
      state_name: "Andaman and Nicobar Islands",
      state_code: 35
    },
    {
      state_name: "Andhra Pradesh",
      state_code: 28
    },
    {
      state_name: "Andhra Pradesh (New)",
      state_code: 37
    },
    {
      state_name: "Arunachal Pradesh",
      state_code: 12
    },
    {
      state_name: "Assam",
      state_code: 18
    },
    {
      state_name: "Bihar",
      state_code: 10
    },
    {
      state_name: "Chandigarh",
      state_code: 4
    },
    {
      state_name: "Chattisgarh",
      state_code: 22
    },
    {
      state_name: "Dadra and Nagar Haveli",
      state_code: 26
    },
    {
      state_name: "Daman and Diu",
      state_code: 25
    },
    {
      state_name: "Delhi",
      state_code: 7
    },
    {
      state_name: "Goa",
      state_code: 30
    },
    {
      state_name: "Gujarat",
      state_code: 24
    },
    {
      state_name: "Haryana",
      state_code: 6
    },
    {
      state_name: "Himachal Pradesh",
      state_code: 2
    },
    {
      state_name: "Jammu and Kashmir",
      state_code: 1
    },
    {
      state_name: "Jharkhand",
      state_code: 20
    },
    {
      state_name: "Karnataka",
      state_code: 29
    },
    {
      state_name: "Kerala",
      state_code: 32
    },
    {
      state_name: "Lakshadweep Islands",
      state_code: 31
    },
    {
      state_name: "Madhya Pradesh",
      state_code: 23
    },
    {
      state_name: "Maharashtra",
      state_code: 27
    },
    {
      state_name: "Manipur",
      state_code: 14
    },
    {
      state_name: "Meghalaya",
      state_code: 17
    },
    {
      state_name: "Mizoram",
      state_code: 15
    },
    {
      state_name: "Nagaland",
      state_code: 13
    },
    {
      state_name: "Odisha",
      state_code: 21
    },
    {
      state_name: "Pondicherry",
      state_code: 34
    },
    {
      state_name: "Punjab",
      state_code: 3
    },
    {
      state_name: "Rajasthan",
      state_code: 8
    },
    {
      state_name: "Sikkim",
      state_code: 11
    },
    {
      state_name: "Tamil Nadu",
      state_code: 33
    },
    {
      state_name: "Telangana",
      state_code: 36
    },
    {
      state_name: "Tripura",
      state_code: 16
    },
    {
      state_name: "Uttar Pradesh",
      state_code: 9
    },
    {
      state_name: "Uttarakhand",
      state_code: 5
    },
    {
      state_name: "West Bengal",
      state_code: 19
    }
  ];

  ngOnInit() {
    this.EwayForm = this.formBuilder.group({
      supplyType: ["", Validators.required],
      subSupplyType: ["", Validators.required],
      subSupplyDesc: ["", Validators.required],
      docType: ["", [Validators.required]],
      docNo: ["", [Validators.required]],
      docDate: ["", Validators.required],
      fromGstin: ["", Validators.requiredTrue],
      fromTrdName: ["", Validators.requiredTrue],
      fromAddr1: ["", Validators.requiredTrue],
      fromAddr2: ["", Validators.requiredTrue],
      fromPlace: ["", Validators.requiredTrue],
      fromPincode: ["", Validators.requiredTrue],
      actFromStateCode: ["", Validators.requiredTrue],
      toStateCode: ["", Validators.requiredTrue],
      transactionType: ["", Validators.requiredTrue],
      toGstin: ["", Validators.requiredTrue],
      toTrdName: ["", Validators.requiredTrue],
      fromStateCode: ["", Validators.requiredTrue],
      toAddr1: ["", Validators.requiredTrue],
      toAddr2: ["", Validators.requiredTrue],
      toPlace: ["", Validators.requiredTrue],
      totalValue: ["", Validators.requiredTrue],
      toPincode: ["", Validators.requiredTrue],
      sgstValue: ["", Validators.requiredTrue],
      igstValue: ["", Validators.requiredTrue],
      cessValue: ["", Validators.requiredTrue],
      cessNonAdvolValue: ["", Validators.requiredTrue],
      otherValue: ["", Validators.requiredTrue],
      totInvValue: ["", Validators.requiredTrue],
      transporterName: ["", Validators.requiredTrue],
      transporterId: ["", Validators.requiredTrue],
      transDistance: ["", Validators.requiredTrue],
      transMode: ["", Validators.requiredTrue],
      vehicleType: ["", Validators.requiredTrue],
      vehicleNo: ["", Validators.requiredTrue],
      transDocNo: ["", Validators.requiredTrue],
      transDocDate: ["", Validators.requiredTrue],
      cgstValue: ["", Validators.requiredTrue]
    });
    // this.createForm();
    this.ewayform = {
      supplyType: "O",
      subSupplyType: "1",
      subSupplyDesc: " ",
      docType: "INV",
      docNo: "111-127",
      docDate: "22/12/2017",
      fromGstin: "29AACCH2364P1Z3",
      fromTrdName: "welton",
      fromAddr1: "2ND CROSS NO 59  19  A",
      fromAddr2: "GROUND FLOOR OSBORNE ROAD",
      fromPlace: "FRAZER TOWN",
      fromPincode: 263652,
      actFromStateCode: 5,
      fromStateCode: 5,
      toGstin: "02EHFPS5910D2Z0",
      toTrdName: "sthuthya",
      toAddr1: "Shree Nilaya",
      toAddr2: "Dasarahosahalli",
      toPlace: "Beml Nagar",
      toPincode: 176036,
      actToStateCode: 2,
      toStateCode: 2,
      transactionType: 4,
      dispatchFromGSTIN: "29AAAAA1303P1ZV",
      dispatchFromTradeName: "ABC Traders",
      shipToGSTIN: "29ALSPR1722R1Z3",
      shipToTradeName: "XYZ Traders",
      otherValue: -100,
      totalValue: 56099,
      cgstValue: 0,
      sgstValue: 0,
      igstValue: 300.67,
      cessValue: 400.56,
      cessNonAdvolValue: 400,
      totInvValue: 68358,
      transporterId: "05AAACH6188F1ZM",
      transporterName: "",
      transDocNo: "",
      transMode: "1",
      transDistance: "656",
      transDocDate: "",
      vehicleNo: "PVC1234",
      vehicleType: "R",
      itemList: [
        {
          productName: "Wheat",
          productDesc: "Wheat",
          hsnCode: 1001,
          quantity: 4,
          qtyUnit: "BOX",
          cgstRate: 0,
          sgstRate: 0,
          igstRate: 3,
          cessRate: 0,
          cessNonAdvol: 0,
          taxableAmount: 5609
        }
      ]
    };
  }
  // createForm() {
  //   this.EwayForm = new FormGroup({
  //     supplyType: new FormControl("", []),
  //     subSupplyType: new FormControl("", []),
  //     subSupplyDesc: new FormControl("", []),
  //     docType: new FormControl("", []),
  //     docNo: new FormControl("", []),
  //     docDate: new FormControl("", []),
  //     fromGstin: new FormControl("", []),
  //     fromTrdName: new FormControl("", []),
  //     fromAddr1: new FormControl("", []),
  //     fromAddr2: new FormControl("", []),
  //     fromPlace: new FormControl("", []),
  //     fromPincode: new FormControl("", []),
  //     fromStateCode: new FormControl("", []),
  //     toGstin: new FormControl("", []),
  //     toTrdName: new FormControl("", []),
  //     toAddr1: new FormControl("", []),
  //     toAddr2: new FormControl("", []),
  //     toPlace: new FormControl("", []),
  //     toPincode: new FormControl("", []),
  //     totalValue: new FormControl("", []),
  //     cgstValue: new FormControl("", []),
  //     sgstValue: new FormControl("", []),
  //     igstValue: new FormControl("", []),
  //     cessValue: new FormControl("", []),
  //     cessNonAdvolValue: new FormControl("", []),
  //     totInvValue: new FormControl("", []),
  //     otherValue: new FormControl("", []),
  //     transporterName: new FormControl("", []),
  //     transporterId: new FormControl("", []),
  //     transDistance: new FormControl("", []),
  //     transMode: new FormControl("", []),
  //     vehicleType: new FormControl("", []),
  //     vehicleNo: new FormControl("", []),
  //     transDocNo: new FormControl("", []),
  //     transDocDate: new FormControl("", [])
  //   });
  // }
  submit() {
    console.log("heeeeeeeeeeee");
    // stop here if form is invalid
    if (this.EwayForm.invalid) {
      return;
    }
    console.log(this.ewayform);
  }
}
