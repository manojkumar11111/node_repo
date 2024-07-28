const express=require("express");
const app=express();

const user=[{
    name :"manoj",
     kidney : [{
        healthy:false,
    }]
}]

app.get("/",function(req,res){
    const total=user[0].kidney.length;
    const healthyKid=0;
    for(let i=0;i<total;i++){
        if(total[i].healthy){
            healthyKid +=1;
        }
    }
    return healthyKid;
    const unHealthy=total-healthyKid;
    return unHealthy;

    res.json({
        total,
        healthyKid,
        unHealthy
    })
})
app.listen(2000)