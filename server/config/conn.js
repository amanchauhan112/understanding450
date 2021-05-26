const mongoose=require('mongoose')
const connection=async() =>{
try{
    const conn=await mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
console.log(`Connected to DB`)

}

catch(err){

console.log(`No DB Connected`)

    console.error(err)
    // process.exit(1)
}
}


module.exports=connection