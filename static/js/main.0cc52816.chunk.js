(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(3),r=a(6),s=a(4),l=a(7),o=a(0),c=a.n(o),h=a(5),d=a.n(h),u=(a(15),function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h2",null,c.a.createElement("i",{className:"fas fa-utensils"})," RecipeApp"))}),p=function(e){return c.a.createElement("div",{className:"detail"},c.a.createElement("h3",null,e.name),c.a.createElement("p",null,e.ingredients),c.a.createElement("p",null,e.instructions))},m=function(e){return c.a.createElement("div",null,c.a.createElement(g,{selectRecipes:e.selectedRecipes,searchVal:e.searchVal,handleChange:e.handleChange}),e.recipes.map(function(e){return c.a.createElement(f,{name:e.name,key:e.id})}))},g=function(e){return c.a.createElement("form",null,c.a.createElement("input",{className:"searchBar",value:e.searchVal,onChange:e.handleChange}),c.a.createElement("button",{className:"searchBtn",onClick:e.selectRecipes},"Search"))},f=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("p",{className:"recipeCard"},e.name))},b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={recipes:[{id:1,name:"Turkey Mayhem",ingredients:["Turkey","Mustard","Greens","Celery","Potato"],instructions:["Pre-heat over to 350 degrees","Tickle the turkey","Cut some celery"]},{id:2,name:"Mac and Cheese",ingredients:["Mac","Cheese"],instructions:["Put the mac in the cheese","Swish it around","Bake for 15 minutes at 350 degrees"]},{id:3,name:"Spanakopita",ingredients:["Olive oil","Onion","Garlic","Spinach"],instructions:["Put the stuff in a bowl","Cook the stuff"]},{id:4,name:"Vasilopita",ingredients:["Flower","Baking Soda","Butter","Sugar","Eggs"],instructions:["Throw everything in the air and hope it comes together","Knead the bread","Show the bread some love","Bake it at 400 degrees"]},{id:5,name:"Spicy Chicken Breasts",ingredients:["2.5 tablespoons paprika","2 tablespoons garlic powder","1 tablespoon salt","1 tablespoon thyme","4 skinless, boneless chicken breast halves","1 tablespoon cayenne pepper","1 tablespoon onion powder"],instructions:["In a medium bowl, mix together the paprika, garlic powder, salt, onion powder, thyme, cayenne pepper, and ground black pepper","Set aside about 3 tablespoons of this seasoning mixture for the chicken","Preheat grill for medium-high heat","Rub some of the reserved 3 tablespoons of seasoning onto both sides of the chicken breasts","Lightly oil the grill grate","Place chicken on the grill and cook for 6 to 8 minutes on each side, until juices run clear"]},{id:6,name:"Ceviche",ingredients:["tilapia","cilantro","tomatoes","yellow onion","limes","jalapeno","salt"],instructions:["Dice all tilapia and place in a bowl.","Squeeze lime juice over all the tilapia (enough to cover it) and add salt.","Let the tilapia sit in lime juice for about 2 hrs.","Dice all other ingredients and set aside.","After 2 hrs, mix tilapia and diced ingredients.","Enjoy with tortilla chips or tostadas :)"]},{id:7,name:"Latvian potato salad",ingredients:["Potato","appple","pickles","onion","Mayo","peas","carrotts","Sour Cream"],instructions:["Dice all ingredients and place in a bowl.","Add Mayo and Sour Cream","mix all the ingredients together","Enjoy"]}],searchVal:"",selectedRecipes:[]},a.handleChange=function(e){e.preventDefault(),a.setState({searchVal:e.target.value})},a.selectRecipes=function(e){e.preventDefault();var t=a.state.recipes.filter(function(e){return e.name.includes(a.state.searchVal)});a.setState({selectedRecipes:t})},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement(m,{recipes:this.state.recipes,searchVal:this.state.searchVal,handleChange:this.handleChange,selectedRecipes:this.selectRecipes}),c.a.createElement(p,null))}}]),t}(c.a.Component);d.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[8,2,1]]]);
//# sourceMappingURL=main.0cc52816.chunk.js.map