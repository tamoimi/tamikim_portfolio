import { Badge } from "@/components/ui/badge";

function Experience() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2> 2022.09—2025.01 </h2>
          <h2> Junior Frontend Engineer, Web · Optatum Platform </h2>
          <p className="text-sm">
            Build and maintain critical components used to construct Klaviyo’s
            frontend, across the whole product. Work closely with
            cross-functional teams, including developers, designers, and product
            managers, to implement and advocate for best practices in web
            accessibility.
          </p>
          <div className="flex gap-2">
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
          </div>
        </div>
      </div>
      <div className="mt-5 font-bold">View Full Résumé</div>
    </>
  );
}

export default Experience;
