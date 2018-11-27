import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NativeInput';
  imageSource: any;
  imgBlock: boolean;

  processImage(event: Event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imgBlock = true;
        this.imageSource = reader.result;
      }

      reader.readAsDataURL(file);
    }
  }


}
