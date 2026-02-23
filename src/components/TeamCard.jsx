import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
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
          <Button className="w-full">View Profile</Button>
        </CardFooter>
      </Card>
    </motion.div>
  ));
}

export default TeamCard;
