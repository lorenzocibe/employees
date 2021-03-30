
var cod=0;

$(document).ready(function(){
  get();
  post();
  remove();
});

function get(){
  $.ajax({
    url: 'http://localhost:8080/api/tutorial/1.0/employees',
    type:'get',
    contentType:'application/json',
    accept:"*/*",
    success: function(data){
      
      for(let i=0;i<data.length;i++){
        
        $("#employees").append("<tr><td>"+data[i]["employeeId"]+"</td><td>"+data[i]["firstName"]+"</td><td>"+data[i]["lastName"]+"</td><td>"+data[i]["email"]+"</td><td>"+data[i]["phone"]+"</td><td><input type='button' class='delete' value='remove' id='"+cod+"'></td></tr>");
        cod++;
      }
    },
    error: function(errorThrown){
      console.log(errorThrown);
    }
    
  });
}


function post(){ 
  $("#add").click(function(){  
    alert("diocane");
    var nome= $('#name').val();
    var cognome= $('#surname').val();
    var email= $('#email').val();
    var telefono= $('#phone').val();
    cod++;



    var postData= {
      "employeeId": cod,
      "firstName": nome,
      "lastName": cognome,
      "email": email,
      "phone": telefono
    };
    
    $.ajax({
      url: 'http://localhost:8080/api/tutorial/1.0/employees',
      type:'post',
      contentType:'application/json',
      data: JSON.stringify(postData),
      accept:"*/*",
      success: function(data){
        alert("employee entered");
        location.reload();
      },
      error: function(errorThrown){
        console.log(errorThrown);
      }
    });
  })
    

}


function remove() {  
  $(document).on('click', '.delete', function() {  
   var id = this.id; 
   $.ajax({  
      url: 'http://localhost:8080/api/tutorial/1.0/employees/' + id,        
      type: 'delete',        
      contentType: 'application/json',   
      accept: "*/*",        
      success: function(){     
       alert( 'employee removed correctly' );          
        location.reload();        
       },        
      error: function(errorThrown){       
        console.log( errorThrown );        
      }     
    });   
  });  
}