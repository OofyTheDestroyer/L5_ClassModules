class ServiceCart extends ShopCart
{
    CartType="A";
constructor(itemlist, capacity, isstaffexclusive,carttype)
    {
        this.ItemList=itemlist;
        this.Capacity=capacity;
        this.IsStaffExclusive=isstaffexclusive;
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
    return ServiceCart(this.ItemList,this.Capacity,this.IsStaffExclusive,this.CartType);
}
}