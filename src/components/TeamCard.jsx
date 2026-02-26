import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  NewTwitterIcon,
  WhatsappIcon,
  X,
} from "@hugeicons/core-free-icons/index";
import { Mail, Twitter } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import avatar from "@/assets/avatar.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import elite from "@/assets/Elite.jpeg";
import { motion } from "framer-motion";

function TeamCard() {
  const teamMembers = [
    {
      name: "Bae Smith",
      role: "CTO",
      image: avatar2,
    },
    {
      name: "Alice Johnson",
      role: "Lead Developer",
      image: avatar,
    },
    {
      name: "Elite DEV",
      role: "CEO & Founder",
      image: elite,
    },
  ];

  return teamMembers.map((member, index) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      key={index}
      className=""
    >
      <Card key={index} className="relative mx-auto w-full h-fit max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={member.image}
          alt="Event cover"
          className="relative z-20 aspect-video w-full h-70 object-cover brightness-60  dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Team Member</Badge>
          </CardAction>
          <CardTitle>{member.name}</CardTitle>
          <CardDescription>{member.role}</CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex w-full items-center justify-center gap-6">
            <div className="flex flex-1 gap-4">
              <HugeiconsIcon
                icon={WhatsappIcon}
                className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors"
              />
              <HugeiconsIcon
                icon={NewTwitterIcon}
                className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors"
              />
              <Mail className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
            </div>

            <Button className="flex-1">View Profile</Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  ));
}

export default TeamCard;
