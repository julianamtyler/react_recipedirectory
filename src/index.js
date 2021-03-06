import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = () => (
  <div className="header">
    <h2><i className="fas fa-utensils"></i> Find your Next Recipe</h2>
  </div>
);


const DirectoryView = (props) => (
  <div className="box">
    <SearchForm recipes={props.recipes} selectRecipes={props.selectRecipes} searchVal={props.searchVal} handleChange={props.handleChange} />
    {props.selectedRecipes.map(recipe =>
      <RecipeCard onClick={props.toggleClass} name={recipe.name} id={recipe.id} key={recipe.id} detailRecipe={props.detailRecipe} />)}
  </div>
);


const SearchForm = (props) => (
  <form>
    <input className="searchBar" value={props.searchVal} onChange={props.handleChange} />
    <button className="searchBtn" onClick={props.selectRecipes}>Search</button>
  </form>
);


const RecipeCard = (props) => (
  <div className="card" onClick={() => props.detailRecipe(props.id)}>
    <p className="recipeCard">{props.name}</p>
  </div>
);

const DetailView = (props) => (
  <div className="detail">
    <div className="title">
      {props.detailedRecipe.name}
    </div>
    <div  className="ingredients">
      <ul>
        {props.detailedRecipe.ingredients ? props.detailedRecipe.ingredients.map(ingredient => <li >{ingredient}</li>) : null}
      </ul>
    </div>
    <div  className="directions">
      <ul>
        {props.detailedRecipe.instructions ? props.detailedRecipe.instructions.map(instruction => <li >{instruction}</li>) : null}
      </ul>
    </div>
  </div>
);


class App extends React.Component {
  state = {
    recipes: [
      {
        id: 1,
        name: "Turkey Mayhem",
        ingredients: ["Turkey", "Mustard", "Greens", "Celery", "Potato"],
        instructions: [
          "Pre-heat over to 350 degrees",
          "Tickle the turkey",
          "Cut some celery"
        ]
      },
      {
        id: 2,
        name: "Mac and Cheese",
        ingredients: ["Mac", "Cheese"],
        instructions: [
          "Put the mac in the cheese",
          "Swish it around",
          "Bake for 15 minutes at 350 degrees"
        ]
      },
      {
        id: 3,
        name: "Spanakopita",
        ingredients: ["Olive oil", "Onion", "Garlic", "Spinach"],
        instructions: ["Put the stuff in a bowl", "Cook the stuff"]
      },
      {
        id: 4,
        name: "Vasilopita",
        ingredients: ["Flower", "Baking Soda", "Butter", "Sugar", "Eggs"],
        instructions: [
          "Throw everything in the air and hope it comes together",
          "Knead the bread",
          "Show the bread some love",
          "Bake it at 400 degrees"
        ]
      },
      {
        id: 5,
        name: "Spicy Chicken Breasts",
        ingredients: [
          "2.5 tablespoons paprika",
          "2 tablespoons garlic powder",
          "1 tablespoon salt",
          "1 tablespoon thyme",
          "4 skinless, boneless chicken breast halves",
          "1 tablespoon cayenne pepper",
          "1 tablespoon onion powder"
        ],
        instructions: [
          "In a medium bowl, mix together the paprika, garlic powder, salt, onion powder, thyme, cayenne pepper, and ground black pepper",
          "Set aside about 3 tablespoons of this seasoning mixture for the chicken",
          "Preheat grill for medium-high heat",
          "Rub some of the reserved 3 tablespoons of seasoning onto both sides of the chicken breasts",
          "Lightly oil the grill grate",
          "Place chicken on the grill and cook for 6 to 8 minutes on each side, until juices run clear"
        ]
      },
      {
        id: 6,
        name: "Ceviche",
        ingredients: [
          "tilapia",
          "cilantro",
          "tomatoes",
          "yellow onion",
          "limes",
          "jalapeno",
          "salt"
        ],
        instructions: [
          "Dice all tilapia and place in a bowl.",
          "Squeeze lime juice over all the tilapia (enough to cover it) and add salt.",
          "Let the tilapia sit in lime juice for about 2 hrs.",
          "Dice all other ingredients and set aside.",
          "After 2 hrs, mix tilapia and diced ingredients.",
          "Enjoy with tortilla chips or tostadas :)"
        ]
      },
      {
        id: 7,
        name: "Latvian potato salad",
        ingredients: [
          "Potato",
          "appple",
          "pickles",
          "onion",
          "Mayo",
          "peas",
          "carrotts",
          "Sour Cream"
        ],
        instructions: [
          "Dice all ingredients and place in a bowl.",
          "Add Mayo and Sour Cream",
          "mix all the ingredients together",
          "Enjoy"

        ]
      },
      {
        id: 8,
        name: "Italian Chicken",
        ingredients: [
          "2 cups green beans",
          "2-3 medium russet potatoes",
          "2-3 large chicken breasts thawed or fresh",
          "1 pkg Italian dressing mix",
          "8 tbsp butter",
          "Salt and pepper"
        ],
        instructions: [
          "Preheat the oven to 350 degrees",
          "Wash the green beans and potatoes",
          "Peel the potatoes and cut into small cubes",
          "Slice green beans into bite size pieces",
          "Line one side of a 9x13 baking dish with green beans and line the other with the chunks of potato",
          "Place the chicken breast between the green beans and potatoes. (I sliced my chicken in half to make thinner pieces of meat)",
          "Cut the butter into 1 tbsp squares and place evenly over the green beans, chicken, and potatoes",
          "Sprinkle entire dish with Italian seasoning, salt, and pepper",
          "Cover with foil and bake for one hour"
        ]
      },
      {
        id: 9,
        name: "Pork Chops with Fresh Tomato, Onion, Garlic, and Feta",
        ingredients: [
          "2 tablespoons olive oil, divided",
          "1/2 pint red grape tomatoes, halved",
          "1/2 pint yellow grape tomatoes, halved",
          "1 large onion, halved and thinly sliced",
          "4 pork loin chops, 1 inch thick",
          "3 cloves garlic, diced",
          "salt to taste",
          "black pepper to taste",
          "2 1/2 teaspoons balsamic vinegar",
          "4 ounces feta cheese, crumbled",
          "garlic powder to taste"

        ],
        instructions: [
          "Heat 1 tablespoon oil in a skillet over medium heat. Stir in the onion and cook until golden brown. Set aside.",
          "Heat 1/2 tablespoon oil in the skillet.", 
          "Season pork chops with salt, pepper, and garlic powder, and place in the skillet.", 
          "Cook to desired doneness. Set aside and keep warm.",
          "Heat remaining oil in the skillet.", 
          "Return onions to skillet, and stir in tomatoes, garlic, and basil. Cook and stir about 3 minutes, until tomatoes are tender. Mix in balsamic vinegar, and season with salt and pepper.",
          "Top chops with the onion and tomato mixture, and sprinkle with feta cheese to serve."
        ]
      },
      {
        id: 10,
        name: "One Pot Thai-Style Rice Noodles",
        ingredients: [
          "2 tablespoons cornstarch",
          "1 1/2 tablespoons water",
          "6 cups chicken broth",
          "2 1/2 tablespoons soy sauce",
          "1 tablespoon fish sauce",
          "1 tablespoon rice vinegar",
          "1 tablespoon chile-garlic sauce (such as Sriracha®), or more to taste",
          "2 teaspoons vegetable oil",
          "2 teaspoons minced fresh ginger root",
          "2 cloves garlic, minced",
          "1 teaspoon ground coriander",
          "1 (16 ounce) package thick rice noodles",
          "1 cup sliced zucchini",
          "1 cup sliced red bell pepper",
          "2 cooked chicken breasts, cut into 1-inch cubes"

        ],
        instructions: [
          "Stir cornstarch and water together in a small bowl until smooth.",
          "Pour chicken broth into a large pot and stir cornstarch mixture, soy sauce, fish sauce, rice vinegar, chile-garlic sauce, vegetable oil, ginger, garlic, and coriander into broth.", 
          "Cover and bring to a boil.", 
          "Place rice noodles in the boiling sauce, reduce heat to medium, and simmer until noodles are tender, 5 to 10 minutes.", 
          "Stir zucchini, red bell pepper, and chicken into sauce.", 
          "Bring back to a boil, cover, and simmer until vegetables are just become tender, about 5 more minutes.",
        "Remove from heat and let stand, covered, for 5 minutes to thicken.",
         "Serve garnished with crushed peanuts and cilantro."
        ]
      }
    ],
    searchVal: '',
    selectedRecipes: [],
    detailedRecipe: []
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchVal: event.target.value });
  };

  selectRecipes = (event) => {
    event.preventDefault();
    const filteredRecipes = this.state.recipes.filter(filtered =>
      filtered.name.toLowerCase().includes(this.state.searchVal.toLowerCase())
    );
    this.setState({ selectedRecipes: filteredRecipes });
  };

  detailRecipe = (id) => {
    this.setState({ detailedRecipe: [] });
    this.setState({ detailedRecipe: this.state.recipes.find(recipes => recipes.id === id) })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <DirectoryView
            recepes={this.state.recipes}
            searchVal={this.state.searchVal}
            handleChange={this.handleChange}
            selectedRecipes={this.state.selectedRecipes}
            selectRecipes={this.selectRecipes}
            detailRecipe={this.detailRecipe}
            toggleClass={this.toggleClass}
          />
          <DetailView detailedRecipe={this.state.detailedRecipe}/>
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
