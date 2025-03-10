import { Badge } from "@/components/ui/badge";

function Experience() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-sm"> 2022.09—2025.01 </h2>

          <h2 className="font-bold hover:text-blue-500">
            Junior Frontend Engineer ·&nbsp;
            <a
              href="https://www.optatumplatform.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-500 font-bold"
            >
              Optaum Platform
            </a>
          </h2>

          <p className="text-sm">
            In this project, I developed both the admin and user pages for
            merchant registration, contract management, user management, and
            settlement functions. I utilized React for frontend development and
            Material-UI for the user interface design. Additionally, I managed
            code versions using Git and oversaw the deployment process with
            TeamCity, ensuring smooth integration and deployment of the
            application.
          </p>

          <p className="text-sm">
            I led the overall design and planning phase of this blockchain
            platform using Figma. For the backend development, I built the
            platform using Next.js and Prisma, ensuring smooth functionality
            across the system. I also developed various pages for admin, stores,
            and users to facilitate platform interactions.
          </p>

          <p className="text-sm">
            One of the key features I implemented was blockchain integration,
            where I enabled actual coin transfer functionality using the Wagmi
            library, ensuring a seamless and secure transaction experience for
            users.
          </p>

          <div className="flex gap-2">
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Next</Badge>
            <Badge>Prisma</Badge>
            <Badge>Wagmi</Badge>
          </div>
        </div>
      </div>

      <div className="mt-5 font-bold hover:text-blue-500">
        <a
          href="/path/to/your/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Résumé
        </a>
      </div>
    </>
  );
}

export default Experience;
