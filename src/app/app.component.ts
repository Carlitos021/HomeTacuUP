import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tacos', url: '/folder/Inbox',  },
    { title: 'Botanas', url: '/folder/Outbox',  },
    { title: 'Alitas', url: '/folder/Favorites', },
    { title: 'Bebidas', url: '/folder/Archived', },
    { title: 'Cemitas', url: '/folder/Trash',  },
    
  ];
  
  constructor() {}
}
