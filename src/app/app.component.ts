import { Component } from '@angular/core';
import { ServicesService } from './services/services.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ServicesService],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
}
