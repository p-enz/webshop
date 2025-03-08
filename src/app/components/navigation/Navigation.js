'use client';

import "./navigation.css"

export default function Navigation (){
    

    const testDataCategories ={
        "categories": [
          {
            "id": 1,
            "name": "Electronics",
            "subCategories": [
              {
                "id": 1,
                "name": "Computers",
                "detailCategories": [
                  { "id": 1, "name": "Laptops" },
                  { "id": 2, "name": "Desktops" },
                  { "id": 3, "name": "Tablets" },
                  { "id": 4, "name": "Monitors" },
                  { "id": 5, "name": "Printers" }
                ]
              },
              {
                "id": 2,
                "name": "Smartphones",
                "detailCategories": [
                  { "id": 1, "name": "Android" },
                  { "id": 2, "name": "iPhone" },
                  { "id": 3, "name": "Accessories" },
                  { "id": 4, "name": "Chargers" }
                ]
              },
              {
                "id": 3,
                "name": "Audio",
                "detailCategories": [
                  
                  { "id": 1, "name": "Headphones" },
                  { "id": 2, "name": "Speakers" },
                  { "id": 3, "name": "Soundbars" },
                  { "id": 4, "name": "Home Audio Systems" }
                ]
              },
              {
                "id": 4,
                "name": "Cameras",
                "detailCategories": [
                  { "id": 1, "name": "DSLR" },
                  { "id": 2, "name": "Mirrorless" },
                  { "id": 3, "name": "Action Cameras" },
                  { "id": 4, "name": "Lenses" }
                ]
              }
            ]
          },
          {
            "id": 2,
            "name": "Clothing",
            "subCategories": [
              {
                "id": 1,
                "name": "Women",
                "detailCategories": [
                  { "id": 1, "name": "Dresses" },
                  { "id": 2, "name": "Pants" },
                  { "id": 3, "name": "Shoes" },
                  { "id": 4, "name": "Tops" },
                  { "id": 5, "name": "Jackets" }
                ]
              },
              {
                "id": 2,
                "name": "Men",
                "detailCategories": [
                  { "id": 1, "name": "Suits" },
                  { "id": 2, "name": "Shirts" },
                  { "id": 3, "name": "Jeans" },
                  { "id": 4, "name": "Shoes" },
                  { "id": 5, "name": "Coats" }
                ]
              },
              {
                "id": 3,
                "name": "Kids",
                "detailCategories": [
                  { "id": 1, "name": "T-Shirts" },
                  { "id": 2, "name": "Shorts" },
                  { "id": 3, "name": "Shoes" },
                  { "id": 4, "name": "School Uniforms" }
                ]
              },
              {
                "id": 4,
                "name": "Accessories",
                "detailCategories": [
                  { "id": 1, "name": "Belts" },
                  { "id": 2, "name": "Watches" },
                  { "id": 3, "name": "Bags" },
                  { "id": 4, "name": "Sunglasses" }
                ]
              }
            ]
          },
          {
            "id": 3,
            "name": "Furniture",
            "subCategories": [
              {
                "id": 1,
                "name": "Living Room",
                "detailCategories": [
                  { "id": 1, "name": "Sofas" },
                  { "id": 2, "name": "Coffee Tables" },
                  { "id": 3, "name": "Recliners" },
                  { "id": 4, "name": "TV Units" },
                  { "id": 5, "name": "Bookshelves" }
                ]
              },
              {
                "id": 2,
                "name": "Bedroom",
                "detailCategories": [
                  { "id": 1, "name": "Beds" },
                  { "id": 2, "name": "Wardrobes" },
                  { "id": 3, "name": "Nightstands" },
                  { "id": 4, "name": "Dressers" }
                ]
              },
              {
                "id": 3,
                "name": "Kitchen & Dining",
                "detailCategories": [
                  { "id": 1, "name": "Dining Tables" },
                  { "id": 2, "name": "Chairs" },
                  { "id": 3, "name": "Bar Stools" },
                  { "id": 4, "name": "Cabinets" }
                ]
              },
              {
                "id": 4,
                "name": "Office Furniture",
                "detailCategories": [
                  { "id": 1, "name": "Desks" },
                  { "id": 2, "name": "Office Chairs" },
                  { "id": 3, "name": "File Cabinets" }
                ]
              }
            ]
          },
          {
            "id": 4,
            "name": "Sports & Leisure",
            "subCategories": [
              {
                "id": 1,
                "name": "Fitness",
                "detailCategories": [
                  { "id": 1, "name": "Treadmills" },
                  { "id": 2, "name": "Dumbbells" },
                  { "id": 3, "name": "Exercise Bikes" },
                  { "id": 4, "name": "Yoga Mats" }
                ]
              },
              {
                "id": 2,
                "name": "Outdoor",
                "detailCategories": [
                  { "id": 1, "name": "Tents" },
                  { "id": 2, "name": "Camping Gear" },
                  { "id": 3, "name": "Hiking Boots" },
                  { "id": 4, "name": "Backpacks" }
                ]
              },
              {
                "id": 3,
                "name": "Team Sports",
                "detailCategories": [
                  { "id": 1, "name": "Soccer" },
                  { "id": 2, "name": "Basketball" },
                  { "id": 3, "name": "Tennis" },
                  { "id": 4, "name": "Baseball" }
                ]
              },
              {
                "id": 4,
                "name": "Water Sports",
                "detailCategories": [
                  { "id": 1, "name": "Surfboards" },
                  { "id": 2, "name": "Swimwear" },
                  { "id": 3, "name": "Snorkeling Gear" }
                ]
              }
            ]
          },
          {
            "id": 5,
            "name": "Groceries",
            "subCategories": [
              {
                "id": 1,
                "name": "Beverages",
                "detailCategories": [
                  { "id": 1, "name": "Water" },
                  { "id": 2, "name": "Juices" },
                  { "id": 3, "name": "Soda" },
                  { "id": 4, "name": "Coffee" },
                  { "id": 5, "name": "Tea" }
                ]
              },
              {
                "id": 2,
                "name": "Snacks",
                "detailCategories": [
                  { "id": 1, "name": "Chips" },
                  { "id": 2, "name": "Chocolate" },
                  { "id": 3, "name": "Cookies" },
                  { "id": 4, "name": "Nuts" }
                ]
              },
              {
                "id": 3,
                "name": "Dairy",
                "detailCategories": [
                  { "id": 1, "name": "Milk" },
                  { "id": 2, "name": "Cheese" },
                  { "id": 3, "name": "Yogurt" },
                  { "id": 4, "name": "Butter" }
                ]
              },
              {
                "id": 4,
                "name": "Bakery",
                "detailCategories": [
                  { "id": 1, "name": "Bread" },
                  { "id": 2, "name": "Pastries" },
                  { "id": 3, "name": "Bagels" },
                  { "id": 4, "name": "Muffins" }
                ]
              }
            ]
          }
        ]
      }


    handleJSON(testDataCategories)
    //traverseObject(testDataCategories)
     
      
    return (
        <nav> 
          <ul class="navi">
              <li class="main_cat">
                <a href="#main1" onClick={() => btnClicked()}>MainCat 1</a>
                <ul class="sub_cat">
                  <li class="sub_cat_container">
                    <a href="#sub1" class="sub_cat_item">SubCat 1</a>

                    <ul className="detail_cat">
                      <li>
                        <a href="#detail1" class="detail_cat_item">DetailCat 1</a>
                      </li>
                      <li>
                        <a href="#detail1">DetailCat 2</a>
                      </li>
                      <li>
                        <a href="#detail1">DetailCat 3</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#sub2" class="sub_cat_item">SubCat 2</a>
                      <ul className="detail_cat">
                        <li>
                          <a href="#detail1">DetailCat 1</a>
                        </li>
                        <li>
                          <a href="#detail1">DetailCat 2</a>
                        </li>
                      </ul>
                  </li>

                </ul>
              </li>
              <li>
                <a href="#main2">MainCat 2</a>
              </li>
              <li>
                <a href="#main3">MainCat 3</a>
              </li>
              
          </ul>
        </nav>
    );
}
function handleJSON(jsonData) {
    console.log(jsonData.categories[0].name); //Mainlevel nur name
    console.log(jsonData.categories[0].subCategories[0].name) //Sublevel nur name
    console.log(jsonData.categories[0].subCategories[0].detailCategories[0].name) // Detaillevel nur name
    
    //ich suche immer ein Array, gibt es ein Array muss ich erneut prüfen, solange ich nur noch objectc mit keys id, name habe -> dann Abbruch 
   
   
    //Idee auf anzahl entries prüfen??? --> wenn entries größer 2 weiter machen ? Frage nach datenstruktur  --> mal weiter prüfen 
    const entries = Object.values(jsonData.categories[0].subCategories[0].detailCategories)
    console.log(entries)
   
  
    
    console.log("-------------------End of Function-------------------------");
}

function btnClicked(){
  console.log("Btn Clicked");
}


//chat gpt example it crawls down the complete json and manages to give them there appropiate level
//but now what? how do i get html out of it
function traverseObject(obj, level = 0) {
    // Check if the current element is an array
    if (Array.isArray(obj)) {
      obj.forEach((element) => traverseObject(element, level));
    } 
    // If the current element is an object
    else if (typeof obj === "object" && obj !== null) {
      // Loop through each property of the object
      for (let key in obj) {
        // Skip inherited properties (good practice)
        if (obj.hasOwnProperty(key)) {
          // If the property is a name, display it
          if (typeof obj[key] === "string") {
            console.log("Level " + level + " - " + obj[key]);
          }
          // If the property is an object or array, go deeper
          else if (typeof obj[key] === "object") {+
            traverseObject(obj[key], level + 1);
          }
        }
      }
    }
  }


