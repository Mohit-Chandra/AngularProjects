export class CountService{
    activeCount=0;
    inactiveCount=0;

    activeCounter()
    {
        this.inactiveCount=this.inactiveCount+1;
       // this.inactiveCount=this.inactiveCount-1;
        console.log('Active '+this.inactiveCount);

    }
    inactiveCounter(){
        this.activeCount=this.activeCount+1;
        //this.activeCount=this.activeCount-1;
        console.log('Inactive '+this.activeCount);
    }

}