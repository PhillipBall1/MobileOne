import { Component, AfterViewInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared-service.service';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-locations-map',
  standalone: true,
  templateUrl: './locations-map.component.html',
  styleUrls: ['./locations-map.component.css'],
})
export class LocationsMapComponent implements AfterViewInit {
  map!: google.maps.Map;
  geocoder!: google.maps.Geocoder;
  marker!: google.maps.Marker | null; // To store the marker
  cities: { name: string; coords: { lat: number; lng: number } }[] = [];

  constructor(private sharedService: SharedService, private backendService: BackendService) {
    this.cities = this.sharedService.cities;
  }

  async ngAfterViewInit(): Promise<void> {
    try {
      await this.loadGoogleMapsApi();
      this.initMap();
    } catch (error) {
      console.error('Failed to load Google Maps API:', error);
      alert('Unable to load the map. Please try again later.');
    }
  }

  private loadGoogleMapsApi(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCBgCWT4eFPYlQsc12x5ePn_L-zyma0gJ0&libraries=places`;
      script.async = true;
      script.defer = true;

      script.onload = () => resolve();
      script.onerror = (error) => reject(error);

      document.head.appendChild(script);
    });
  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 33.4484, lng: -112.0740 }, // Phoenix, AZ
      zoom: 7,
    });

    this.geocoder = new google.maps.Geocoder();

    // Optionally add city markers
    this.addCityMarkers();
  }

  addCityMarkers(): void {
    this.cities.forEach((city) => {
      const marker = new google.maps.Marker({
        position: city.coords,
        map: this.map,
        title: city.name,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<div style="font-size: 14px; font-weight: bold;">${city.name}</div><p>City covered.</p>`,
      });

      marker.addListener('click', () => {
        infoWindow.open(this.map, marker);
      });
    });
  }

  submitZipCode(): void {
    const zipCode = (document.getElementById('zipcode') as HTMLInputElement).value;

    if (!zipCode) {
      alert('Please enter a zip code.');
      return;
    }

    this.geocoder.geocode({ address: zipCode }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        const location = results[0].geometry.location;

        this.map.setCenter(location);
        this.map.setZoom(12);

        if (this.marker) {
          this.marker.setMap(null);
        }

        this.marker = new google.maps.Marker({
          map: this.map,
          position: location,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<div style="font-size: 14px; font-weight: bold;">Zip Code: ${zipCode}</div>`,
        });

        this.marker.addListener('click', () => {
          infoWindow.open(this.map, this.marker!);
        });

        infoWindow.open(this.map, this.marker!);
      } else {
        alert('Could not find the location for the entered zip code.');
      }
    });
  }
}
