import { Clothe } from "../components/display/ClotheCarousel/ClotheCarousel";
export default function useProduct(id?: number): Clothe[] | Clothe | undefined {
  const clothes: Clothe[] = [
    {
      id: 1,
      image: "https://static.zara.net/photos///2023/V/0/2/p/3199/401/708/2/w/372/3199401708_2_1_1.jpg?ts=1680694174892",
    },
    {
      id: 2,
      image: "https://static.zara.net/photos///2023/V/0/2/p/3199/401/406/2/w/372/3199401406_2_1_1.jpg?ts=1680705452672",
    },
    {
      id: 3,
      image: "https://static.zara.net/photos///2023/V/0/2/p/6224/471/251/2/w/372/6224471251_2_4_1.jpg?ts=1680702572076",
    },
    {
      id: 4,
      image: "https://static.zara.net/photos///2023/V/0/2/p/6224/471/251/2/w/372/6224471251_2_2_1.jpg?ts=1680702572140",
    },
  ];
  return id ? clothes.find((clothe) => clothe.id === id) : clothes;
}
