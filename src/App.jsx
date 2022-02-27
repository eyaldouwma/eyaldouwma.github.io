import React, {useRef, useMemo} from "react";
import Header from "./Containers/Header/Header";
import ResumePage from './Pages/ResumePage/ResumePage';
import ExperiencePage from "./Pages/ExperiencePage/ExperiencePage";
import EducationPage from "./Pages/EducationPage/EducationPage";
import SkillsPage from "./Pages/SkillsPage/SkillsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import DownloadCVButton from "./Containers/DownloadCVButton/DownloadCVButton";

import "./app.styles.scss";

const App = () => {
    const topRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    const refScrollIntoView = (ref) => {
        return () => ref.current.scrollIntoView({behavior: 'smooth'})
    };

    const headerItems = useMemo(() => {
        return [
            {
                label: 'Experience',
                onClick: refScrollIntoView(experienceRef),
            },
            {
                label: 'Education',
                onClick: refScrollIntoView(educationRef),
            },
            {
                label: 'Skills',
                onClick: refScrollIntoView(skillsRef),
            },
            {
                label: 'Contact',
                onClick: refScrollIntoView(contactRef),
            }
        ]
    }, [experienceRef, educationRef]);

    return (
      <div className="app-container" ref={topRef}>
          <Header 
            titleClick={refScrollIntoView(topRef)}
            items={headerItems}
          />
          <ResumePage />
          <ExperiencePage scrollRef={experienceRef}/>
          <EducationPage scrollRef={educationRef}/>
          <SkillsPage scrollRef={skillsRef}/>
          <ContactPage scrollRef={contactRef}/>
          <DownloadCVButton />
      </div>
    );
}

export default App;
