import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { FileKeyIcon } from "lucide-react";
export default function HeroSection(){
    return(
        <section>

    <div className="wrapper">
      <div className="flex flex-col items-center justify-center text-center m-auto">
      <Badge>

        Join our community to explore more
      </Badge>

      <h1 className="text-3xl ">Monal&apos;s Universe now You are entering in different environment</h1>
      <p>Here you will get hyPnotise be careful My super Next Js Application will inhance developers to develop more things </p>
      <div className="flex gap-5 flex-row mt-5">
      <Button variant="default"><Link href="/submit">Add Projects</Link><FileKeyIcon/></Button>
      <Button variant="secondary"><Link href="/explore">Explore</Link><ArrowRightIcon className="size-5"/></Button>
      </div>

    </div>
    </div>
    </section>
    )
}