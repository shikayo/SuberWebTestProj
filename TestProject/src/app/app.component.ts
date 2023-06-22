import { Component } from "@angular/core"
import { University } from "./Services/university";
import { ApiCallService } from "./Services/api-call-service.service";
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  searchForm: any={
    name: '',
    country: ''
  }

  search(){

    if (this.searchForm.country!=null && this.searchForm.name!=null){
      this.apicallservice.searchUniversityByNameAndCountry(this.searchForm.name,this.searchForm.country).subscribe(data=>(
        this.listUniversitys=data,
        this.dataSource=new MatTableDataSource(this.listUniversitys)
      ))
    }else{
      this.apicallservice.searchUniversityByName(this.searchForm.name).subscribe(data=>(
        this.listUniversitys=data,
        this.dataSource=new MatTableDataSource(this.listUniversitys)
      ))
    }

    console.log(this.searchForm.name)
  }
  
  listUniversitys!: University[];

  constructor(private apicallservice: ApiCallService){

  }

  ngOnInit(){
    this.fetchUniversity();
  }

  dataSource: any;

  fetchUniversity(){
    this.apicallservice.getUniversity().subscribe(data=>(
      this.listUniversitys=data,
      this.dataSource=new MatTableDataSource(this.listUniversitys),
      console.log('list of countries',this.listUniversitys)
    ))
  }

  displayedColumns: string[] = ['alpha_two_code','country','name'];

  title = 'TestProject';
}
