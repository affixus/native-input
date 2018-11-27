import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NativeInput';
  imageSource1: any;
  imageSource2: any;
  
  imgBlock1: boolean;
  imgBlock2: boolean;

  processImage(event, i) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {

        if(i===1) {
          this.imgBlock1 = true;
          this.imageSource1 = reader.result;
        } else {
          this.imgBlock2 = true;
          this.imageSource2 = reader.result;
        }
      };

      reader.readAsDataURL(file);
    }
  }


}
