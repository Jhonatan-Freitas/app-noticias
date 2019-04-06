import { Component } from '@angular/core';
import { SearchNewsService } from '../services/search-news.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public noticia:any = [];
  public noticiaRecente:any [];
  public categoria:string;
  constructor(private serviceProvider: SearchNewsService,
    private loadingController: LoadingController, private route: ActivatedRoute){
      
      this.categoria = this.route.snapshot.paramMap.get('categoria');
      console.log(this.categoria);
  }

  ngOnInit(): void {
    this.getNews();
  }

  async getNews(){
    const loading = await this.loadingController.create({
      message: 'Carregando notícias...'
});
await loading.present();
    this.serviceProvider.getNewsBrazil().subscribe(
      (data:any) => {
        this.noticia = data.articles;
        loading.dismiss();
      }, error => {
        console.log(error);
      }
    )
  }

  doRefresh(event) {
    this.getNews();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
 
}
