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
  public title:string;
  private categoria:string;
  


  constructor(private serviceProvider: SearchNewsService,private loadingController: LoadingController,private route: ActivatedRoute) {
      this.categoria = route.snapshot.paramMap.get("categoria");
      //console.log(this.categoria);
     }


    async getCategoria(){
      const loading = await this.loadingController.create({
      message: 'Carregando notícias...'
      });
        await loading.present();
          this.serviceProvider.getByCategory(this.categoria).subscribe(
            (data:any) => {
              this.noticia = data.articles;
              loading.dismiss();
            }, error => {
              console.log(error);
            }
          )
    }

     insertTitle(){
       if(this.categoria === "sport"){
         this.title = "Esporte";
       }
       else if(this.categoria === "science"){
        this.title = "Ciência";
       }
       else if(this.categoria === "technology"){
        this.title = "Tecnologia";
       }
       else if(this.categoria === "entertainment"){
        this.title = "Entreterimento";
       }
       else if(this.categoria === "business"){
        this.title = "Negócios";
       }
       else if(this.categoria === "health"){
        this.title = "Saúde";
       }
      }

  doRefresh(event) {
    this.getCategoria();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
     
  ngOnInit() {
    this.getCategoria();
    this.insertTitle();
  }

}
