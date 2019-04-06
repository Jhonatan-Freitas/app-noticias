import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Principais Notícias',
      url: '/home',
      icon: 'globe'
    },
    {
      title: 'Esportes',
      url: '/categoria/sport',
      icon: 'football'
    },
    {
      title: 'Tecnologia',
      url: '/categoria/sport',
      icon: 'save'
    },
    {
      title: 'Ciência',
      url: '/categoria/science',
      icon: 'flask'
    },
    {
      title: 'Saúde',
      url: '/categoria/health',
      icon: 'heart'
    },
    {
      title: 'Entreterimento',
      url: '/categoria',
      icon: 'logo-game-controller-b'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
