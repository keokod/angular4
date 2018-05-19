import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('gmapi') gmapElement: any;

  map: google.maps.Map;
  marker: google.maps.Marker;
  getMarker:google.maps.event;
  latitude: number = 45.818127;
  longitude: number = 4.749424;
  contenu: string = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">immeuble </h1>' +
    '<div id="bodyContent">' +
    'une photo' +
    '</div>' +
    '</div>'

  latitude2: number = 46.008172;
  longitude2: number = 4.676125;

  infoPoint = new google.maps.InfoWindow({
    content: this.contenu
  })

  ngOnInit() {
    var mapProp = {
      mesMaison: {
        lat: this.latitude,
        lng: this.longitude
      },
      mesMaison2: { lat: this.latitude2, lng: this.longitude2 },
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.marker = new google.maps.Marker({
      position: mapProp.mesMaison,
      map: this.map,
      title: 'lieu A',
    });


    google.maps.event.addListener(this.marker, "click", function (data) {
      console.log( this.getTitle());


    });

    this.marker = new google.maps.Marker({
      position: mapProp.mesMaison2,
      map: this.map,
      title: 'lieu B',
    });

    google.maps.event.addListener(this.marker, "click", function (data) {
      console.log( this.getTitle());
    });

  }
 



  creerLieu() {

  }

  markerHandler(marker: google.maps.Marker) {


  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }

  getTitle() {

  }

}
