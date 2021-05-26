module.exports={
    ensureAuth:(req,res,next)=>{
        if(req.isAuthenticated()){
            return next()
        }
        else{
            res.redirect('http://localhost:3000/login')
        }
    },
    ensureGuest:(req,res,next)=>{
        if(req.isAuthenticated()){
// res.json('dashboard')
            // res.redirect('http://localhost:3000/')

            // res.send('dashboard')
            // return next()
            res.status(200).send("logged in");
            console.log("logged in")

        }
        else{

            console.log("err in")
            res.status(400).send("error in");

            // res.redirect('http://localhost:3000/login')
res.json('dashboard')
            // return next()
        }
    },

}
