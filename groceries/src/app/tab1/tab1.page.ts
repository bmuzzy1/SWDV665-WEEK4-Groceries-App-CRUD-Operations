import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery List";

items = [
  {
  name: "Milk",
  quantity: 2
  },
  
  {
    name: "Bacon",
    quantity: 3 
},
    
{
  name: "Whey Protein",
  quantity: 1
},

{
  name: "Eggs",
  quantity: 2 
},

{
  name: "Bread",
  quantity: 2
}
  
];

constructor(private toastCtrl: ToastController, private alertController: AlertController) {

}

ngOnInit() {
}

async removeItem(item, index) {
  console.log("Removing ", item, index);
  const toast = await this.toastCtrl.create({
    message: 'Removing ' + item.name,
    duration: 3000,
    position: 'top'
  });

  toast.present();

  this.items.splice(index, 1);

}
  
  addItem() {
    console.log("Adding Items");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item to Grocery List',
      message: "Input item to add to grocery list.",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name'
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'quantity'
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
          text: 'Add',
          handler: item => {
            console.log('Item added', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }

}