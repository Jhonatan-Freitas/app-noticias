import { Component, OnInit } from '@angular/core';
import { SearchNewsService } from '../services/search-news.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  public noticia = [];
  private categoria:string;
  
  constructor(private serviceProvider: SearchNewsService,
    private loadingController: LoadingController,
    private route: ActivatedRoute) {
      this.categoria = route.snapshot.paramMap.get("categoria");
      console.log(this.categoria);
     }

     getCategoria(){
      this.serviceProvider.getByCategory(this.categoria).subscribe(
        (data:any) => {
          this.noticia = data.articles;
         console.log(this.noticia);
        }, error => {
          console.log(error);
        }
      )
     }
     

  ngOnInit() {
    this.getCategoria();
  }

}
