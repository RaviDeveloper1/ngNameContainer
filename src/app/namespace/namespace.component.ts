import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-namespace',
  templateUrl: './namespace.component.html',
  styleUrls: ['./namespace.component.css']
})
export class NamespaceComponent implements OnInit {
  @Input() name: string;
  constructor() {
  }

  ngOnInit() {
  }

}
