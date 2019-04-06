import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchNewsService } from '../services/search-news.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.page.html',
  styleUrls: ['./tecnologia.page.scss'],
})
export class TecnologiaPage implements OnInit {

  constructor(private serviceProvider: SearchNewsService,
    private loadingController: LoadingController,
    private route: ActivatedRoute) { 
    console.log(this.route.snapshot.paramMap.get("categoria")); 
  }

  ngOnInit() {
  }

}
