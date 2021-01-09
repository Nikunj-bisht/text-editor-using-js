textfield.document.designMode = 'ON';
var cont = document.getElementById('container');
var saver = document.getElementById('savehtml');
var listitems = document.getElementById('listitems');  
 var order= document.getElementsByClassName('ordered');
   // var b1 = document.getElementsByClassName('fas fa-bold');
   // var b2 = document.getElementsByClassName('fas fa-italic');
   // var b3 = document.getElementsByClassName('fas fa-underline');
   // var b4 = document.getElementsByClassName('fas fa-palette');
   // var b5 = document.getElementsByClassName('fas fa-bold');

const all = document.querySelectorAll("button");
console.log(all);

var sotoredhtml;
var checkfont = true;


var selecteddocument=-1;


for(let i=0;i<all.length;i++){

all[i].addEventListener('click',(e)=>{
// console.log(all[i].style.background.fontcolor);

if(all[i].className == 'mybutton'){
all[i].className = 'secondbutton';

}


else{
    all[i].className = 'mybutton';

}



   var cmd = all[i].getAttribute('data-cmd');

if(cmd == 'insertHTML'){

    
   textfield.document.execCommand(cmd,false,sotoredhtml);


}

else if(cmd == 'fontSize'){

    if(checkfont){

        var fontsize = document.getElementById('numb').value;

        textfield.document.execCommand(cmd,false,fontsize);
      checkfont = false;
    }else{
        document.getElementById('numb').value =0;
        textfield.document.execCommand(cmd,false,0);
        checkfont  =true;
    }


}


else if(cmd == 'foreColor'){

var color = document.getElementById('mycolors').value;
document.getElementById("mycolors").value = '#000000';
    textfield.document.execCommand(cmd,false,color);


}

else{

   textfield.document.execCommand(cmd,false,null);

console.log(textfield.document.body.innerHTML);
//sotoredhtml = textfield.document.body.innerHTML;
sotoredhtml = textfield.value;
console.log(sotoredhtml);

}


});

}


var savedfilesarray = []; // array to store all files data



var index =0;

saver.addEventListener('click',async(e)=>{   // callback function to save file

e.preventDefault();

   order[0].innerHTML = "";

if(textfield.document.body.innerHTML == ""){

alert("Please enter some text");

}


 else  if(selecteddocument > -1){
savedfilesarray[selecteddocument] =  textfield.document.body.innerHTML;
selecteddocument = -1;
   }
else{
    savedfilesarray.push(textfield.document.body.innerHTML);

}
//textfield.document.body.innerHTML = "";


for(let i=0;i<savedfilesarray.length;i++){


   var element = `<li id="single"></li>`;
var list = document.createElement('li');


   list.id="single";
   list.setAttribute('data-cmd','insertHTML');

list.appendChild(document.createTextNode(savedfilesarray[i]));

list.addEventListener('click',(e)=>{

   var cmd = list.getAttribute('data-cmd');
selecteddocument = i;
  
   textfield.document.body.innerHTML = "";


     //  var getfile =  savedfilesarray.push(sotoredhtml);

//textfield.document.body.html = savedfilesarray[i]; 
console.log(savedfilesarray[i]);


textfield.document.execCommand(cmd,false,savedfilesarray[i]);



});

order[0].appendChild(list);

}
console.log(savedfilesarray);



});

