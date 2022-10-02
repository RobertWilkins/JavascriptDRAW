
Drafting up a web page should, in 90% of work scenarios, be a simple objective 
achievable with simple techniques. Even today, it still isn't. The technical 
standards for front-end development - HTML, CSS, Javascript (and countless 
Javascript frameworks, with no agreement on what the leaders are) are 
mind-numblingly complex, with a learning curve that is horrible.

The Javascript DRAW project is the development of an easy-to-learn, easy-to-use 
client-side web page builder, not tying the end-user to one web application 
service provider. (You are not locked in to wix.com or wordpress.com, etc.)
This tool is being implemented in Javascript (client-side). I do not use 
server-side code with the intention of locking in the user to a specific web 
site. If the end user wishes to take their half-finished work and port it to 
another web site, they are free to do so (if the web site service supports the 
necessary data exchange standard, such technical interoperability options will 
be worked out.).

Currently the DRAW project is a solo development project. That is not my 
preference. I've done other solo development projects (Vilno Table, a Ruby 
parser, a data processing engine, etc.). I wanted - and still want - the DRAW 
project to be in the context of a different sort of applied computer science 
school (a school that is more open to trying out new ideas than most schools), 
preferably in New Hampshire. I have not gotten the political support or financial 
support for this school.

As a result, ongoing development for DRAW, design and coding, is being done by 
one developer - myself - at least for the time being.

The main component, the visual builder, is a simple idea. The web page is one 
big rectangle. With each rectangle, you can sub-divide that rectangle into N 
smaller rectangles, vertically or horizontally. For each rectangle, specify 
width and height. When specifying height, usually specify minimum height. (The 
content that goes inside can increase the height.) With a rectangle that is not 
being further sub-divided into rectangles, you may put content (rich text, 
images, and so on) into that rectangle.

When you configure any rectangle in the web page, to sub-divide it further or 
to put content into it, there is a user interface appearing just below that 
rectangle for doing that. 

The choices that the end user makes becomes a data representation that can 
either be transmitted to a server application or stored in special purpose 
local storage [ Javascript code running in the browser obviously does not have 
unrestrained access to the end-user's hard drive, so transmission or storage of 
this data representation will require some run-arounds. ] A web server that is 
familiar with this data format can receive such information and then give the 
end-user the option of downloading it, for example.

To be clear, this data representation cannot simply be the final generated HTML. 
It must more directly convey the end-user's choices, a meta-syntax that is 
converted into the final HTML. (It is unwieldly for the end user to modify his 
choices if this data representation is simply the pre-generated HTML.)


In addition to the main component, the visual builder, there is another 
component, the HTML editor. In some ways the development of the HTML editor
is actually more technical and more difficult than the main component. It's 
for reformatting plain ASCII text as rich text (i.e., as text with HTML markup)
in a way that is very user friendly. The design of the HTML editor is in 
another file.







