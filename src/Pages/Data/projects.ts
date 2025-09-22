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
    image:
      "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/dreamPants/front.png",
    detail: [
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/dreamPants/back.png",
        alt: "back",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/dreamPants/detail01.png",
        alt: "detail",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/dreamPants/detail02.png",
        alt: "detail",
      },
    ],
    alt: "example",
  },

  {
    id: 2,
    title: "Watermelon Tank",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image:
      "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/watermelonTank/front.png",
    detail: [
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/watermelonTank/back.png",
        alt: "back",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/watermelonTank/detail02.png",
        alt: "detail",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/watermelonTank/detail01.png",
        alt: "detail",
      },
    ],
    alt: "example",
  },

  {
    id: 3,
    title: "Fitted Moss Top",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    image:
      "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/fittedMossTop/front.png",
    detail: [
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/fittedMossTop/back.png",
        alt: "back",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/fittedMossTop/detail02.png",
        alt: "detail",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/fittedMossTop/detail01.png",
        alt: "detail",
      },
    ],
    alt: "example",
  },

  {
    id: 4,
    title: "Everyday Denim Top",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image:
      "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/everydayDenimTop/front.png",
    detail: [
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/everydayDenimTop/back.png",
        alt: "back",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/everydayDenimTop/detail02.png",
        alt: "detail",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/everydayDenimTop/detail01.png",
        alt: "detail",
      },
    ],
    alt: "example",
  },
  {
    id: 5,
    title: "Summer Shimmer Top",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    image:
      "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/summerShimmerTop/front.png",
    detail: [
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/summerShimmerTop/back.png",
        alt: "back",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/summerShimmerTop/detail01.png",
        alt: "detail",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/summerShimmerTop/detail02.png",
        alt: "detail",
      },
    ],
    alt: "example",
  },

  {
    id: 6,
    title: "Perfect Wallet",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/perfectWallet/front.png",
    detail: [
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/perfectWallet/back.png",
        alt: "back",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/perfectWallet/detail01.png",
        alt: "detail",
      },
      {
        img: "https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/perfectWallet/detail02.png",
        alt: "detail",
      },
    ],
    alt: "example",
  },
];

export default projects;
