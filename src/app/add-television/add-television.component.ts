import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TelevisionCategory } from '../televisions/TelevisionCategory';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-television',
  templateUrl: './add-television.component.html',
  styleUrls: ['./add-television.component.css']
})
export class AddTelevisionComponent {
  constructor(private http:HttpClient,private service:DataService,private router:Router,private fb: FormBuilder, private domSanitizer: DomSanitizer){
  }

  fileUploadImage: FormGroup;

  ngOnInit():void{
    console.log("hi")
    this.fileUploadImage = this.fb.group({
      imageFile: ['']
    });
  }

  imageSrc : any
  imageFile : any
television = new TelevisionCategory();

isAdded=false;

// add():void{
//   this.service.add(this.television).subscribe(data => {
//      })
//   }
  
 // selectedFile:ImageSnippet;

  processFile(imageInput: any) {
    
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      
    });

    reader.readAsDataURL(file);
  }

  imageLoad(event : any){
    console.log(event)
    const reader = new FileReader();
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
        console.log(file);

        this.fileUploadImage.get('imageFile').setValue(file); 

        this.imageFile = file
      //  this.television.televisionImage = file
        reader.onload = (e) => {
          this.imageSrc = this.domSanitizer.bypassSecurityTrustUrl(reader.result as string);
          console.log(this.imageSrc);
        }
        reader.readAsDataURL(file);
    }
setTimeout(() => { 
      var st = document.getElementById('imageId').style.display="initial";   
     //  st.style.display="initial";       
    }, 1000); 
  }

  mainSave(){
    const formData = new FormData();
      
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');


    formData.append('imageFile', this.imageFile, this.imageFile.name);
    const televisionObj = JSON.stringify(this.television)
    formData.append('televisionObj', televisionObj);
    


        this.http.post<any>('http://localhost:8081/add',  formData,{headers: headers}).subscribe(response => {
                    console.log(response)

        },
      );
  }


}
