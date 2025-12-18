export class ShopCart
{
    ItemList="Milk, Soda";
    get ItemList()
{
 return this.ItemList;
}
set ItemList(value)
{
    this.ItemList=value;
}
    Capacity=20;
    get Capacity()
{
 return this.Capacity;
}
set Capacity(value)
{
    if(value>0)
    {
this.Capacity=value;
    }
    else console.log("capacity is too low");
}
    IsStaffExclusive=false;
    get IsStaffExclusive()
{
 return this.IsStaffExclusive;
}
set IsStaffExclusive(value)
{
    this.IsStaffExclusive=value;
}
show()
{
 console.log("The list of the items: ",this.ItemList," Max capacity:",this.Capacity,"Is it for personal only?: ",this.IsStaffExclusive)
}
delete()
{
    this.Capacity=null;
    this.IsStaffExclusive=null;
    this.ItemList=null;
}
copy()
{
 return new ShopCart(this.ItemList,this.Capacity,this.IsStaffExclusive);
}
static clone()
{
    return new ShopCart(this.ItemList,this.Capacity,this.IsStaffExclusive);
}
    #CapacityReached()
    {
        
        let count=this.ItemList.split(this.ItemList).length;
        if(count>this.Capacity)
        {
            console.log("Too many items. Please get rid of something")
            return false;
        }
        else if(count==this.Capacity)
            {

                return true;
            } 
        else if(count==0)
        {
            console.log("Its Empty.");
            return false;
        }
        else return true;
    }
    constructor(itemlist, capacity, isstaffexclusive)
    {
        this.ItemList=itemlist;
        this.Capacity=capacity;
        this.IsStaffExclusive=isstaffexclusive;
    }
}
console.log("Success")