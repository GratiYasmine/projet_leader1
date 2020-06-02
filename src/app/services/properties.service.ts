import { Injectable } from '@angular/core';
import { Property } from '../interfaces/property';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  properties = [
    {
      fullName: 'Grati Yasmine',
      role: 'Administrateur',
      dateOfBirth: ''
    },
    {
      fullName: 'Med Saleh',
      role: 'Enseignant',
      dateOfBirth: ''
    },
    {
      fullName: 'Emna Medni',
      role: 'Eleve',
      dateOfBirth: ''
    }
  ];

  propertiesSubject = new Subject<Property[]>();

  constructor() { }

  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  getProperties() {}

  //Create User
  createProperty(property) {
    this.properties.push(property);
  }

  //Delete User
  deleteProperty(index) {
    this.properties.splice(index, 1);
    this.emitProperties();
  }

}