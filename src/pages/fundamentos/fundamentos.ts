import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { U1c1Page } from '../u1c1/u1c1';

/**
 * Generated class for the FundamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fundamentos',
  templateUrl: 'fundamentos.html',
})
export class FundamentosPage {
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Bootstrap',
        'icon': 'folder-open',
        'description': 'Bootstrap es un framework o conjunto de herramientas de Código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como, extensiones de JavaScript opcionales adicionales. Bootstrap fue desarrollado por Mark Otto y Jacbod Thornton de Twitter, como un marco de trabajo (framework) para fomentar la consistencia entre las herramientas internas. Antes de Bootstrap, se usaban varias librerías para el desarrollo de interfaces de usuario, las cuales llevaban a inconsistencias y a una gran carga de trabajo en su mantenimiento.',
        'color': '#E63135'
      },
      {
        'title': 'Contenidos',
        'icon': 'folder-open',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'Plantilla',
        'icon': 'folder-open',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': 'Comunidad',
        'icon': 'folder-open',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'title': 'Diseño Responsive',
        'icon': 'folder-open',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296'
      },
      {
        'title': 'Compatibilidad',
        'icon': 'folder-open',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'Accesibilidad',
        'icon': 'folder-open',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
      {
        'title': 'Licencia',
        'icon': 'folder-open',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#412159'
      },
      {
        'title': 'Personalización',
        'icon': 'folder-open',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(U1c1Page, { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FundamentosPage');
  }



}
