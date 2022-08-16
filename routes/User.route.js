
let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();
let user = require("../models/userSchema");
const jwt = require ('jsonwebtoken')



router.route("/create").post((req, res, next) => {

  
user.create(req.body, (error, data) => {
  if (error) {
     res.json({data:error.message,status:false});
  } else {
    console.log(data);
    res.json({data:data , status:true});
  
  }
});
});

router.route("/login").post(async(req,res)=>{

console.log(req.body)
  const us =  await user.findOne ({
    email : req.body.email,
    password:req.body.password
  })

  console.log(us)
  if (us){

    const token =jwt.sign ({
      fullName :us.fullName,
      userName: us.userName,
      email: us.email, 
      role:us.role,
      PhoneNumber:us.phoneNumber   

    },'secret123')
    return res.json({status:'ok',us:token})

  }
  else 
  {return res.json ({status:'error',us:false})}
})






router.route("/").get((req, res) => {
user.find((error, data) => {
  if (error) {
    return next(error);
  } else {
    res.json(data);
  }
});
});
router.route("/edit/:id").get((req, res) => {
user.findById(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.json(data);
  }
});
});

router.route("/update/:id").put((req, res, next) => {
user.findByIdAndUpdate(
  req.params.id,
  {
    $set: req.body,
  },
  (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log("user updated successfully !");
    }
  }
);
});
router.route("/delete/:id").delete((req, res, next) => {
user.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data,
    });
  }
});
});
module.exports = router;
