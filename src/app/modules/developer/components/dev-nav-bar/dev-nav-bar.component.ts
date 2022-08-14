import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faDashboard} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dev-nav-bar',
  templateUrl: './dev-nav-bar.component.html',
  styleUrls: ['./dev-nav-bar.component.scss']
})
export class DevNavBarComponent {
  faDashboard = faDashboard;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
