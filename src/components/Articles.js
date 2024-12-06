import ArticleOneImage from "../image/img/articlesone.png";
import ArticleTwoImage from "../image/img/articlestwo.png";
import ArticleThreeImage from "../image/img/articlesthree.png";

export default function Articles() {
  const articles = [
    {
      badge: "Trips",
      image: ArticleOneImage,
      date: "April 06 2023",
      write: "By Ali Tufan",
      title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
    },
    {
      badge: "Trips",
      image: ArticleTwoImage,
      date: "April 07 2023",
      write: "By Emily Johnson",
      title: "Exploring the Serengeti: A Wildlife Adventure",
    },
    {
      badge: "Trips",
      image: ArticleThreeImage,
      date: "April 08 2023",
      write: "By Maxwell Rhodes",
      title: "Into the Wild: An Unforgettable Safari Journey",
    },
  ];

  return (
    <div className="bg-[#F0F5F1] py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-black text-3xl font-bold">Travel Articles</h1>
          <button className="text-black">See All</button>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {articles.map((article) => (
            <div className="bg-white p-4 rounded-lg w-96">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <span className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded-full">
                  {article.badge}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex gap-5">
                  <p className="text-gray-500 text-sm mb-2">{article.write}</p>
                  <p className="text-gray-500 text-sm">{article.date}</p>
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  {article.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
