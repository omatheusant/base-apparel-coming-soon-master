# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Result](#result)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Result

#### Desktop

![](./images/overview.gif)

#### Mobile

![](./images/screenshot-mobilepng.png)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Pure JavaScript


### What I learned

This challenge help me to improve my knowlegdes about semantic HTML and pure JavaScript. I have some dificulties with the email validation, but i was proud with my result, especially this function:


```js
function emailValidation() {
    usuario = input.value.substring(0, input.value.indexOf("@"));
    dominio = input.value.substring(input.value.indexOf("@")+ 1, input.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

            const errorIcon = document.querySelector('.icon-error')
            const errorMessage = document.getElementById('msgemail')
    
            
            errorIcon.classList.remove('show')
            input.classList.remove('invalid-email')
            
            errorMessage.innerHTML = 'Done!'
    
    }
    else{
        
        const errorIcon = document.querySelector('.icon-error')
        const errorMessage = document.getElementById('msgemail')

        
        errorIcon.classList.add('show')
        input.classList.add('invalid-email')
        
        errorMessage.innerHTML = 'Please provide a valid email'
   
      }
    }

```

The HTML Semantic markdown helps me a lot when I using JavaScript. I feel that this challenge makes me better and more faster when I coding.

The style was a easy process, using flexbox to make a responsive project. 


### Useful resources

- [Add Event Listener DOM Event Types](https://dbchung3.medium.com/add-event-listener-dom-event-types-6c10a844c9d8) - This is a amazing article wich helped me to understand more the event listener DOM Event types. I'd recommend it to anyone still learning this concept


## Author
- Github - [omatheusant](https://www.github.com/omatheusant)
- Twitter - [@omatheusant](https://www.twitter.com/omatheusant)


