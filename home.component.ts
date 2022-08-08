import { Component, OnInit } from '@angular/core';
import { DebugService } from '../debug.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DebugService]
})
export class HomeComponent implements OnInit {

  constructor(private debugService: DebugService) { }

  ngOnInit(): void
  {
    this.debugService.info("home")
  }

}
