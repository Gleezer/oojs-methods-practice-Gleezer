const coin = {
  state: 0,
  flip: function () {
    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
    this.state = Math.round(Math.random())
    return this.state
  },
  toString: function () {
    // 2. Return the string "Heads" or "Tails", depending on whether
    //    "this.state" is 0 or 1.
    if (this.state === 0) {
      return "heads"
    } else {
      return "tails"
    }
  },
  toHTML: function () {
    const image = document.createElement("img");
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    //    You can use the heads and tails images inside of the "images" folder
    if (this.state === 0) {
      image.src = "./images/heads.png"
    } else {
      image.src = "./images/tails.png"
    }
    document.body.append(image)
    return image;
  },
};

function display20Flips() {
  const results = [];
  // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
  for (let index = 0; index < 20; index++) {
    coin.flip();
    results.push(coin.toString());
    
  }
  return results;
}
document.body.append(display20Flips());


function display20Images() {
  const results = [];
  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
  for (let index = 0; index < 20; index++) {
    coin.flip()
    let image = coin.toHTML();
    document.body.append(image)
    results.push(image)
  }
  return results
}
display20Images()