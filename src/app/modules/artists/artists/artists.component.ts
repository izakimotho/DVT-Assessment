import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.services';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  spinnerType = SPINNER.circle;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public api: ApiService, 
    private ngxLoader: NgxUiLoaderService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.ngxLoader.start();
  }

}
