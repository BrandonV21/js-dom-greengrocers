const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

const storeItemList = document.querySelector(".store--item-list")
const listItemElement = document.createElement("li")
storeItemList.append(listItemElement)

const divIcon = document.createElement("div")
divIcon.setAttribute('class', "store--item-icon")
listItemElement.appendChild(divIcon)

const items = state.items[0]

const itemIcon = document.createElement("img")
// itemIcon.setAttribute('src', "assets/icons/001-beetroot.svg")
Object.assign(itemIcon, {src: `assets/icons/${items.id}.svg`, alt: 'beetroot'})
divIcon.appendChild(itemIcon)

const buttonAddCart = document.createElement("button")
buttonAddCart.innerText = "Add to cart"
listItemElement.appendChild(buttonAddCart)

const listItemElement2 = document.createElement("li")
storeItemList.appendChild(listItemElement2)




