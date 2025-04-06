import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import MainHeader from "./components/nav/MainHeader";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import SuccessStory1 from "./pages/success-story-1.js";
import SuccessStory2 from "./pages/success-story-2.js";
import SuccessStory3 from "./pages/success-story-3.js";
import Career from "./pages/Career.jsx";
import SecurityAssessment from "./pages/SecurityAssessment.js";
import AllBlogs from "./components/blog/AllBlogs.js";
import BlogDetail from "./components/blog/BlogDetail.js";
import ManagedServices from "./pages/services/ManagedServices.js";
import CoManagedITServices from "./pages/services/CoManagedITServices.js";
import ServerAdministration from "./pages/services/ServerAdministration.js";
import ApplicationDevelopment from "./pages/services/ApplicationDevelopment.js";
import VAPTAssessment from "./pages/services/VAPTAssessment.js";
import InfrastructureManagement from "./pages/services/InfrastructureManagement.js";
import NetworkMonitoring from "./pages/services/NetworkMonitoring.js";
import ScrollToTop from "./components/ScrollToTop";

import CaseStudyOne from "./components/individual/case_study/CaseStudyOne.js";
import CaseStudyTwo from "./components/individual/case_study/CaseStudyTwo.js";
import CaseStudyThree from "./components/individual/case_study/CaseStudyThree.js";
import Media from "./components/individual/Media.js";
import WhyChooseUs from "./pages/services/WhyChooseUs.js";
import FAQ from "./pages/FAQ.jsx";
import JobDetail from "./pages/jobdetail/JobDetail.jsx";
import LifeAtDg from "./pages/LifeAtDg.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="managed-services" element={<ManagedServices />} />
            <Route
              path="co-managed-it-services"
              element={<CoManagedITServices />}
            />
            <Route
              path="serveradministration"
              element={<ServerAdministration />}
            />
            <Route
              path="application-development"
              element={<ApplicationDevelopment />}
            />
            <Route path="vapt-assessment" element={<VAPTAssessment />} />
            <Route
              path="infrastructuremanagement"
              element={<InfrastructureManagement />}
            />
            <Route path="networkmonitoring" element={<NetworkMonitoring />} />
            <Route path="success-story-1" element={<SuccessStory1 />} />
            <Route path="success-story-2" element={<SuccessStory2 />} />
            <Route path="success-story-3" element={<SuccessStory3 />} />
           
            <Route path="/career" element={<Career />} />
            <Route path="/career/jobs/:id" element={<JobDetail />} />

            <Route path="SecurityAssessment" element={<SecurityAssessment />} />
            <Route path="why-choose-us" element={<WhyChooseUs />} />
            <Route path="blogs" element={<AllBlogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="media" element={<Media />} />
            <Route path="life-at-dg" element={<LifeAtDg />} />
            <Route path="case-study-one" element={<CaseStudyOne />} />
            <Route path="casestudy-one" element={<CaseStudyOne />} />
            <Route path="case-study-two" element={<CaseStudyTwo />} />
            <Route path="casestudy-two" element={<CaseStudyTwo />} />
            <Route path="case-study-three" element={<CaseStudyThree />} />
            <Route path="casestudy-three" element={<CaseStudyThree />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
