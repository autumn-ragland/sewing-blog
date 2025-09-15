// import "rayonPants" from "../../Images/rayon_pants.jpeg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}
// https://googledrive.com/host/<folderID>/<filename>

// https://drive.google.com/drive/folders/1Zxu76cQzrFZJt8O_gHudX_Y6fNcDIeWR?usp=sharing
// https://drive.google.com/file/d/1cFtogqkVUQ7VNXKLYeF5omN-V7v9zhZV/view?usp=sharing
const projects: Project[] = [
  {
    id: 1,
    title: "Dream Pants",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    image:
      "https://lh3.googleusercontent.com/d/1cFtogqkVUQ7VNXKLYeF5omN-V7v9zhZV",
    alt: "example",
  },

  {
    id: 2,
    title: "Watermelon Tank",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image: "rayonPants",
    alt: "example",
  },

  {
    id: 3,
    title: "Spliced Tank",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    image: "rayonPants",
    alt: "example",
  },

  {
    id: 4,
    title: "Foundation Dress",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "rayonPants",
    alt: "example",
  },
  {
    id: 5,
    title: "Mini Swing Dress",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    image: "rayonPants",
    alt: "example",
  },

  {
    id: 6,
    title: "Perfect Wallet",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "rayonPants",
    alt: "example",
  },
];

export default projects;
