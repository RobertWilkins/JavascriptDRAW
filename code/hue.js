
/// Copyright 2023 : Robert Wilkins, graduated from Newton North High School 
///                  in 1984, in Massachusetts, USA 

hue.initiate = function()
{
var request = {} ;
hue.request = request ;
hue.inp = {} ;
request.Dspec = CURRENT_BOX.Dspec ;
request.width0 = CURRENT_BOX.width0 ;
request.height0 = CURRENT_BOX.height0 ;
hue.create(request) ;
alli_container.appendChild(hue.panel) ;
scroll_up_alligator_conservative() ;
}



hue.create = function(request)
{
var nonzero_gap = false ;
var i , j , f0 , d0 ;
for(i=0;i<4;++i)
 for(j=0;j<3;++j)
  { if (request.Dspec.gap[i][j]>0) nonzero_gap = true ; }

f0 = makeForm() ;
d0 = makeDiv() ;
d0.appendChild(f0) ;


var div_label1 = simLabel("Widths: margin/border/padding the easy way") ;

let [ d1 , input1 ] = simSmallTextInput("Margin (each side)") ;
let [ d2 , input2 ] = simSmallTextInput("Border (each side)") ;
let [ d3 , input3 ] = simSmallTextInput("Padding (each side)") ;

var div_label2 = simLabel("  ") ;

let [ d1bord , input1bord ] = simTextInput("Border-color") ;
let [ d2bord , input2bord ] = simTextInput("Border-style") ;

var div_label3 = simLabel("  ") ;

let [ d1back , input1back ] = simTextInput("Background-color") ;

var div_label4 = simLabel("  ") ;
var div_label5 = simLabel("WIDTHS Margin/border/padding full detail") ;

let [ d1mt , input1mt ] = simSmallTextInput("margin-top") ;
let [ d1bt , input1bt ] = simSmallTextInput("border-top") ;
let [ d1pt , input1pt ] = simSmallTextInput("padding-top") ;

let [ d1mr , input1mr ] = simSmallTextInput("margin-right") ;
let [ d1br , input1br ] = simSmallTextInput("border-right") ;
let [ d1pr , input1pr ] = simSmallTextInput("padding-right") ;

let [ d1mb , input1mb ] = simSmallTextInput("margin-bottom") ;
let [ d1bb , input1bb ] = simSmallTextInput("border-bottom") ;
let [ d1pb , input1pb ] = simSmallTextInput("padding-bottom") ;

let [ d1ml , input1ml ] = simSmallTextInput("margin-left") ;
let [ d1bl , input1bl ] = simSmallTextInput("border-left") ;
let [ d1pl , input1pl ] = simSmallTextInput("padding-left") ;

let [ div_end , end_buttons ] = simButtonSet(["Apply","Cancel"]);

end_buttons[0].onclick = hue.hit_apply_settings ;
end_buttons[1].onclick = hue.hit_cancel ;

f0.appendChild(div_label1);
f0.appendChild(d1);
f0.appendChild(d2);
f0.appendChild(d3);
f0.appendChild(div_label2);
f0.appendChild(d1bord);
f0.appendChild(d2bord);
f0.appendChild(div_label3);
f0.appendChild(d1back);
f0.appendChild(div_label4);
f0.appendChild(div_label5);
f0.appendChild(d1mt);
f0.appendChild(d1bt);
f0.appendChild(d1pt);
f0.appendChild(d1mr);
f0.appendChild(d1br);
f0.appendChild(d1pr);
f0.appendChild(d1mb);
f0.appendChild(d1bb);
f0.appendChild(d1pb);
f0.appendChild(d1ml);
f0.appendChild(d1bl);
f0.appendChild(d1pl);
f0.appendChild(div_end);
this.panel = d0 ;

this.inp.margin  = input1 ;
this.inp.border  = input2 ;
this.inp.padding = input3 ;

this.inp.border_color = input1bord ;
this.inp.border_style = input2bord ;
this.inp.background_color = input1back ;

this.inp.marginT  = input1mt ;
this.inp.borderT  = input1bt ;
this.inp.paddingT = input1pt ;

this.inp.marginR  = input1mr ;
this.inp.borderR  = input1br ;
this.inp.paddingR = input1pr ;

this.inp.marginB  = input1mb ;
this.inp.borderB  = input1bb ;
this.inp.paddingB = input1pb ;

this.inp.marginL  = input1ml ;
this.inp.borderL  = input1bl ;
this.inp.paddingL = input1pl ;

if (nonzero_gap==true)
{ 
 this.inp.marginT.value  = request.Dspec.gap[0][0] ;
 this.inp.borderT.value  = request.Dspec.gap[0][1] ;
 this.inp.paddingT.value = request.Dspec.gap[0][2] ;

 this.inp.marginR.value  = request.Dspec.gap[1][0] ;
 this.inp.borderR.value  = request.Dspec.gap[1][1] ;
 this.inp.paddingR.value = request.Dspec.gap[1][2] ;

 this.inp.marginB.value  = request.Dspec.gap[2][0] ;
 this.inp.borderB.value  = request.Dspec.gap[2][1] ;
 this.inp.paddingB.value = request.Dspec.gap[2][2] ;

 this.inp.marginL.value  = request.Dspec.gap[3][0] ;
 this.inp.borderL.value  = request.Dspec.gap[3][1] ;
 this.inp.paddingL.value = request.Dspec.gap[3][2] ;
}


}   /// end hue.create()


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// figure out custom_mbp_go_ahead
// figure out background_color_go_ahead

hue.parse = function(request)
{
var is_a_number ;
var custom_mbp_go_ahead = false ;
var background_color_go_ahead = false ;
var i , j ;
var ip = this.inp ;
var gap = [ [0,0,0] , [0,0,0] , [0,0,0] , [0,0,0] ] ;

var u = [] ;
u[0] = parseInt(ip.margin.value) ;
u[1] = parseInt(ip.border.value) ;
u[2] = parseInt(ip.padding.value) ;

for(i=0;i<3;++i)
 { if (!isNaN(u[i]))
    { gap[0][i] = gap[1][i] = gap[2][i] = gap[3][i] = u[i] ;
      custom_mbp_go_ahead = true ;
    }
 }

var v = [ [] , [] , [] , [] ] ;

v[0][0] = parseInt(ip.marginT.value) ;
v[0][1] = parseInt(ip.borderT.value) ;
v[0][2] = parseInt(ip.paddingT.value) ;

v[1][0] = parseInt(ip.marginR.value) ;
v[1][1] = parseInt(ip.borderR.value) ;
v[1][2] = parseInt(ip.paddingR.value) ;

v[2][0] = parseInt(ip.marginB.value) ;
v[2][1] = parseInt(ip.borderB.value) ;
v[2][2] = parseInt(ip.paddingB.value) ;

v[3][0] = parseInt(ip.marginL.value) ;
v[3][1] = parseInt(ip.borderL.value) ;
v[3][2] = parseInt(ip.paddingL.value) ;

for(i=0;i<4;++i)
  for(j=0;j<3;++j)
    { if (!isNaN(v[i][j])) 
      { custom_mbp_go_ahead = true ;
        gap[i][j] = v[i][j] ;
      }
    }


if (ip.background_color.value !== "")
   background_color_go_ahead = true ;

request.background_color_go_ahead = background_color_go_ahead ;
request.background_color = ip.background_color.value ;

request.border_color = "black" ;
if (ip.border_color.value !== "")
   request.border_color = ip.border_color.value ;
request.border_style = "solid" ;
if (ip.border_style.value !== "")
   request.border_style = ip.border_style.value ;

request.custom_mbp_go_ahead = custom_mbp_go_ahead ;
request.gap = gap ;

}  /// end hue.parse() 



//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

hue.hit_apply_settings = function()
{

hue.parse(hue.request) ;

if (hue.request.background_color_go_ahead)
   change_background_color(hue.request.background_color) ;

if (hue.request.custom_mbp_go_ahead)
   modify_widths_heights_because_custom_mbp_install(hue.request) ;
   ///  inside this function : update_position_of_alligator()

hue.clear() ;
alli_container.innerHTML = "" ;
reset_back_to_default_alli()
/// HERE? scroll_up_alligator() ;  NO, reset_back_to will do that for you
}



hue.hit_cancel = function()
{
alli_container.innerHTML = "" ;
hue.clear() ;
reset_back_to_default_alli() ;
}

hue.clear = function()
{
hue.inp = {} ;
hue.panel = undefined ;
hue.request = undefined ;
}



function change_background_color(str_color)
{
if (str_color==undefined || str_color=="") return ;
CURRENT_BOX.Dspec.background_color = str_color ;
CURRENT_BOX.Dref.style.backgroundColor = str_color ;
}

