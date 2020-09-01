import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.get(ProductService);
    httpTestingController = TestBed.get(HttpTestingController);
  });


  

  it('should be created', () => {
    expect(service).toBeDefined();
  });

//   it('service testung with http client', () => {
//     const response: Product[] = [
      
// [
//   {
//     "name": "Afghanistan",
//     "topLevelDomain": [
//       ".af"
//     ],
//     "alpha2Code": "AF",
//     "alpha3Code": "AFG",
//     "callingCodes": [
//       "93"
//     ],
//     "capital": "Kabul",
//     "altSpellings": [
//       "AF",
//       "Afġānistān"
//     ],
//     "region": "Asia",
//     "subregion": "Southern Asia",
//     "population": 27657145,
//     "latlng": [
//       33.0,
//       65.0
//     ],
//     "demonym": "Afghan",
//     "area": 652230.0,
//     "gini": 27.8,
//     "timezones": [
//       "UTC+04:30"
//     ],
//     "borders": [
//       "IRN",
//       "PAK",
//       "TKM",
//       "UZB",
//       "TJK",
//       "CHN"
//     ],
//     "nativeName": "افغانستان",
//     "numericCode": "004",
//     "currencies": [
//       {
//         "code": "AFN",
//         "name": "Afghan afghani",
//         "symbol": "؋"
//       }
//     ],
//     "languages": [
//       {
//         "iso639_1": "ps",
//         "iso639_2": "pus",
//         "name": "Pashto",
//         "nativeName": "پښتو"
//       },
//       {
//         "iso639_1": "uz",
//         "iso639_2": "uzb",
//         "name": "Uzbek",
//         "nativeName": "Oʻzbek"
//       },
//       {
//         "iso639_1": "tk",
//         "iso639_2": "tuk",
//         "name": "Turkmen",
//         "nativeName": "Türkmen"
//       }
//     ],
//     "translations": {
//       "de": "Afghanistan",
//       "es": "Afganistán",
//       "fr": "Afghanistan",
//       "ja": "アフガニスタン",
//       "it": "Afghanistan",
//       "br": "Afeganistão",
//       "pt": "Afeganistão",
//       "nl": "Afghanistan",
//       "hr": "Afganistan",
//       "fa": "افغانستان"
//     },
//     "flag": "https://restcountries.eu/data/afg.svg",
//     "regionalBlocs": [
//       {
//         "acronym": "SAARC",
//         "name": "South Asian Association for Regional Cooperation",
//         "otherAcronyms": [
          
//         ],
//         "otherNames": [
          
//         ]
//       }
//     ],
//     "cioc": "AFG"
//   }
// ]
//     ]
//   });

  //Act and Assert
  // service.getProducts.subscribe((data: Product[]) =>{
  //   expect(data.length).toEqual(1);
  // })

  //Assert
  // const request = httpTestingController

});
