import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  list1: string[] = ["About", "Careers", "Blog", "Press", "Lead", "Value"];
  list2: string[] = ["About", "Careers", "Blog", "Press", "Lead", "Value"];
  list3: string[] = ["About", "Careers", "Blog", "Press", "Lead", "Value"];

  list4: string[] = ["Vegetables & Fruits", "Cold Drinks & Juices", "Bakery & Biscuits", "Dry Fruits, Masala & Oil", "Paan Corner", "Pharma & Wellness","Books","Fashion & Accessories","Pet Care"];
  list5: string[] = ["Dairy & Breakfast", "Instant & Frozen Food", "Sweet Tooth", "Sauces & Spreads", "Organic & Premium", "Cleaning Essentials","Stationery Needs","Magazines","Personal Care"];
  list6: string[] = ["Munchies", "Tea, Coffee & Health Drinks", "Atta, Rice & Dal", "Pet Care", "Baby Care", "Home & Office","Personal Care","Electronics & Electricals","Beauty & Cosmetics"];
}
