import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {MyDreamsService} from '../../services/my-dreams.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.styl']
})
export class RecoverComponent implements OnInit {
  dataToExport: SafeUrl;
  selectedFile: File;

  constructor(private sanitizer: DomSanitizer,
              private location: Location,
              private service: MyDreamsService) { }

  ngOnInit(): void {
    this.generateDownloadJsonUri();
  }

  generateDownloadJsonUri() {
    const theJSON = JSON.stringify(this.service.getDreams());
    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    this.dataToExport = uri;
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        this.service.recoverDreams(JSON.parse(fileReader.result));
        this.goBack();
      }
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }
  goBack() {
    this.location.back();
  }

}
