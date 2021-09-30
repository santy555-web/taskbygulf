var db = require('../dbconnection'); //reference of dbconnection.js file

var Task ={
    getStudentForm:function(callback)
    {
        return db.query("select * from studentlist", callback);     
    },

     getStudentFormById:function(id, callback)
     {
      return db.query("select * from studentlist where id=?",[id],callback);
     },
  
     addStudentForm:function(form,callback)
      {
        return db.query("Insert into studentlist (id,name,gender,age,mobileNo,location) values(?,?,?,?,?,?)",[    
        form.id,
        form.name, 
        form.gender, 
        form.age, 
        form.mobileNo,
        form.location
      ],callback );
      },

     deleteStudentForm:function(id,callback)
     {
        return db.query("delete from studentlist where id=?",[id],callback);
     },
     editStudentForm:function(id,form,callback)
     {
        return db.query("update studentlist set name=?, gender=?, age=?, mobileNo=?, location=? where id=?",[
          form.name,
          form.gender, 
          form.age, 
          form.mobileNo, 
          form.location, 
          id
        ],
          callback);
     },
    
    
    };


module.exports = Task;