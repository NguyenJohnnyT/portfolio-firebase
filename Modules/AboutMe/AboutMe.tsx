import React from "react";
import { Section } from "../../components/Section";
import { Box, Center, Stack, Text } from "@chakra-ui/react";
export const AboutMe: React.FC = () => {
  return (
    <Section>
      <Stack spacing={3}>
        <Center bg={"gray.300"}>
          <Text fontSize={"xl"}>About Me</Text>
        </Center>
        <Text>
          I was born in the Bay Area where my journey took me through several
          career prospects--I graduated at San Jose State University with a
          chemistry degree before moving on to pharmacy school in Albany, NY. I
          graduated and became a licensed pharmacist in Nevada and Oregon. While
          I enjoyed interacting and helping patients through my internships, I
          felt a strong passion to build something in tech. Perhaps it was my
          roots in Silicon Valley calling me? In 2021, I dabbled in coding and
          eventually entered a program at UC Berkeley Extension Boot Camp for
          Web Development. I graduated and worked as a teaching assistant to
          help others learn programming.
        </Text>
        <Text>
          Over the next three months in the winter of 2021/22, I would
          eventually find myself as a UI/UX Engineer at Kernel where I hit the
          ground running learning git processes, refining my React skills,
          writing TypeScript, making meaningful changes to both Kernel&apos;s
          in-house portal application used by researchers and study
          administrators, and modifying the marketing website to interface with
          AWS so participants could easily sign up for studies. I worked at
          Kernel for a quarter of the year until I was eventually let go as the
          company downsized. Startup life! The search for another great
          opportunity continues...
        </Text>
        <Text>
          {" "}
          And so it continued for around 50 days! I received an offer from
          Indeed, known for their job board website that helps people get jobs
          and companies obtain the best talent. Starting in August of 2022 as a
          UX developer, I would go on to maintain Indeed.Design which showcases
          their brand and design system. Eventually, I joined a team responsible
          for the marketing site for small and medium business sized employers.
          I would contribute to design and coding discussions while under the
          mentorship of mid-senior level engineers. We would create and
          contribute to a design system with the goal of having this ecosystem
          that is usable to non-technical audiences, assessible to all users,
          and unique to Indeed&apos;s visual identity, to be adopted by all of
          Indeed.
        </Text>
        <Text>
          Needless to say the jump from a startup to corporate widened my views
          of the industry. I intend to keep learning from multiple viewpoints
          and absorb all I can as a fledgeling developer from my fellow
          engineers, designers, and managers.
        </Text>
        <Text>
          {" "}
          My current hobbies include rock climbing, working out, playing piano,
          watching Twitch streams (mostly Dota2 and Starcraft), and leaving
          Hololive in the background while I work. I love listening to music and
          new suggestions!
        </Text>
      </Stack>
    </Section>
  );
};
