var firebaseConfig = {
    apiKey: "AIzaSyB_fnGTAeo9qnF6ysge5wQyOPtFyR49kjc",
   authDomain: "angular-f45e3.firebaseapp.com",
   databaseURL: "https://angular-f45e3.firebaseio.com",
   projectId: "angular-f45e3",
   storageBucket: "angular-f45e3.appspot.com",
   messagingSenderId: "168030236041",
   appId: "1:168030236041:web:cc1139b50b7b95eb27c558",
   measurementId: "G-3N38GPN12H"
 };
 // Initialize Firebase
//  var provider = new firebase.auth.GoogleAuthProvider();
 firebase.initializeApp(firebaseConfig);
 
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  if(firstname==null || lastname==null || email==null || subject==null || message==null){
    window.alert('cannot be empty')
}else{


saveMessage(firstname, lastname, email, subject, message);
setTimeout( function ( ) { alert( "SUCCESSFULLY SUBMITTED" ); }, 3000 ); 

}

  

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, email, subject, message){
    
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname: lastname,
    email: email,
    subject: subject,
    message: message
  });
    
}
