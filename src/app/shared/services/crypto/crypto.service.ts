import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ICrypto } from '../../interfaces/crypto';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private _http:HttpClient) {  }

  getCurrency(){
   return  this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
   .pipe(
     map(res =>this.setCurrencyData(res))
   )
  }

  private setCurrencyData(res): Array<ICrypto> {
    let result  = [];
    const key = Object.keys(res)
    key.forEach(inst => {
      result.push({Name:inst, USD:res[inst].USD})
    });
    return result
  }
}
