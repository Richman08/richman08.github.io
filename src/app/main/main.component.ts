import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../shared/services/crypto/crypto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  cryptos = [
    {name: 'Bitcoin', rate: '8000'},
    {name: 'Ethereum', rate: '0.256'},
    {name: 'XRP', rate: '3513'}
  ]
  constructor(public crypto: CryptoService) {
   }

  ngOnInit() {
  }

}
