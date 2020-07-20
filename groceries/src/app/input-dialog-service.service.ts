import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(private alertController: AlertController, public dataService: GroceriesServiceService) { }

async showPrompt(item?, index?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item ? 'Edit Item in Grocery List' : 'Add Item',
      message: item? "Please edit item.name in the grocery list." : "Please input item.name in the grocery list.", 
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'quantity',
          value: item ? item.quantity : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: item => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Item added', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index)
            }
            else {
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });

    await alert.present();
  }



}
