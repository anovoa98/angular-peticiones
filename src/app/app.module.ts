import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GitSearchService } from './git.service';
import { GitSearchService } from './git-search.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GitSearchService]
})


export class AppModule { 
  ngOnInit(){
    this.GitSearchService.gitSearch('java').then((response)=>{
      alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    }) 
  }
  constructor(private GitSearchService: GitSearchService){

  }
  
}


