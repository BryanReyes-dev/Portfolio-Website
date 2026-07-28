// siteData.js
import githubLogo from "./githubLogo.png"
import linkedinLogo from "./linkedinLogo.png"

 


export interface Certification {
  title: string;
  colors:string[]; 
  logo: string; 
  previewDescription: string;
  description: string;
  issuer: string;
  date: string;
  link: string;
  showcaseImage: string; 
}

export const siteData = {

  downloadablePortfolio: {
    textDescription: "Your portfolio description here.",
    file: "portfolio.pdf", // Replace with actual file path or URL
  },

  featuredProjects: [
    {
      title: "Project 1",
      description: "A short description of project 1.",
      link: "https://github.com/project1",
    },
    {
      title: "Project 2",
      description: "A short description of project 2.",
      link: "https://github.com/project2",
    },
  ],

  certifications: [
    {
      title: "Clasification title 1",
      colors: ["primary","red1","blue1"],   // if multiple separate them using ,  (customColor1, customColor2, ) ensure colors are defined in tailwind.config file 
      logo: githubLogo,
      previewDescription: ' Get on the fast track to a career in UX design. In this certificate program, you’ll learn in-demand skills, and get AI training from Google experts. Learn at your own pace, no degree or experience required.  ',
      description: " this is the full description",
      issuer: "Github",
      date: " 11/2/2028",
      link: "https:vb76fuc8of.org",
      showcaseImage: ""
    },

    {
      title: "Clasification title 2",
      colors: ["primary","quaternary"],   
      logo: linkedinLogo,
      previewDescription: "Get on the fast track to a career in UX design. In this certificate program, you’ll learn in-demand skills, and get AI training from Google experts. Learn at your own pace, no degree or experience required. ",
      description: "this is the full description",
      issuer: "Coursera",
      date: "7/20/2018",
      link: "https:g3546g24.org",
      showcaseImage: ""
    },

      {
      title: "Clasification title 3",
      colors: ["primary","quaternary"],   
      logo: linkedinLogo,
      previewDescription: "Get on the fast track to a career in UX design. In this certificate program, you’ll learn in-demand skills, and get AI training from Google experts. Learn at your own pace, no degree or experience required. ",
      description: "this is the full description",
      issuer: "Coursera",
      date: "7/20/2018",
      link: "https:g3546g24.org",
      showcaseImage: ""
    },
    {
      title: "Clasification title 1",
      colors: ["primary","red1","blue1"],   // if multiple separate them using ,  (customColor1, customColor2, ) ensure colors are defined in tailwind.config file 
      logo: githubLogo,
      previewDescription: ' Get on the fast track to a career in UX design. In this certificate program, you’ll learn in-demand skills, and get AI training from Google experts. Learn at your own pace, no degree or experience required.  ',
      description: " this is the full description",
      issuer: "Github",
      date: " 11/2/2028",
      link: "https:vb76fuc8of.org",
      showcaseImage: ""
    },

    {
      title: "Clasification title 2",
      colors: ["primary","quaternary"],   
      logo: linkedinLogo,
      previewDescription: "Get on the fast track to a career in UX design. In this certificate program, you’ll learn in-demand skills, and get AI training from Google experts. Learn at your own pace, no degree or experience required. ",
      description: "this is the full description",
      issuer: "Coursera",
      date: "7/20/2018",
      link: "https:g3546g24.org",
      showcaseImage: ""
    },

      {
      title: "Clasification title 3",
      colors: ["primary","quaternary"],   
      logo: linkedinLogo,
      previewDescription: "Get on the fast track to a career in UX design. In this certificate program, you’ll learn in-demand skills, and get AI training from Google experts. Learn at your own pace, no degree or experience required. ",
      description: "this is the full description",
      issuer: "Coursera",
      date: "7/20/2018",
      link: "https:g3546g24.org",
      showcaseImage: ""
    },
    {
      title: "Clasification title 1",
      colors: ["primary","red1","blue1"],   // if multiple separate them using ,  (customColor1, customColor2, ) ensure colors are defined in tailwind.config file 
      logo: githubLogo,
      previewDescription: ' Get on the fast track to a career in UX design. In this certificate program, you’ll learn in-demand skills, and get AI training from Google experts. Learn at your own pace, no degree or experience required.  ',
      description: " this is the full description",
      issuer: "Github",
      date: " 11/2/2028",
      link: "https:vb76fuc8of.org",
      showcaseImage: ""
    },

    {
      title: "Clasification title 2",
      colors: ["primary","quaternary"],   
      logo: linkedinLogo,
      previewDescription: "Get on the fast track to a career in UX design. In this certificate program, you’ll learn in-demand skills, and get AI training from Google experts. Learn at your own pace, no degree or experience required. ",
      description: "this is the full description",
      issuer: "Coursera",
      date: "7/20/2018",
      link: "https:g3546g24.org",
      showcaseImage: ""
    },

      {
      title: "Clasification title 3",
      colors: ["primary","quaternary"],   
      logo: linkedinLogo,
      previewDescription: "Get on the fast track to a career in UX design. In this certificate program, you’ll learn in-demand skills, and get AI training from Google experts. Learn at your own pace, no degree or experience required. ",
      description: "this is the full description",
      issuer: "Coursera",
      date: "7/20/2018",
      link: "https:g3546g24.org",
      showcaseImage: ""
    },
    
    
    

    
    
    // Add more certifications here
  ],

  timeline: [
    'Born Nov 9, 2005',
    "Elementary School",
    "Middle School",
    "Internship",
    "Internship",
    "Bronx Academy For Software Engineering",
    "Project 1",
    "Project 2",
    "Project 3",
    "Certificate 1",
    "Project 4",
    "Certificate 2",
    "Project 5",
    "Certificate 3",
    "Project 6",
  ],
  

  playlist: [
    {
      songTitle: "Song 1",
      artist: "Artist 1",
      url: "https://linktothetrack.com",
    },
    {
      songTitle: "Song 2",
      artist: "Artist 2",
      url: "https://linktothetrack.com",
    },
  ],
    
    
};



  