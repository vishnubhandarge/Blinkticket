import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-browse-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browse-event.component.html',
  styleUrl: './browse-event.component.css'
})
export class BrowseEventComponent {
  cardArray: any[] = [
    {Image: "/Blinkticket/public/images/Brows Events/party_10831592.png", Title: "Party", Description: "20 events"},
    {Image: "/Blinkticket/public/images/Brows Events/comedy_8679324.png", Title: "Comedy", Description: "20 events"},
    {Image: "/Blinkticket/public/images/Brows Events/conference_10831592.png", Title: "Conference", Description: "5 events"},
    {Image: "/Blinkticket/public/images/Brows Events/star-trek.png", Title: "Trek", Description: "20 events"},
    {Image: "/Blinkticket/public/images/Brows Events/concert_10831592.png", Title: "Concert", Description: "12 events"},
    {Image: "/Blinkticket/public/images/Brows Events/meetups_10831592.png", Title: "Meetups", Description: "2 events"},
  ]
}
