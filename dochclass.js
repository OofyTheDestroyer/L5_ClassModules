import {ShopCart} from "./zad.js";
export class ServiceCart extends ShopCart
{
    CartType="A";
constructor(itemlist, capacity, isstaffexclusive,carttype)
    {
        super(itemlist,capacity,isstaffexclusive)
        this.CartType=carttype;
    }
get CartType()
{
 return this.CartType;
}
set CartType(value)
{
    this.CartType=value;
}
show()
{
    console.log(`The list of the items on the Service Cart: ${this.ItemList},The cart can handle ${this.Capacity} items. Is it staff only tho? That is${this.IsStaffExclusive} `)
}
delete()
{
    this.Capacity=null;
    this.CartType=null;
    this.IsStaffExclusive=null;
    this.ItemList=null;
}
static clone()
{
    return new ServiceCart(this.ItemList,this.Capacity,this.IsStaffExclusive,this.CartType);
}
}
console.log("Success")