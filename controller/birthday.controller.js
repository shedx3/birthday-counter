const dateModel = require("../model/date.model");
const birthdayController = {
  checkBirthday: async (req, res) => {
    const birthday = dateModel(req.body)
     const today = new Date();
    
     let nextBirthday = new Date(
       today.getFullYear(),
       birthday.getMonth(),
       birthday.getDate()
     );

     if (nextBirthday < today) {
       nextBirthday = new Date(
         today.getFullYear() + 1,
         birthday.getMonth(),
         birthday.getDate()
       );
     }
  

     const millisecondsUntilBirthday = nextBirthday - today;
     const daysUntilBirthday = millisecondsUntilBirthday / 1000 / 60 / 60 / 24;
    const result =  `Your birthday is in ${Math.ceil(daysUntilBirthday)} day(s)!`;

     await birthday.save((err, data) => {
       if (err) {
         res.status(400).json({ status: "error trying to  create thrift" });
       } else {
         res.status(200).json({ status: "thrift added successfully", result});
       }
     });
  },
  getBirthday: async () => {},
};

module.exports = birthdayController;
