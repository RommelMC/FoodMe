# Food Me

A common problem I face and I know many of my friend face is deciding where to eat. We all know what places are available and we all know what places are good or not. However, it is still hard to decide on a place. I created an application that allows you to enter a location and it will give you a random place to eat around that location. It also provides ratings, reviews, and a link for more information

## Features

This application allows you to enter an address as a starting point for where it should look for places to eat. There are extra filters that allow you to narrow down or expand your search. These filters are the radius (in meters) and price (on a scale of 1-4). When you press the find food button, it will pick a random place around the area of the address. It will also provide information such as the address of the restaurant, the rating, categories. There is also a button that allows you to show a few reviews of the restaurant. Each of these reviews provides a link which will show the full review.

## Technology

This application was built using Angular.js, Node.js, and Express.js. No back end was needed for this application. The information was provided by Yelp's yelp-fusion API. The map was provided by google map's API and the Angular Google Map plug in. The application was launched using Oracle's cloud application container.

## Challenges

The main challenge I faced when creating this application is integrating the yelp API. I struggled with an issue involving CORS requests. This CORS issue prevented me from accessing the API from the client side. The solution was to create a route for it on the backend and then access the API from the back end. This was something new to me and took some research to understand the root of the problem. Another challenge was learning how to use the GoogleMaps API because it was completely new to me. Given more time, I would have created a database that would allow the user to create an account and we could save information such as addresses or favorite restaurants. This could be used to help optimize the randomized food searches. I would have also used some API to integrate GPS location so it would be able to tell your current location. I would have then launched the application on an IaaS instance in order to set up the database and use pm2 to manage the server and database.

## Conclusion

Overall, I found this to be an fun, interesting project where I was able to show my experience with web development and also able to learn more about Oracle's cloud. Although there is a lot of room for improvement for this project, I believe that the main component and function of the application works and I would be happy to use it anytime I have no idea where I want to eat.

