import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { DataModel } from './model/data.model';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  /* declaration */
  public dataModel = new DataModel;
  public dataFormGroup: FormGroup;
  public selected: any;
  public droppedItemIndex: number;

  /* service and form builder instances  */
  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit() {
    /* Data service method call to get Data from API  */
    this.dataService.getMockyData().subscribe((data) => {
      this.dataModel = data;
      /*Method will create the form during OnInit*/
      this.createTheForm();
    })
  }

  /* "createTheForm()" method use to create the form  */
  createTheForm() {
    this.dataFormGroup = this.fb.group({
      formList: this.fb.array([
      ])
    })
    /* Create the Form Controls */
    this.addFormListRecord();
  }

  /* ============================= FormArray Methods (Started) =========================== */

  /* addFormListRecord() method use to Create Form Controls in formList FormArray */
  addFormListRecord() {
    let formList = <FormArray>this.dataFormGroup.get('formList');
    this.dataModel.form.forEach((item) => {
      formList.push(this.fb.group({
        id: [item.id],
        caption: [item.caption],
        type: [item.type]
      }))
    });
  }

  /* removedFormListRecord() method use to Remove the controls in formList FormArray */
  removedFormListRecord(index): void {
    let formList = <FormArray>this.dataFormGroup.get('formList');
    formList.removeAt(index);
  }

  /* insertFormListRecord() method use to Insert the controls in formList FormArray */
  insertFormListRecord(index, item): void {
    let formList = <FormArray>this.dataFormGroup.get('formList');
    formList.insert(index, (this.fb.group({
      id: [item.id],
      caption: [item.caption],
      type: [item.type]

    })));
  }
  /* ============================= FormArray Methods (Ended) =========================== */


  /* getdroppedItemIndex() method will call when element list move & dropped */
  getdroppedItemIndex(event): void {
    this.droppedItemIndex = event.index;
  }

  /* itemMoved() method will call when item is moved and element list is updated in ng2-dnd-list  */
  itemMoved(index: number, list: Array<any>) {
    let droppedItem = (list[this.droppedItemIndex]);
    this.insertFormListRecord(this.droppedItemIndex, droppedItem);
    this.removedFormListRecord(index);
  }
}