# Options Trading Analytics Demo

Get the latest options data you need to perform pre-trade analyses!

<img src="https://i.ibb.co/128Cnj6/options-project-gif.gif" width="800" />

This app gives you near real-time data for finding trade opportunities. Check it out at the link below:


[**Go to demo**](http://52.39.121.151/)

*** Frugality is a virtue. I've set a timer on the EC2 instance so this demo is only available *8:00am EST - 8:00pm EST*

## About

This React app was born out of another financial analysis suite I was building. Since this is only a demo, I tried to keep the functionalities and UI fairly simple

You can enter any optionable stock symbol (ex. aapl) and look up the option chains on that stock.

There are two parts to this app:

- This repo hosts the client application only
- You can find the server application [here](https://github.com/melissakw/optionsServer)

## Deisgn Notes

For this simple demo, I decided to create a nice and easy way to look up any option chains of interest. So here are a couple things I focused on in the design phase:

**Simple UI:**

I used a good mix of Bootstrap, Material UI icons, Styled Components, and CSS for the UI for this demo. Every project is different and I like to keep things simple when it comes to projects that don't have very custom requirements.

With that said, I'm always open to different approaches with Sass, Material Design, etc. Bootstrap is often a good starting point for a simple input field, search button, and table like the ones shown in this demo. Here I started with Bootstrap as much as possible and refactored to Styled Components over time or as needed. In some circumstances, this approach could save some time upfront and get the project going quickly.

**Robust functionalities:**

This responsive web app was designed with simple and intuitive UX in mind. User can easily search and refresh search results within the app. The `search` button was built to handle multiple clicks. That means it won't send repetitive requests to the API endpoint.

**Build:**

Webpack was used to create the bundle. You can find examples of lazy loading in App.tsx.

**Deployment:**

For deployment, I went with AWS EC2. This repo is for the client project only. To keep the API keys secure, a separate REST API endpoint was created with Express.js in Node.js. The backend is also deployed to the same EC2 instance with the correct security group setup. That way only this client app is exposed to the public.

As a side note, you will find the use of ESLint, Prettier, Husky, and other common libraries in the React toolchain. Test cases are omitted here. I typically use Jest/ Enzyme/ React Testing Library (RNTL for Native projects).

Typescript is also used in this project. In fact I became a Typescript convert since my team started adopting it across many projects. It took some getting used to at first but now it's a huge plus for productivity, not to mention how it made our code way more maintainable

## Deisgn Notes

For this simple demo, I decided to create a nice and easy way to look up any option chains of interest. So here are a couple things I focused on in the design phase:

**Simple UI:**

I used a good mix of Bootstrap, Material UI icons, Styled Components, and CSS for the UI. Every project is different and I like to keep things simple when it comes to projects that don't have very custom requirements. Bootstrap is a good starting point for a simple input field, search button, and table like the ones shown in this demo. I usually start with Bootstrap as much as possible and refactor to Styled Components over time or as requirements change.

This approach seems to save some time upfront and help the projects get going quickly. And it's rather painless to refactor as the ever-changing requirements present themselves. 
 
**Robust functionalities:**

This responsive web app was designed with simple and intuitive UX in mind. User can easily search and refresh search results within the app. The ```search``` button was built to handle multiple clicks. That means it won't send repetitive requests to the API endpoint.

**Build:**

Webpack was used to create the bundle. You can find examples of lazy loading in App.tsx.

**Deployment:**

For deployment, I went with AWS EC2. This repo is for the client project only. To keep the API keys secure, a separate REST API endpoint was created with Express.js in Node.js. The backend is also deployed to the same EC2 instance with the correct security group setup. That way only this client app is exposed to the public. Finally, Nginx was used as the reverse proxy to serve both the front end and back end Node applications.

As a side note, you will find the use of ESLint, Prettier, Husky, and other common libraries in the React toolchain. Test cases are omitted here. I typically use Jest/ Enzyme/ React Testing Library (RNTL for Native projects).

Typescript is also used in this project. In fact I became a Typescript convert since my team started adopting it across many projects. It took some getting used to at first but now it's a huge plus for productivity, not to mention how it made our code way more maintainable 


## Important Notes

- Option chain tables include contracts available within one year only

- All information presented here is for educational purpose only and should not be considered error free or relied upon for investing decisions.

---

Made with ❤️ by Melissa Wong
