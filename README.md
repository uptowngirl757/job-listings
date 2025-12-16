# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [https://github.com/uptowngirl757/job-listings](https://github.com/uptowngirl757/job-listings)
- Live Site URL: [https://job-listings-one-iota.vercel.app/](https://job-listings-one-iota.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learned how to use the `.every()` method in JavaScript. It was initially difficult to wrap my head around, but once it clicked, it became clear how powerful it is for validating multiple conditions at once.
```
 return activeFilters.every(filter => {
      return (
        jobListing.role === filter ||
        jobListing.level === filter ||
        jobListing.languages.includes(filter) ||
        jobListing.tools.includes(filter)
      )
    })
```
This approach ensures that a job listing is returned only if it satisfies **all** active filters, which made my filtering logic both cleaner and more expressive.

### Continued development

I need a deeper and more confident understanding of JavaScript array methods, especially how and when to use methods like `.map()`, `.filter()`, `.some()`, and `.every()` effectively in real projects.

### Useful resources

- [The Mozilla doc on the .every method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - This helped clarify how `.every()` works internally and why it short-circuits. I’ll be leaning on this pattern a lot going forward.


## Author

- Frontend Mentor - [@uptowngirl757](https://www.frontendmentor.io/profile/uptowngirl757)



