import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";
import { ExploreEventsByCityComponent } from "../components/explore-events-by-city/explore-events-by-city.component";
import { MostPopularComponent } from "../components/most-popular/most-popular.component";
import { ExploreEventComponent } from "../components/explore-event/explore-event.component";
import { SpotlightComponent } from "../components/spotlight/spotlight.component";
import { TrendingComponent } from "../components/trending/trending.component";
import { BrowseEventComponent } from "../components/browse-event/browse-event.component";
import { CrouselComponent } from "../components/crousel/crousel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ExploreEventsByCityComponent, MostPopularComponent, ExploreEventComponent, SpotlightComponent, TrendingComponent, BrowseEventComponent, CrouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blinkticket';
}
