# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

This challenge took me about two days to debug and get everything to work properly. The reason it took so long was that I had alot of unnecessary markup which made accessing elements with JS a nightmare. I tried so many different ways to animate the FAQ answers but none of them seemed to work until I changed my markup. It also made it hard to style correctly. 

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

Desktop

![](./images/desktop.png)

Mobile

![](./images/mobile.png)

### Links

- Solution URL: [My Frontend Mentor Profile](https://www.frontendmentor.io/profile/dxiDavid)
- Live Site URL: [Go Live](https://faq-accordion-section-challenge.pages.dev/)

## My process

I started with the usual HTML and CSS then went over to write some JS which didn't work right of the bat. After a whole day of debugging, I decided to isolate the section of interest and get it to work then copy it over to the card. This worked and I ended up learning a few new things.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript

### What I learned

- I learned about the ```.parentNode``` method to and how to use it to check whether the parent node of an element contains a certain class and remove it if it does.
- I also learned how to create transitions and animations to make everything animate smoothly.
- This challenge was a great  reminder to avoid unnecessary nesting of elements in my markup to make accessing them a lot easier.  

### Continued development

I'll come back and try the same thing with CSS and JS frameworks

### Useful resources

- [Youtube](https://www.youtube.com/@KevinPowell) - This is where I found the best tutorials and explanations (For me) on CSS concepts and      writing functional CSS. Kevin Powel really knows his stuff and gives concise explanations.
- [w3schools](https://w3schools.com) - This website has an entire course on JavaScript with simple examples for both basic and advanced concepts.
- [CSS Tricks](https://css-tricks.com/) - This website provides very well written explanations to CSS concepts as well as examples for when you need to revisit a concept.
- [mdn](https://developer.mozilla.org/en-US/) - Always helpful to read the documentation of any language.

## Author

- Frontend Mentor - [@dxiDavid](https://www.frontendmentor.io/profile/dxiDavid)
- Twitter - [@dxidavid254](https://www.twitter.com/dxidavid254)
