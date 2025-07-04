
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
      id: 0,
      link: "/one",
      image: cache["camera"],
      title: "Camera",
      component: "One",
      tagline: "",
    },
    {
      id: 0,
      link: "/two",
      image: cache["dpw"],
      title: "DPW",
      component: "Two",
      tagline: "",
    },

    // {
    //   id: #,
    //   link: "",
    //   image: "",
    //   title: "",
    //   tagline: "",
    // },

  ],

}