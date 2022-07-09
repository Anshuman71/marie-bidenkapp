import type { NextPage } from "next";
import { experiences, mainVariants } from "../constants";
import ExternalLink from "../components/ExternalLink";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Section from "../components/Section";
import MetaData from "../components/MetaData";
import Footer from "../components/Footer";
import { ArticleInList } from "../types";

interface PageProps {
  counter: number;
  articles: ArticleInList[];
}

const Home: NextPage<PageProps> = (props) => {
  const experienceInYears = "4";
  return (
    <>
      <MetaData />
      <motion.main variants={mainVariants} className={"content-container"}>
        <Section>
          <h1 className={"text-gray-100 text-3xl md:text-5xl overflow-hidden"}>
            Hi, I&apos;m{" "}
            {"Marie".split("").map((char, index) => (
              <motion.p
                key={char + index}
                className={"inline-block text-yellow-400"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.35 }}
              >
                {char}
              </motion.p>
            ))}
          </h1>
          <p className={"text-gray-200 text-lg mt-4 leading-loose"}>
            {" "}
            I&apos;m a creative Software Engineer with more than{" "}
            <b>{experienceInYears}</b> years of experience in software
            development ranging from being an <i>Engineering Manager</i> to
            developing a Full Stack application on my own. I help companies
            create valuable software and reach business goals.
            <br />
            Some examples of my contribution:
            <ul className="pl-10">
              <li className="list-disc">
                Spearheaded effort on Over-the-Air updates and internal fleet
                manager at Canoo, developing React and Next.js web application
              </li>
              <li className="list-disc">
                Delivering the &ldquo;Pre-order&rdquo; landing page section and
                payment integration for Canoo Pickup truck under a tight
                deadline
              </li>
              <li className="list-disc">
                Led the mobile app development as a Product Engineer at
                Delightree using React Native
              </li>
              <li className="list-disc">
                Designing and developing features for the mobile application
                using ReactNative, React-navigation, and Firebase, along with
                writing performant cloud functions for backend tasks as a
                Product owner at Jynx.
              </li>
            </ul>
          </p>
        </Section>
        <Section>
          <SectionHeading>What so far?</SectionHeading>
          <div>
            {experiences.map((exp) => (
              <ExternalLink key={exp.url} {...exp} />
            ))}
          </div>
        </Section>
      </motion.main>
      <Footer />
    </>
  );
};

export default Home;
