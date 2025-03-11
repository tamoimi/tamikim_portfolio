import { Badge } from "@/components/ui/badge";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

function Experience() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <a
            href="https://www.optatumplatform.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 group"
          >
            <h2 className="text-sm">2022.09 — 2025.01</h2>
            <h2 className="font-bold flex items-center group-hover:text-blue-500">
              Junior Frontend Engineer · Optaum Platform
              <ArrowTopRightIcon className="ml-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </h2>

            <p className="text-sm">
              In this project, I developed both the admin and user pages for
              merchant registration, contract management, user management, and
              settlement functions. I utilized React for frontend development
              and Material-UI for the user interface design. Additionally, I
              managed code versions using Git and oversaw the deployment process
              with TeamCity, ensuring smooth integration and deployment of the
              application.
            </p>

            <p className="text-sm">
              I led the overall design and planning phase of this blockchain
              platform using Figma. For the backend development, I built the
              platform using Next.js and Prisma, ensuring smooth functionality
              across the system. I also developed various pages for admin,
              stores, and users to facilitate platform interactions.
            </p>

            <p className="text-sm">
              One of the key features I implemented was blockchain integration,
              where I enabled actual coin transfer functionality using the Wagmi
              library, ensuring a seamless and secure transaction experience for
              users.
            </p>

            <div className="flex gap-2 flex-wrap">
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Next</Badge>
              <Badge>Prisma</Badge>
              <Badge>Wagmi</Badge>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="https://busan.greenart.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3"
          >
            <h2 className="text-sm">2022.01 — 2022.08</h2>

            <h2 className="font-bold flex items-center group-hover:text-blue-500">
              Frontend Engineer Training Program · Green Computer Academy
              <ArrowTopRightIcon className="ml-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </h2>

            <p className="text-sm">
              Proficient in HTML, CSS, jQuery, JavaScript, and React, with
              extensive experience in crafting responsive, interactive web
              applications. Adept at optimizing website performance and
              functionality to ensure seamless user experiences across various
              platforms.
            </p>

            <p className="text-sm">
              Experienced in UI/UX design using Adobe XD, focusing on creating
              user-centered, visually engaging interfaces. Skilled in applying
              user-centered design principles and responsive design techniques
              to enhance usability and overall user satisfaction.
            </p>

            <div className="flex gap-2 flex-wrap">
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>Sass</Badge>
              <Badge>JavaScript</Badge>
              <Badge>React</Badge>
              <Badge>Git</Badge>
              <Badge>GraphQL</Badge>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-8 font-bold flex items-center group hover:text-blue-500">
        <a
          href="./public/Taekyung_Kim_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          View Full Résumé
          <ArrowTopRightIcon className="ml-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </>
  );
}

export default Experience;
