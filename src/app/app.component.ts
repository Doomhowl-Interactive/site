import { afterNextRender, Component } from "@angular/core";
import { Router, RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { ionLogoGooglePlaystore, ionLogoTwitch, ionLogoYoutube } from "@ng-icons/ionicons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [CommonModule, RouterLink, RouterOutlet, RouterModule, NgIcon, NgOptimizedImage],
  providers: [provideIcons({ ionLogoGooglePlaystore, ionLogoTwitch, ionLogoYoutube })],
})
export class AppComponent {
  currentYear = new Date().getUTCFullYear();
  email = "";

  constructor(private router: Router) {
    // Hide email address from scrapers
    afterNextRender(() => {
      this.email = "doomhowl.interactive@gmail.com";
    });
  }

  goHome() {
    console.log("Navigating to home page");
    this.router.navigate(["/"]);
  }
}
