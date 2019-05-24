import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../shared/services/crypto/crypto.service';
import { AuthService } from '../shared/services/auth/auth.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  objectKeys = Object.keys;
  cryptos: any;

  constructor(private _crypto: CryptoService,  public auth: AuthService,) { }

  ngOnInit() {
    this._crypto.getCurrency()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res)
      })
  }

} 
