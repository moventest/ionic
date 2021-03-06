import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('myNav') navCtrl: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    translate: TranslateService
  ) {
    platform.ready().then(() => {
      console.log('DEBUG -- platform.ready triggered -- ' + new Date().getTime());

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('fr');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('fr');

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.navCtrl.setRoot('page-home');
    });
  }
}

