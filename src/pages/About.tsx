import Section from "../components/Section";
import AboutLayout from "../layouts/AboutLayout";
import Angel from "../assets/images/angel.png";
import Man from "../assets/images/man.png";
import Logo from "../assets/icons/logo.png";
import Cat from "../assets/images/cat.png";
import Boy from "../assets/images/boy.png";
import Face from "../assets/images/face.png";
import SectionXl from "../components/SectionXl";
import Instagram from "../assets/icons/instagram.png"
import Twitter from "../assets/icons/twitter.png"
import Linkedin from "../assets/icons/linkedin.png"

const AboutPage = () => {
  return (
    <AboutLayout>
      <div className="flex flex-col justify-center items-center gap-8 h-96">
        <img className="max-w-2xl " src={Logo} />
        <p className="font-main text-xl">
          A publishing company that focuses on the essentials.
        </p>
      </div>

      <div className="bg-neutral-900 text-white w-full py-32 gap-14 flex flex-col justify-center items-center align-middle">
        <div className="flex justify-center gap-14 w-full px-4">
          <Section title="We tell stories that drives the heart.">
            <div>
              <p>
                Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
                nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
                culpa qui minim pariatur et officia elit id. Tempor cupidatat
                veniam esse ad veniam dolore excepteur tempor dolor consectetur
                ut id.
              </p>
            </div>
          </Section>
          <img className="hidden lg:block max-w-2xl h-auto" src={Angel} />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <img className="max-w-2xl" src={Man} />
          <Section title="We tell the news that makes the most impact.">
            <div>
              <p>
                Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
                nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
                culpa qui minim pariatur et officia elit id. Tempor cupidatat
                veniam esse ad veniam dolore excepteur tempor dolor consectetur
                ut id.
              </p>
            </div>
          </Section>
        </div>

        <div className="flex flex-col gap-16 justify-end">
          <SectionXl title="We share the little moments that shows we're alive.">
            <div>
              <p>
                Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
                nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
                culpa qui minim pariatur et officia elit id. Tempor cupidatat
                veniam esse ad veniam dolore excepteur tempor dolor consectetur
                ut id.
              </p>
            </div>
          </SectionXl>
          <div className="flex gap-4">
            <img className="max-h-80" src={Cat} />
            <img className="max-h-80" src={Boy} />
            <img className="max-h-80 hidden lg:block" src={Face} />
          </div>
        </div>
      </div>

      <div className="flex align-middle justify-center py-80">
        <div className="flex flex-col max-w-md gap-8">
          <h1 className="font-main text-4xl text-center">
            Because we are you. Humans.
          </h1>
          <p className="text-center">
            Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
            qui..
          </p>
        </div>
      </div>

      <div className="w-full bg-neutral-900 text-white">
        <div className="flex justify-center align-middle py-40">
          <div className="flex flex-col gap-4 max-w-xs">
            <h1 className="font-main text-4xl text-center">want to connect?</h1>
            <p className="text-center">
              Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
              nisi qui..
            </p>
            <div className="flex justify-center gap-4">
              <img className="h-8 w-auto" src={Twitter} />
              <img className="h-8 w-auto" src={Instagram}/>
              <img className="h-8 w-auto" src={Linkedin}/>
            </div>
          </div>
        </div>
      </div>
    </AboutLayout>
  );
};

export default AboutPage;
