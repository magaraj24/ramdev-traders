import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
 products = [
    {
      name: 'Stainless Steel Pipe',
      description: 'High-quality SS pipes suitable for industrial and commercial applications.',
      price: '₹1,200 / meter',
      image: 'assets/products/ss-pipe.png'
    },
    {
      name: 'SS Flange',
      description: 'Durable stainless steel flanges for secure pipe connections.',
      price: '₹450 / piece',
      image: 'assets/products/flange.png'
    },
    {
      name: 'Industrial Bolts',
      description: 'Heavy-duty bolts and fasteners for hardware and construction needs.',
      price: '₹25 / piece',
      image: 'assets/products/elbow.png'
    },
    {
      name: 'SS Pipe Elbow',
      description: 'Precision-engineered elbows for smooth pipe bends and connections.',
      price: '₹300 / piece',
      image: 'assets/products/elbow.png'
    },
    {
      name: 'SS Nuts',
      description: 'Corrosion-resistant stainless steel nuts for industrial use.',
      price: '₹15 / piece',
      image: 'assets/products/flange.png'
    },
    {
      name: 'SS Valve',
      description: 'Reliable stainless steel valves for fluid control systems.',
      price: '₹1,800 / piece',
      image: 'assets/products/ss-pipe.png'
    }
  ];
}
