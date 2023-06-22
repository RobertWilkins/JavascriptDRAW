
/// Copyright 2023 : Robert Wilkins, graduated from Newton North High School 
///                  in 1984, in Massachusetts, USA 

/// This file holds a small number of configuration settings, stored apart from 
/// the main Javascript code directory, in order that an end-user WHO IS 
/// CONFIDENT SHE KNOWS WHAT SHE IS DOING , may judiciously change some of these
/// settings without wading through files of Javascript code.
/// Do not make changes to the main Javascript files, no matter how small these 
/// changes may be, and then complain to me that the product does not work, and 
/// not mention that you were editing the Javascript files.



/// The following sets the width and minimum-height (in pixels) for the largest box
/// (the box that is there before you start creating smaller boxes). The widths and 
/// minimum heights of any other boxes you create are constrained by these two 
/// original parameters.
/// They are typed in as integers, not as string values. Do not type 850px.
/// Type 850, and the unit px is assumed.

var root_width=600 , root_height=600 ;


/// following 6 lines for any default margin/border/padding settings that 
/// apply to leaf boxes (boxes that are not split into smaller boxes)
/// If not turned on, then the default for leaf boxes (as for non-leaf boxes)
/// is for margin/border/padding width to be all 0 .
/// Again, the implied units are pixels. Type 10 , do not type 10px .

/// For the first line, type true or false. Do not type True, False, F, or T.
var leaf_box_global_settings = true ;  // if false, this feature is turned off ;
var leaf_box_global_margin = 2 ;
var leaf_box_global_border = 2 ;
var leaf_box_global_padding = 0 ;
var leaf_box_global_border_style = "solid" ;
var leaf_box_global_border_color = "grey" ;
