
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

importAll(require.context('./images/gallery', true, /\.(png|jpe?g|svg)$/));
// console.log(cache);


export default {
  gallery: [
    {
      id: 3,
      image: cache["bulk pickup"],
      title: "Bulk Pickup",
      tagline: "Built a fully functional web application for the Department of Public Works to track and manage bulk pickup trash requests. Based on observation and interviews with real-world users. Replaced an aging system reliant on the know-how of a single longtime employee close to retirement.",
    },
    {
      id: 0,
      image: cache["sensemaking"],
      title: "Sensemaking",
      tagline: "Mockup for an intelligence sensemaking use case. Participants work collaboratively within the same room, using their own devices and a 360° immersive wraparound screen.",
    },
    {
      id: 1,
      image: cache["legacy"],
      title: "Legacy",
      tagline: "Poster proposal for an oral history process for collecting and learning from ancestral familial stories.",
    },
    {
      id: 2,
      image: cache["camera"],
      title: "Camera",
      tagline: "3D CAD model of a camera, rendered in topdown orthographic view.",
    },
    {
      id: 4,
      image: cache["dashboard"],
      title: "Dashboard",
      tagline: "Mockup of a dashboard for disease tracking and prevention.",
    },
    {
      id: 4,
      image: cache["logo"],
      title: "Logo",
      tagline: "Personal logo explorations. Combines first and last initials into a single lettermark.",
    },
    // {
    //   id: 5,
    //   link: "/five",
    //   image: cache["sitemap"],
    //   title: "Sitemap",
    //   component: "Two",
    //   tagline: "",
    // },



    // {
    //   id: #,
    //   link: "",
    //   image: "",
    //   title: "",
    //   tagline: "",
    // },

  ],

}