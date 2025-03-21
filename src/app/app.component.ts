import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myapp';
  @HostBinding('attr.app-version') appVersionAttr = environment.appVersion;
}
