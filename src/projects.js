
// Import all images in bulk, traverse over all images in folder (including subdirectories)
//   and nicely cleans up the variables, so they can be easily called
//
//   here's the syntax required to call an image from the ./images/projects directory:
//     - if image file path is:
//         ./images/projects/oldisgold_cover.png -> cache["oldisgold_cover"]
//     - if image is under a project subdirectory, and the file path is:
//         ./images/projects/oldisgold/research_1.png -> cache["oldisgold_research_1"]
//
//   in other words, follow the naming and nesting conventions of the images folder,
//     then the image becomes easy to call - use the project name, underscore,
//     then the filename (without the file extension)

var cache = {};
function importAll(img) {
  img.keys().forEach((key) => { 
    // save off source path of the image
    const source = img(key);

    // clean up image key, to make it easy to locate
    key = key.replace('./', '');
    key = key.replace('.png', '');
    key = key.replace('.jpg', '');
    key = key.replace('.jpeg', '');
    key = key.replace('.svg', '');
    key = key.replace('/', '_');
    cache[key] = source;

  });
}

importAll(require.context('./images/projects', true, /\.(png|jpe?g|svg)$/));
// console.log(cache);


export default {
  test_projects: [
    {
      id: 0,
      link: "/one",
      image: "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D",
      title: "One",
      component: "One",
      tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 1,
      link: "/two",
      image: "https://i.redd.it/atj3t9lsui631.jpg",
      title: "Two",
      component: "Two",
      tagline: "Link",
    },
    {
      id: 2,
      link: "/three",
      image: "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D",
      title: "Three",
      component: "Three",
      tagline: "Stairs",
    },
    {
      id: 3,
      link: "/four",
      image: "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D",
      title: "Four",
      component: "Four",
      tagline: "Sand",
    },
    {
      id: 4,
      link: "/five",
      image: "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D",
      title: "Five",
      component: "Five",
      tagline: "Pink",
    },
    {
      id: 5,
      link: "/six",
      image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D",
      title: "Six",
      component: "Six",
      tagline: "Plane",
    },
    {
      id: 6,
      link: "/seven",
      image: "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D",
      title: "Seven",
      component: "Seven",
      tagline: "Sandstone",
    },
    // {
    //   id: #,
    //   link: "",
    //   image: "",
    //   title: "",
    //   tagline: "",
    // },
  ],

  projects: [
    {
      id: 0,
      link: "/oldisgold",
      image: cache["oldisgold_cover"],
      title: "Old is Gold",
      tagline: "using design to connect generations",

      context: "School",
      org: "6-person team",
      timeframe: "Semester",
      role: [
      "Product designer",
      "Visual designer",
      "CAD designer",
      ],

      overview: "Older adults (60+) have historically reported high levels of loneliness for a variety of factors, including age-related disability and living situation. Social distancing policies enacted to limit the spread of COVID-19, exacerbated these conditions unintentionally. This project sought to establish new modes of social interaction between older adults and family/friends, to help mitigate feelings of social isolation within the context of the global pandemic especially.",

      images: [{

        research: [
          {
            image: cache["oldisgold_research1"],
            alt: "recreational center",
          },
          {
            image: cache["oldisgold_research3"],
            alt: "library",
          },
        ],
        concept1: [
          {
            image: cache["oldisgold_concept1_1"],
            alt: "objective tree",
          },
          {
            image: cache["oldisgold_concept1_2"],
            alt: "mindmap",
          },
        ],
        survey1: [
          {
            image: cache["oldisgold_survey1_1"],
            alt: "survey general questions",
          },
          {
            image: cache["oldisgold_survey1_2"],
            alt: "survey artifact questions",
          }
        ],
        concept2: [
          {
            image: cache["oldisgold_concept2_1"],
            alt: "sketches",
          },
          {
            image: cache["oldisgold_concept2_2"],
            alt: "graph",
          },
        ],
        concept3: [
          {
            image: cache["oldisgold_concept3_1"],
            alt: "feature ideas",
          },
          {
            image: cache["oldisgold_concept3_2"],
            alt: "deciding",
          },
        ],
        concept4: [
          {
            image: cache["oldisgold_concept4"],
            alt: "moodboard",
          },
        ],
        sketch: [
          {
            image: cache["oldisgold_sketch1"],
            alt: "plant sketch",
          },
          {
            image: cache["oldisgold_sketch2"],
            alt: "moon sketch",
          },
        ],
        prototype1: [
          {
            image: cache["oldisgold_prototype1_1"],
            alt: "moon prototype (open)",
          },
          {
            image: cache["oldisgold_prototype1_2"],
            alt: "moon prototype (halfway)",
          },
          {
            image: cache["oldisgold_prototype1_3"],
            alt: "moon prototype (closed)",
          },
        ],
        survey2: [
          {
            image: cache["oldisgold_survey2"],
            alt: "most preferred designs",
          },
        ],
        unify1: [
          {
            image: cache["oldisgold_prototype2_1"],
            alt: "wood prototype of base",
          },
          {
            image: cache["oldisgold_unify1_1"],
            alt: "interface sketch",
          },
        ],
        journey: [
          {
            image: cache["oldisgold_journey"],
            alt: "user journey",
          },
        ],
        prototype2: [
          {
            image: cache["oldisgold_interaction2"],
            alt: "final base",
          },
          {
            image: cache["oldisgold_interaction1"],
            alt: "tactile idea for interface",
          },
        ],
        revision: [
          {
            image: cache["oldisgold_revision"],
            alt: "series revision",
          },



        ],
        metamorphic: [
          {
            image: cache["oldisgold_metamorphic1"],
            alt: "metamorphic lamp series (closed)",
          },
          {
            image: cache["oldisgold_metamorphic2"],
            alt: "metamorphic lamp series (open)",
          },
        ],
        modern: [
          {
            image: cache["oldisgold_modern"],
            alt: "modern lamp series",
          },
        ],
        paper: [
          {
            image: cache["oldisgold_paper1"],
            alt: "paper lamp series type 1",
          },
          {
            image: cache["oldisgold_paper2"],
            alt: "paper lamp series type 2",
          },
        ],
        mini: [
          {
            image: cache["oldisgold_mini"],
            alt: "mini lamp series",
          },
        ],






      }],




    },
    {
      id: 1,
      link: "/zoom",
      image: cache["zoom_cover"],
      title: "Zoom++",
      tagline: "education within the remote world",

      context: "School",
      org: "4-person team",
      timeframe: "Semester",
      role: [
      "Visual designer",
      ],

      overview: "How could we increase the productivity and engagement of remote learning solutions to better accommodate the needs and wants of users within the field of education? Inspired by regenerative design, we focused on building out existing systems, rather than building a completely new one from scratch. This way, we could address persistent problems right at the source they were originating. Using Zoom as a backbone, the team proposed a series of changes that would improve levels of participation: avatars, reactions, and dynamic bubble size.",
    },
    {
      id: 2,
      link: "/degreezy",
      image: cache["degreezy_cover"],
      title: "Degreezy",
      tagline: "a friendly degree planner",

      context: "School",
      org: "6-person team",
      timeframe: "Semester",
      role: [
      "Front-end developer",
      "Integration",
      "Designer",
      ],

      overview: "Students often come into college unprepared and uncertain of what they will study. But a plan of what courses they will take can keep them on track, and prevent a delayed graduation timeline. Degreezy is a web application that helps students create a college plan suited to their area of study. It measures course requirements and prerequisites, and enables complete visualization of degree progress.",

      images: [{
        mockup: [
          {
            image: cache["degreezy_mockup1"],
            alt: "search mockup",
          },
          {
            image: cache["degreezy_mockup2"],
            alt: "drag and drop mockup",
          },
          {
            image: cache["degreezy_mockup3"],
            alt: "requirement check mockup",
          },
          {
            image: cache["degreezy_mockup4"],
            alt: "export mockup",
          },
        ],
        schema: [
          {
            image: cache["degreezy_schema"],
            alt: "database schema for programs table",
          },
        ],
        prototype1: [
          {
            image: cache["degreezy_prototype1_1"],
            alt: "prototype homepage",
          },
        ],
        prototype2: [
          {
            image: cache["degreezy_prototype2_1"],
            alt: "prototype mobile view",
          },
          {
            image: cache["degreezy_prototype2_2"],
            alt: "prototype export print",
          },
        ],
        iteration: [
          {
            image: cache["degreezy_iteration"],
            alt: "iteration homepage",
          },
        ],
        outcome: [
          {
            image: cache["degreezy_outcome1"],
            alt: "final login page",
          },
          {
            image: cache["degreezy_outcome2"],
            alt: "final print function",
          },
        ],
      }],
    },
    {
      id: 3,
      link: "/nookhook",
      image: cache["nook_cover"],
      title: "Nook Hook",
      tagline: "reducing collaboration barriers",

      context: "School",
      org: "Solo",
      timeframe: "1 month",
      role: [
      "Varied",
      ],

      overview: "Within my program's collaborative design-centric studio space, there is no designated backpack storage. As a result, bags are often placed on the ground where they are out of reach. They also become obstacles that encumber efforts to rearrange tables and chairs. A simple table hook solution is proposed that promotes feelings of stability and security, important because of the heavy and valuable contents of backpacks.",

      images: [{
        brainstorming: [
          {
            image: cache["nook_brainstorming1"],
            alt: "brainstorm list",
          },
          {
            image: cache["nook_brainstorming2"],
            alt: "brainstorm mindmap"
          },
        ],
        studio: [
          {
            image: cache["nook_studio"],
            alt: "studio room photo",
          },
        ],
        studio2: [
          {
            image: cache["nook_studio2"],
            alt: "studio room CAD render",
          },
        ],
        thumbnail: [
          {
            image: cache["nook_thumbnail"],
            alt: "variation thumbnails",
          },
        ],
        pinup: [
          {
            image: cache["nook_pinup"],
            alt: "pinup of solution",
          },
        ],
        prototype: [
          {
            image: cache["nook_prototype1"],
            alt: "cork prototype (unfinished)",
          },
          {
            image: cache["nook_prototype2"],
            alt: "cork prototype (smoothed)"
          },
          {
            image: cache["nook_prototype3"],
            alt: "user testing prototype"
          },
        ],
        outcome: [
          {
            image: cache["nook_outcome1"],
            alt: "3d printed prototype",
          },
          {
            image: cache["nook_outcome2"],
            alt: "3d printed prototype (scale)"
          },
          {
            image: cache["nook_outcome3"],
            alt: "3d printed prototype (side view)"
          },
        ],
      }]

    },
    {
      id: 4,
      link: "/pushpin",
      image: cache["pushpin_cover"],
      title: "PushPin",
      tagline: "digital poster bulletin board",

      context: "School",
      org: "5-person team",
      timeframe: "Semester",
      role: [
      "Designer",
      "Front-end developer",
      ],

      overview: "Clubs and organizations frequently advertise events and activities by paper postering along heavily frequented campus walkways. pushPin is a web-based solution that bundles event details and club advertisements into one consolidated digital environment. This virtual poster bulletin would significantly reduce paper waste, while alleviating the burden for club managers and increasing engagement from event-goers.",

      images: [{
        background: [
          {
            image: cache["pushpin_background1"],
            alt: "bridge with posters",
          },
          {
            image: cache["pushpin_background2"],
            alt: "pillar with posters"
          },
        ],
        wireframe: [
          {
            image: cache["pushpin_wireframe1"],
            alt: "home wireframe",
          },
          {
            image: cache["pushpin_wireframe2"],
            alt: "details view wireframe"
          },
        ],
        mockup: [
          {
            image: cache["pushpin_mockup1"],
            alt: "manage mockup"
          },
          {
            image: cache["pushpin_mockup2"],
            alt: "upload mockup"
          },
        ],
        prototype1: [
          {
            image: cache["pushpin_prototype1_1"],
            alt: "home prototype"
          },
          {
            image: cache["pushpin_prototype1_2"],
            alt: "home overlay prototype"
          },
          {
            image: cache["pushpin_prototype1_3"],
            alt: "login prototype"
          },
        ],
        prototype2: [
          {
            image: cache["pushpin_prototype2_1"],
            alt: "manage prototype"
          },
          {
            image: cache["pushpin_prototype2_2"],
            alt: "upload prototype"
          },
        ],
        logo1: [
          {
            image: cache["pushpin_logo1_1"],
            alt: "logo spread"
          },
        ],
        logo2: [
          {
            image: cache["pushpin_logo2_1"],
            alt: "abstract logo experiment"
          },
          {
            image: cache["pushpin_logo2_2"],
            alt: "thumbtack symbol experiment"
          },
          {
            image: cache["pushpin_logo2_3"],
            alt: "simplified symbol, vertical ascender height experiment"
          },
        ],
        emulation: [
          {
            image: cache["pushpin_emulation1"],
            alt: "art club poster photo"
          },
          {
            image: cache["pushpin_emulation2"],
            alt: "art club poster edited"
          },
        ],
        outcome: [
          {
            image: cache["pushpin_outcome1"],
            alt: "home outcome"
          },
          {
            image: cache["pushpin_outcome2"],
            alt: "manage outcome"
          },
        ],



      }],


    },
    {
      id: 5,
      link: "/magnet",
      image: cache["magnet_cover"],
      title: "Magnet",
      tagline: "privacy within shared accommodations",

      context: "School",
      org: "Solo",
      timeframe: "1 week",
      role: [
      "Varied",
      ],

      // I live in a shared apartment with three other people. We each have a single room with a shared bathroom and kitchen. The bathroom space of the apartment has an open doorway which leads to an area with two sinks. By going further into the space, the toilet and shower can be reached through (what I shall call) the “bathroom door.” There is also a light switch in this toilet/shower section of the bathroom which turns on the light and a fan. This all seems fine, but this bathroom door, unfortunately, does not have a doorknob that locks. As one might expect in terms of privacy, this situation is slightly problematic. Over the past few weeks, my roommates and I have developed a strategy to make sure we don’t accidentally walk into the toilet/shower area when it is occupied. When the door is fully closed and the sound of the fan can be heard, we all know that someone is using the bathroom. When the bathroom is unoccupied, the bathroom door is kept open and the light/fan is kept off. So far with this system, my roommates and I have been able to use the bathroom while maintaining each other’s privacy.

      overview: "Within my shared living accommodations, the bathroom doorknob had no lock! To increase privacy, I wanted to find a non-invasive way to signal the bathroom was in use. A magnetic mechanism, with two magnet circles (stickered half-green and half-red) and two plastic housings, provided the ideal non-invasive and impermanent solution. When applied on both sides of the bathroom door, societally understood paradigms allowed for easy use (rotate to green for open/free, and red for closed/busy).",
      prompt: "Our goal was to 'design for yourself.' We did this incrementally, through daily journal entries noting observations of the world around us. We asked ourselves questions like: What's new? What's the same? What's frustrating or comforting? What's working and what isn't? After a few journal entries like this, we were asked to draw our least favorite things/places.",
      focus: "I drew many different potential areas of interest, including my uncomfortable dorm room chair and an awkward bench design. But then I stumbled on a far more critical and interesting issue: the absence of a lock within a shared bathroom space.",
      process: "I started off with a simple sketch and a brainstorm. I thought about why a lock is expected in the first place, as well as shape, color, and utility. At this point, I realized I would need a non-invasive, impermanent solution. Why? Because this living space was provided under the assumption it was kept in the same condition as when we first moved in.",
      outcome: "Four pieces are included: two magnetic circles (stickered half green and red) and two plastic housings. The magnetic circles are placed on either side of the door. The housings are affixed around them with easily removable adhesive. The small cutouts on either side indicate whether the bathroom is free (green) or busy (red). The intention being a user can rotate to a chosen color from inside the bathroom, which would simultaneously rotate both magnets.",
      reflection: "This project is successful because it relies on paradigms we are already familiar with. Similar interactions and colors are used in public stalls and combination locks. If there were more time, I would love to create a low-fidelity prototype I could test on my roommates.",

      images: [{

        focus: [
          {
            image: cache["magnet_focus_1"],
            alt: "chair sketch",
          },
          {
            image: cache["magnet_focus_2"],
            alt: "bench sketch",
          },
        ],

        process: [
          {
            image: cache["magnet_process_1"],
            alt: "magnet mindmap",
          },
        ],

        outcome: [
          {
            image: cache["magnet_outcome_1"],
            alt: "magnet alternate views",
          },
          {
            image: cache["magnet_outcome_2"],
            alt: "magnet main components",
          },
          {
            image: cache["magnet_outcome_3"],
            alt: "magnet door sketch",
          },
        ],

      }],

    },
    // {
    //   id: 6,
    //   link: "/oldisgold",
    //   image: oldisgold_cover,
    //   title: "Old is Gold",
    //   tagline: "using design to connect generations",
    // },


    // {
    //   id: #,
    //   link: "",
    //   image: "",
    //   title: "",
    //   tagline: "",

      // context: "",
      // org: "",
      // timeframe: "",
      // role: [
      // "",
      // ],

      // overview: "",
    // },

  ],

}