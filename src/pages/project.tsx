import { ArrowTopRightIcon } from "@radix-ui/react-icons";

function Project() {
  return (
    <>
      <div className="flex flex-col gap-12">
        {[
          {
            title: "Build a MBTI test web",
            link: "https://match-personality.vercel.app/",
            description:
              "A web application that matches users with an animal based on their MBTI personality type. Developed using React, the app includes an interactive personality test and provides users with an animal that reflects their traits. The project also features dual-language support, with both English and Korean versions implemented using i18n for a seamless experience across languages.",
          },
          {
            title: "Personal Blog Built with Next.js and Dynamic Routes",
            link: "https://tamoimi.vercel.app/",
            description:
              "A personal blog built with Next.js, utilizing dynamic routes to showcase my latest content and interests. This blog features a variety of posts that reflect my personal tastes, and the structure is powered by dynamic segments like `[...slug]` for handling different types of content. It’s the perfect place to explore my most recent updates and insights.",
          },
          {
            title: "Dog Information Website with Next.js, Tailwind, and SWR",
            link: "https://everything-about-dog.vercel.app/",
            description:
              "A simple web application that displays dog information using data from the Dog API. Built with Next.js for server-side rendering, styled with Tailwind CSS for a responsive and modern design, and powered by SWR for efficient data fetching. This project showcases a clean and user-friendly interface, providing detailed information about different dog breeds.",
          },
          {
            title: "Rick and Morty Character Introduction Website",
            link: "https://rick-and-mortty.vercel.app/",
            description:
              "A dynamic website that introduces characters from the popular TV show *Rick and Morty*, using data from the Rick and Morty API. Built with Next.js for efficient server-side rendering and styled with Tailwind CSS for a clean, responsive layout. The site includes multiple pages, each showcasing detailed information about various characters from the show, offering a comprehensive and engaging user experience.",
          },
          {
            title: "Harry Potter API-Based Website with Next.js",
            link: "https://harry-potter-tami.vercel.app/",
            description:
              "A Next.js web application that fetches and displays random order data from the Harry Potter API. The app presents a variety of magical orders, and users can click on a character to view detailed information about them. The site offers an engaging and interactive experience, bringing the wizarding world to life with seamless navigation and rich character details.",
          },
          {
            title: "Minimal Blog Built with Gatsby",
            link: "https://tamiortami.netlify.app/",
            description:
              "A minimalist blog created with Gatsby, focusing on clean design and fast performance. The site offers a smooth and simple reading experience, with a focus on content. Gatsby's static site generation ensures fast loading times, while the responsive layout adapts seamlessly to different devices.",
          },
          {
            title: "Blog Powered by Jekyll & Minimal Mistakes Theme",
            link: "https://tamoimi.github.io/",
            description:
              "A personal blog built using Jekyll and the Minimal Mistakes theme. This blog features a clean, modern design with a focus on content presentation. Powered by Jekyll’s static site generation, it ensures fast performance and easy management, while the Minimal Mistakes theme provides a highly customizable and responsive layout.",
          },
          {
            title: "Basic JavaScript Website",
            link: "https://tamoimi.github.io/js-challenge/",
            description:
              "A simple website built using JavaScript, featuring a to-do list, random image generator, and weather lookup functionality. Users can add and manage tasks in the to-do list, view random images, and check the weather based on their location. The website also includes a feature to save the user’s name in local storage for a personalized experience across sessions.",
          },
          {
            title: "My First Portfolio Built with JavaScript, CSS, and HTML",
            link: "https://tamikim.vercel.app/",
            description:
              "This is my first portfolio website, built using plain JavaScript, CSS, and HTML. I utilized a design library to create a clean and responsive layout, showcasing my skills and projects. The website serves as a personal introduction, highlighting my development experience and providing a user-friendly interface to explore my work.",
          },
        ].map((project) => (
          <a
            key={project.link}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2"
          >
            <h2 className="group-hover:text-blue-500 font-bold flex items-center">
              {project.title}
              <ArrowTopRightIcon className="ml-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </>
  );
}

export default Project;
