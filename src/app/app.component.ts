import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { YoutubePage } from '../pages/youtube/youtube';
import { NewsPage } from '../pages/news/news';
import { GradePage } from '../pages/grade/grade';
//import { LoginPage } from '../pages/login/login';
//import { AboutPage } from '../pages/about/about';
//import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  //rootPage: any = LoginPage;
  //rootPage: any = AboutPage;
  //rootPage: any = RegisterPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าแรก', component: HomePage },
      { title: 'ผลการเรียน', component: GradePage },
      { title: 'ช่องรายการยูทูป', component: YoutubePage },
      { title: 'ข่าวสารปัจจุบัน', component: NewsPage},
      { title: 'ผู้จัดทำ', component: AboutPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
