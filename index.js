import ServiceCart from 'dochclass.js';
let cart1=new  ServiceCart(["apples","beer"],30,true,"A");
let cart2=cart1.copy();
cartmass.push({cart1});
cartmass.push({cart2});
cartmass[0].show();
cartmass[1].show();