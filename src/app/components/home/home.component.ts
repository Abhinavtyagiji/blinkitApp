import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


interface Idata{
  itemHead:{
    mainHeading: string;
    seeall: string;
  },

  content:Ichild[]
  // content jo vo ichild ka array hai..
}
interface Ichild{
  
  
    image: string;
    price: number;
    quantity: string;
    name: string;

}
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  data:Idata[] = [
    {
      itemHead:{
            mainHeading: 'Dairy,Bread & Products',
            seeall: 'see all'
      },
      content:[
        {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593' },
    
    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42139f09-bfa0-4445-9827-bae0e2f3e52b.jpg?ts=1726817074' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3ddcf321-04e9-4145-826f-553339b01ea2.jpg?ts=1727417441' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/dd323cc7-d00c-48d0-9323-72cde5e1837e.jpg?ts=1723142318' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg?ts=1712325592' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' }
  
      ]
    },
    {
      itemHead:{
        mainHeading:'dairy products',
        seeall: 'see all'
      },
      content:[
        {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' },
    
    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' },

    {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' }
  
    ]

      
    }
  ]

// itemsHeading =
//     {mainHeading:'Dairy,Bread & Products', seeall: 'see all'}
  
//   items = [
//     {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142' },

//     {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314' },

//     {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593' },
    
//     {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913' },

//     {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42139f09-bfa0-4445-9827-bae0e2f3e52b.jpg?ts=1726817074' },

//     {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/bbe1bc20-1cbe-43c5-932a-00b201db315f.jpg?ts=1707564216' },

//     {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42139f09-bfa0-4445-9827-bae0e2f3e52b.jpg?ts=1726817074' },

//     {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913' },

//     {name:'Amul Gold Full Cream Fresh Milk',quantity:'500 ml', price: 34, image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913' }
//   ]

 

  currentSlide =0;
  maxSlides = this.data[0].content?.length ?? 0; 
  //if content is undefined then return 0

  
onBackArrowClick(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

onNextArrowClick(): void {
    if (this.currentSlide < this.maxSlides - 1) {
      this.currentSlide++;
      
    }
  
    else{
      this.currentSlide--;

    }
  }


}


