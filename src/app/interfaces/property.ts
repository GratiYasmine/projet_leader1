import { EmailValidator } from '@angular/forms';

//Le modele de donnees permet de definir des parametres precis
export interface Property {
    fullName: string;
    role: string;
    dateOfBirth: Date;
    placeOfBirth: string;
    note?: string;
    phoneNumber: string;
    identityCard: string;
    email: EmailValidator;
}