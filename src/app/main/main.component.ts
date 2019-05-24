import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../shared/services/crypto/crypto.service';
import { AuthService } from '../shared/services/auth/auth.service';
import { ICrypto } from '../shared/interfaces/crypto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

public cryptos: ICrypto[];

  constructor(private _crypto: CryptoService,  public auth: AuthService,) { }

  ngOnInit() {
    this._crypto.getCurrency()
      .subscribe((res: ICrypto[]) => {
        this.cryptos = res;
      })
  }
} 
