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
      "Version 03 of a hastily made self drafted pattern for the perfect pair of pants! This pair is made of the rayon lining from a duvet cover. The pants fit loose through the leg and high on the waist.",
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
      "I was gifted this home fabric and I think it's a cotton blend. The self drafted tank came out a little short hence the vertical stipe detail at the bottom. I went with a contrasting bias tape for the neckline and armholes for a little more whimsy.",
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
      "This is probably my favorite top I've made to date. The fabric is a cotton/linen blend that was originally a curtain panel. The back darts give it a nice shape and this was the first time I tried this neckline.",
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
      "This denim top is almost a direct copy of the Shimmer Summer Top. I used a pair of jeans that don't quite fit and opted for a contrast bias tape. I was even able to make use of the frayed hem of the jeans.",
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
      "I was gifted this gorgeous leftover silk blend curtain panel and decided to make a version of the Fitted Moss Top. Instead of the square sleeves I opted for a diagonal cut and a tapered bodice which allowed me to forgo darts.",
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
      "I lost my wallet and decided to simply make a new one the next day. I was gifted this leather fabric and handsewn the wallet to spare my sewing machine. The key chain is a fun addition that I added to make it easier to find in my bag.",
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
