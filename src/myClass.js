class MyClass{
    constructor(){
        console.log("initiate");
    }

    add(arg1,arg2){
        var result;
        result=arg1+arg2
        return result
    }
    anotherfn(arg1,arg2){
        var result=this.add(arg1,arg2)
        return result
    }
}
export {MyClass}