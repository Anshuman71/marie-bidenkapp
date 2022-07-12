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
            Some facts about me:
            <ul className="pl-10">
              <li className="list-disc">
                I live in a small town near Frankfurt, Germany
              </li>
              <li className="list-disc">
                I have a vocational education as a multi-lingual secretary
              </li>
              <li className="list-disc">
                I went to Australia for a one year Working Holiday
              </li>
              <li className="list-disc">
                I graduated my Abitur (A-Levels) and studied 2 semesters of
                Linguistics
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
