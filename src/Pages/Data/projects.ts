import rayon_pants from "../../Images/rayon_pants.jpeg";
import summerShimmerTopFront from "../../Images/summerShimmerTop/front.png";
import summerShimmerTopBack from "../../Images/summerShimmerTop/back.png";
import summerShimmerTopDetail01 from "../../Images/summerShimmerTop/detail01.png";
import summerShimmerTopDetail02 from "../../Images/summerShimmerTop/detail02.png";
import dreamPantsFront from "../../Images/dreamPants/front.png";
import dreamPantsBack from "../../Images/dreamPants/back.png";
import dreamPantsDetail01 from "../../Images/dreamPants/detail01.png";
import dreamPantsDetail02 from "../../Images/dreamPants/detail02.png";

interface ProjectDetail {
  img: string;
  alt: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  detail?: ProjectDetail[];
}
const projects: Project[] = [
  {
    id: 1,
    title: "Dream Pants",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    image: dreamPantsFront,
    detail: [
      { img: dreamPantsBack, alt: "back" },
      { img: dreamPantsDetail02, alt: "detail" },
      { img: dreamPantsDetail01, alt: "detail" },
    ],
    alt: "example",
  },

  {
    id: 2,
    title: "Watermelon Tank",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image: rayon_pants,
    alt: "example",
  },

  {
    id: 3,
    title: "Spliced Tank",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    image: rayon_pants,
    alt: "example",
  },

  {
    id: 4,
    title: "Foundation Dress",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: rayon_pants,
    alt: "example",
  },
  {
    id: 5,
    title: "Summer Shimmer Top",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    image: summerShimmerTopFront,
    detail: [
      { img: summerShimmerTopBack, alt: "back" },
      { img: summerShimmerTopDetail01, alt: "detail" },
      { img: summerShimmerTopDetail02, alt: "detail" },
    ],
    alt: "example",
  },

  {
    id: 6,
    title: "Perfect Wallet",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: rayon_pants,
    alt: "example",
  },
];

export default projects;
