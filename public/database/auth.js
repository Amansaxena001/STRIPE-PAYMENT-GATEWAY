//databse
auth.onAuthStateChanged(user=>{
    if(user){
        db.collection('docs').get().then(snapshot=>{
            setupGuides(snapshot.docs);
            setupUI(user);
            
        });
        
    }else{
        setupUI([]);
        setupGuides([]);
        
    }
});


//sign-up
const signupForm=document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    //get info
    const email=signupForm['signup-email'].value;
    const password=signupForm['signup-password'].value;

    //sign up user
    auth.createUserWithEmailAndPassword(email,password).then(Credential=>{
        const modal=document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();

    });

});
//logout

const logout=document.querySelector('#logout');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
    
    })
})

const loginForm=document.querySelector('#login-Form');
loginForm.addEventListener('submit',(e)=>
{
    e.preventDefault();
    //get info
    const email=loginForm['login-email'].value;
    const password=loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred=>

    {
        

        const modal=document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
})

