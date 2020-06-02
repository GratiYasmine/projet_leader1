import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Property } from 'src/app/interfaces/property';
import { PropertiesService } from 'src/app/services/properties.service';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;
  propertiesSubscription: Subscription;
  properties: any[] = [];

  indexToRemove;

  constructor(
    private formBuilder: FormBuilder,  //Un Service
    private propertiesService: PropertiesService
  ) { }

  ngOnInit() {
    this.initPropertiesForm();
    this.propertiesService.propertiesSubject.subscribe(
      (data) => {
        this.properties = data;
      }
    );
    this.propertiesService.emitProperties();
  }

  initPropertiesForm() {
    this.propertiesForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      role: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      note: '',
      phoneNumber: ['', Validators.required],
      identityCard: ['', Validators.required],
      email:['', Validators.required]
    });
  }

  onSubmitPropertiesForm() {
    const newProperty: Property = this.propertiesForm.value;
    this.propertiesService.createProperty(newProperty);
    $('#propertiesFormModal').modal('hide');
  }

  //Initialiser le formulaire
  resetForm() {
    this.propertiesForm.reset();
  }

    //Suppression des biens
    onDeleteProperty(index) {
      $('#deletePropertyModal').modal('show');
      this.indexToRemove = index;
    }

    onConfirmDeleteProperty() {
      this.propertiesService.deleteProperty(this.indexToRemove);
      $('#deletePropertyModal').modal('hide');
    }

}