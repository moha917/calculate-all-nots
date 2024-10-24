let m11 = document.getElementById('m11');
let m12 = document.getElementById('m12');
let m13 = document.getElementById('m13');
let m21 = document.getElementById('m21');
let m22 = document.getElementById('m22');
let m23 = document.getElementById('m23');
let m31 = document.getElementById('m31');
let m32 = document.getElementById('m32');
let m33 = document.getElementById('m33');
let m41 = document.getElementById('m41');
let m42 = document.getElementById('m42');
let m43 = document.getElementById('m43');
let m51 = document.getElementById('m51');
let m52 = document.getElementById('m52');
let m53 = document.getElementById('m53');
let m61 = document.getElementById('m61');
let m62 = document.getElementById('m62');
let m63 = document.getElementById('m63');
let m71 = document.getElementById('m71');
let m72 = document.getElementById('m72');
let m73 = document.getElementById('m73');
let m81 = document.getElementById('m81');
let m82 = document.getElementById('m82');
let m83 = document.getElementById('m83');
let m91 = document.getElementById('m91');
let m92 = document.getElementById('m92');
let m93 = document.getElementById('m93');
let m101 = document.getElementById('m101');
let m102 = document.getElementById('m102');
let m103 = document.getElementById('m103');
let total = document.getElementById('total')
let w = document.getElementById('w');
let oa = document.querySelector('.a');
let update = document.querySelector('.update');
let smaller = document.querySelector('.small');
let m1 = document.querySelector('.m1');
let m2 = document.querySelector('.m2');
let m3 = document.querySelector('.m3');
let m4 = document.querySelector('.m4');
let m5 = document.querySelector('.m5');
let m6 = document.querySelector('.m6');
let m7 = document.querySelector('.m7');
let m8 = document.querySelector('.m8');
let m9 = document.querySelector('.m9');
let m10 = document.querySelector('.m10');
let rt = document.querySelector('.rt');
let result;
 //get total
function getTotal()
{    m13.value = (+m11.value * +m12.value);  m13.innerHTML = m13.value;
    m23.value = (+m21.value * +m22.value); m23.innerHTML = m23.value;
    m33.value = (+m31.value * +m32.value); m33.innerHTML = m33.value;
    m43.value = (+m41.value * +m42.value); m43.innerHTML = m43.value;
    m53.value = (+m51.value * +m52.value); m53.innerHTML = m53.value;
    m63.value = (+m61.value * +m62.value); m63.innerHTML = m63.value;
    m73.value = (+m71.value * +m72.value); m73.innerHTML = m73.value;
    m83.value = (+m81.value * +m82.value); m83.innerHTML = m83.value;
    m93.value = (+m91.value * +m92.value); m93.innerHTML = m93.value;
    m103.value = (+m101.value * +m102.value); m103.innerHTML = m103.value;


}
// create 
 function fire()
 {   
   if(w.value == 5)
   {
         w.value = '';
      oa.style.display = 'block';
      update.style.display = 'none';
      m6.style.display = 'none';
     m7.style.display = 'none';
     m8.style.display = 'none';
     m9.style.display = 'none';
     m10.style.display = 'none';
    
   }
   else if(w.value == 6)
    {   
    w.value = '';
       oa.style.display = 'block';
       update.style.display = 'none';
       m6.style.display = 'block';
      m7.style.display = 'none';
      m8.style.display = 'none';
      m9.style.display = 'none';
      m10.style.display = 'none';
    
    }
    else if(w.value == 7)
    {   
       w.value = '';
       oa.style.display = 'block';
       update.style.display = 'none';
       m6.style.display = 'block';
       m7.style.display = 'block';
      m8.style.display = 'none';
      m9.style.display = 'none';
      m10.style.display = 'none';
     
    } 
    else if(w.value == 8)
    { 
        w.value = '';
       oa.style.display = 'block';
       update.style.display = 'none';
       m6.style.display = 'block';
       m7.style.display = 'block';
      m8.style.display = 'block';
      m9.style.display = 'none';
      m10.style.display = 'none';
     
    }
     else if(w.value == 9)
    {   
      w.value = '';
       oa.style.display = 'block';
       update.style.display = 'none';
       m6.style.display = 'block';
       m7.style.display = 'block';
      m8.style.display = 'block';
      m9.style.display = 'block';
      m10.style.display = 'none';
     
    }
    else if(w.value == 10)
    {   
      w.value = '';
       oa.style.display = 'block';
       update.style.display = 'none';
       m6.style.display = 'block';
       m7.style.display = 'block';
      m8.style.display = 'block';
      m9.style.display = 'block';
      m10.style.display = 'block';
      
    }
    else
    {
      oa.style.display = 'none';

    }

    if( oa.style.display == 'block')
    {
       rt.style.display = 'block'
    }
    else
    {
      rt.style.display = 'none';
    }


 }
 // calculate data
function calcy()
{     if( m12.value != '' && m22.value != '' && m32.value != '' && m42.value != '' && m52.value != ''   )
{ let z = (+m12.value + +m22.value + +m32.value + +m42.value + +m52.value);
getTotal();
let result = (+m13.value + +m23.value + +m33.value + +m43.value + +m53.value )/z;
   
     total.innerHTML = result;
    smaller.style.display = 'block';
} 
else if( m12.value != '' && m22.value != '' && m32.value != '' && m42.value != '' && m52.value != '' && m62.value != ''   )
{ 
  let z = (+m12.value + +m22.value + +m32.value + +m42.value + +m52.value + +m62.value );
getTotal();
let result = (+m13.value + +m23.value + +m33.value + +m43.value + +m53.value + +m63.value )/z;

     total.innerHTML = result;
    smaller.style.display = 'block';
}
 else if( m12.value != '' && m22.value != '' && m32.value != '' && m42.value != '' && m52.value != '' && m62.value != '' && m72.value != ''   )
{ let z = (+m12.value + +m22.value + +m32.value + +m42.value + +m52.value + +m62.value + +m72.value );
getTotal();
let result = (+m13.value + +m23.value + +m33.value + +m43.value + +m53.value + +m63.value + +m73.value )/z;

     total.innerHTML = result;
    smaller.style.display = 'block';
}
 else if( m12.value != '' && m22.value != '' && m32.value != '' && m42.value != '' && m52.value != '' && m62.value != '' && m72.value != '' && m82.value != ''   )
{ let z = (+m12.value + +m22.value + +m32.value + +m42.value + +m52.value + +m62.value + +m72.value + +m82.value );
getTotal();
let result = (+m13.value + +m23.value + +m33.value + +m43.value + +m53.value + +m63.value + +m73.value + +m83.value )/z;

     total.innerHTML = result;
    smaller.style.display = 'block';
}
    else if( m12.value != '' && m22.value != '' && m32.value != '' && m42.value != '' && m52.value != '' && m62.value != '' && m72.value != '' && m82.value != '' && m92.value != '' )
{ let z = (+m12.value + +m22.value + +m32.value + +m42.value + +m52.value + +m62.value + +m72.value + +m82.value + +m92.value);
getTotal();
let result = (+m13.value + +m23.value + +m33.value + +m43.value + +m53.value + +m63.value + +m73.value + +m83.value + +m93.value )/z;

     total.innerHTML = result;
    smaller.style.display = 'block';
}
   else ( m12.value != '' && m22.value != '' && m32.value != '' && m42.value != '' && m52.value != '' && m62.value != '' && m72.value != '' && m82.value != '' && m92.value != '' && m102.value != ''  )
   { let z = (+m12.value + +m22.value + +m32.value + +m42.value + +m52.value + +m62.value + +m72.value + +m82.value + +m92.value + +m102.value);
   getTotal();
   let result = (+m13.value + +m23.value + +m33.value + +m43.value + +m53.value + +m63.value + +m73.value + +m83.value + +m93.value + +m103.value)/z;

        total.innerHTML = result;
       smaller.style.display = 'block';
   }
      

    

    
}
//return in last page
function ret()
{
   rt.style.display = 'none';
   oa.style.display = 'none';
   smaller.style.display = 'none';
   update.style.display = 'block';
   m11.value = '';
   m12.value = '';
   m13.value = '';
   m21.value = '';
   m22.value = '';
   m23.value = '';
   m31.value = '';
   m32.value = '';
   m33.value = '';
   m41.value = '';
   m42.value = '';
   m43.value = '';
   m51.value = '';
   m52.value = '';
   m53.value = '';
   m61.value = '';
   m62.value = '';
   m63.value = '';
   m71.value = '';
   m72.value = '';
   m73.value = '';
   m81.value = '';
   m82.value = '';
   m83.value = '';
   m91.value = '';
   m92.value = '';
   m93.value = '';
   m101.value = '';
   m102.value = '';
   m103.value = '';
   
}


















