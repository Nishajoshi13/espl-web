import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class PreferenceService {
  constructor(private db: AngularFireDatabase) {}
  
  savePreference(firstName:string,email:string,preference: boolean) {
    // Saves the checkbox preference to the "preferences" node in the database
  
    return this.db.list('users').push({ 
      firstName:firstName,
      email:email,
      preference:preference ,
  });
  }
}
