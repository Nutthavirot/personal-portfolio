import ecommerce from "../assets/images/E-commerce-Website.jpg"
import Weather from "../assets/images/Weather-App.jpg"
import my_to_do from "../assets/images/my_to-do_app.jpg" 
import portfolio_website from "../assets/images/portfolio-website.jpg" 
import portfolio_website_team from "../assets/images/Portfolio_Website_Team.jpg"

export const projects = [
    {
        id: 1,
        title: "E-commerce Website",
        description: "A full-featured online store built with React and Node.js",
        image: ecommerce,
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/FLUKEKh/mini-ecommerce-collaboration/tree/main",
        demoUrl: "https://htmlpreview.github.io/?https://github.com/FLUKEKh/mini-ecommerce-collaboration/blob/main/index.html",
        featured: false
    },
    {
        id: 2,
        title: "Weather-App",
        description: "Real-time weather application with location-based forecasts",
        image: Weather,
        technologies: ["React", "CSS3", "OpenWeather API", "JavaScript"],
        githubUrl: "https://github.com/Nutthavirot/my-weather-app",
        demoUrl: "https://nutthavirot.github.io/my-weather-app/",
        featured: false
    },
    {
        id: 3,
        title: "my_to-do_app",
        description: "To-do app for managing daily tasks",
        image: my_to_do,
        technologies: ["React", "CSS3", "LocalStorage", "JavaScript"],
        githubUrl: "https://github.com/Nutthavirot/my_to-do_app",
        demoUrl: "https://nutthavirot.github.io/my_to-do_app/",
        featured: false
    },
    {
        id: 4,
        title: "portfolio-website",
        description: "A website that recommends about me",
        image: portfolio_website,
        technologies: ["HTML5", "CSS3", "JavaScript", "React"],
        githubUrl: "https://github.com/Nutthavirot/portfolio-website",
        demoUrl: "https://nutthavirot.github.io/portfolio-website/",
        featured: false
    },
    {
        id: 5,
        title: "Portfolio-Website-Team",
        description: "A website that recommends about me and my friends",
        image: portfolio_website_team,
        technologies: ["React", "CSS3", "JavaScript", "GitHub"],
        githubUrl: "https://github.com/FLUKEKh/portfolio-website-collaborations",
        demoUrl: "https://flukekh.github.io/portfolio-website-collaborations/",
        featured: false
    },
]