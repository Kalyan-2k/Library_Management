function validatelogin(event)
{event.preventDefault();
    var usr=document.forms["login"]["user"].value;
    var  x=usr.search("@matrusri.edu.in");
    if(x==0)
    {
        alert("Invalid Username");
        return false;
    }    
}