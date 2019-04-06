import { Component } from '@angular/core';
import { SearchNewsService } from '../services/search-news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public noticia:any = [];
  public noticiaRecente:any [];
  constructor(private serviceProvider: SearchNewsService){

  }

  ngOnInit(): void {
    this.getNews();
    
 console.log(new Date("2019-04-05T22:19:24Z").toLocaleString('pt-BR'));
  }

  getNews(){
    this.serviceProvider.getNewsBrazil().subscribe(
      (data:any) => {
        this.noticia = data.articles;
        
      }, error => {
        console.log(error);
      }
    )
  }

  doRefresh(event) {
    this.getNews();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

 
}
