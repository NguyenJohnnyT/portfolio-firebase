import { Icon, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

interface IconProps {
    height?: string;
    width?: string;
}

const socials = {
    github: "https://github.com/jtn-mcy",
    linkedin: "https://www.linkedin.com/in/johnny-truc-nguyen/",
    medium: "https://mechocreamy.medium.com/",
    resume: "#",
};

export const GitHubIcon: React.FC<IconProps> = ({
    height = "2rem",
    width = "2rem",
}) => (
    <Link as={NextLink} href={socials.github} target="_blank">
        <Icon viewBox="0 0 64 64" width={height} height={width}>
            <path
                strokeWidth="0"
                fill="currentColor"
                d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
            />
        </Icon>
    </Link>
);

export const LinkedInIcon: React.FC<IconProps> = ({
    height = "2rem",
    width = "2rem",
}) => (
    <Link as={NextLink} href={socials.linkedin} target="_blank">
        <Icon viewBox="0 0 382 382" width={height} height={width}>
            <path
                fill="#0077B7"
                d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
            />
        </Icon>
    </Link>
);

export const MediumIcon: React.FC<IconProps> = ({
    height = "2rem",
    width = "2rem",
}) => (
    <Link as={NextLink} href={socials.medium} target="_blank">
        <Icon viewBox="0 0 15 15" fill="none" width={height} height={width}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1.5C0 0.671573 0.671573 0 1.5 0H13.5C14.3284 0 15 0.671573 15 1.5V13.5C15 14.3284 14.3284 15 13.5 15H1.5C0.671573 15 0 14.3284 0 13.5V1.5ZM4 5H3V4H4.5C4.6636 4 4.80885 4.07857 4.90006 4.20004L7.5001 7.66668L10.0934 4.20895C10.1841 4.08243 10.3324 4 10.5 4H12V5H11V10H12V11H9V10H10V6.00014L7.5001 9.33335L5 5.99988V10H6V11H3V10H4V5Z"
                fill="black"
            />
        </Icon>
    </Link>
);

export const ResumeIcon: React.FC<IconProps> = ({
    height = "2rem",
    width = "2rem",
}) => (
    <Link as={NextLink} href={socials.resume} target="_blank">
        <Icon viewBox="0 0 60 60" width={height} height={width}>
            <path d="M2,2h39v7h2V1c0-0.6-0.4-1-1-1H1C0.4,0,0,0.4,0,1v58c0,0.6,0.4,1,1,1h32v-2H2V2z" />
            <path
                d="M43.7,21.3l-2.8-6.6c-0.1-0.4-0.5-0.6-0.9-0.6s-0.7,0.2-0.9,0.6l-2.8,6.6C36.1,21.5,36,21.7,36,22v31v6c0,0.6,0.4,1,1,1
				h6c0.6,0,1-0.4,1-1v-6V22C44,21.7,43.9,21.4,43.7,21.3z M38,23h4v29h-4V23z M40,17.5l1.5,3.5h-3L40,17.5z M42,58h-4v-4h4V58z"
            />
            <path
                d="M59,38H48c-0.6,0-1,0.4-1,1v20c0,0.6,0.4,1,1,1h11c0.6,0,1-0.4,1-1V39C60,38.4,59.6,38,59,38z M58,40v5h-9v-5H58z M49,58
				V47h9v11H49z"
            />
            <path
                d="M27,11c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S27,14.3,27,11z M17,11c0-2.2,1.8-4,4-4s4,1.8,4,4s-1.8,4-4,4S17,13.2,17,11
				z"
            />
        </Icon>
    </Link>
);
