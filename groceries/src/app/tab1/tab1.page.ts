import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery List";



constructor(private toastCtrl: ToastController, private alertController: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogServiceService) {

}

ngOnInit() {
}

loadItems() {
  return this.dataService.getItems();
}
  
async removeItem(item, index) {
  console.log("Removing ", item, index);
  const toast = await this.toastCtrl.create({
    message: 'Removing ' + item.name,
    duration: 3000,
    position: 'top'
  });

  toast.present();

  this.dataService.removeItem(index, item)

  }
  
  async editItem(item, index) {
    console.log("Editing ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing ' + item.name,
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  
    this.inputDialogService.showPrompt(item, index);
  
  }
  
  addItem() {
    console.log("Adding Items");
    this.inputDialogService.showPrompt();
  }

  


}