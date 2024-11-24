"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "../styles/bookshelf.css";

interface Book {
  title: string;
  author: string;
  cover: string;
  report: string;
  spineTitleStyles?: React.CSSProperties;
  spineAuthorStyles?: React.CSSProperties;
}

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomChoice = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRootCssStyles = (): string[] => {
  return [
    "--spine-pyramid",
    "--spine-stairs",
    "--spine-argyle",
    "--spine-tartan",
    "--spine-stripes",
    "--spine-chevron",
    "--spine-zigzag",
    "--spine-tablecloth",
    "--spine-herringbone",
    "--spine-waves",
    "--spine-leather",
    "--spine-circuit",
    "--spine-op",
    "--spine-sashiko",
    "--spine-marrakesh",
    "--spine-braided",
    "--spine-marble",
    "--spine-weave",
    "--spine-crosshatch",
    // Add more patterns as required
  ];
};

const books: Book[] = [
  {
    title: "1984",
    author: "George Orwell",
    cover: "https://m.media-amazon.com/images/I/71rpa1-kyvL._SL1500_.jpg",
    report: "1984.md",
    spineTitleStyles: {
      color: "black",
      fontSize: "35px",
      fontFamily: "serif",
    },
    spineAuthorStyles: {
      color: "black",
      fontSize: "16px",
      fontFamily: "sans-serif",
    },
  },
  {
    title: "Stories of Your Life and Others",
    author: "Ted Chiang",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Publication128/v4/b9/29/61/b92961a1-147f-c649-dc25-6c4e3a089b55/9781931520898.jpg/100000x100000-999.jpg",
    report: "",
    spineTitleStyles: {
      color: "gold",
      fontSize: "16px", // Adjust size if needed
      fontFamily: "sans-serif",
      textOrientation: "mixed",
      whiteSpace: "normal",
      wordWrap: "break-word",

      lineHeight: "1.2em",
    },
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    cover:
      "https://sarehlovasen.wordpress.com/wp-content/uploads/2021/10/img_5623.jpg?w=310",
    report: "",
    spineTitleStyles: {
      color: "white",
      fontSize: "20px",
      fontFamily: "sans-serif",
    },
    spineAuthorStyles: {
      color: "yellow",
      fontSize: "20px",
      fontFamily: "monospace",
    },
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Publication111/v4/5a/23/10/5a231085-a455-131c-8e1b-8d1331f6e5de/9780062416216_marketingimage.jpg/100000x100000-999.jpg",
    report: "template.md",
    spineTitleStyles: {
      color: "white",
      fontSize: "20px",
      fontFamily: "sans-serif",
    },
    spineAuthorStyles: {
      color: "yellow",
      fontSize: "20px",
      fontFamily: "monospace",
    },
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Publication3/v4/55/4f/23/554f23d3-b633-0c7e-6cf0-5dbaf524b735/9788858407240.jpg/100000x100000-999.jpg",
    report: "",
  },
  {
    title: "The Song of Achilles",
    author: "Madeline Miller",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Publication125/v4/8d/b1/fd/8db1fd98-753b-1975-6e83-c2668263b4e4/9780062060631.jpg/100000x100000-999.jpg",
    report: "tsoa.md",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Publication4/v4/6e/4f/4e/6e4f4e8c-a6e4-52bb-3fd7-2b11e291a45a/9780307829603.jpg/100000x100000-999.jpg",
    report: "c&p.md",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    cover:
      "https://images.squarespace-cdn.com/content/v1/56cde58af699bb2bd4ea993a/1600027397959-8AFCA5EFW64N7K05OJ7Y/AF+New+Deluxe+Trade+Kait.jpg?format=1000w",
    report: "animal_farm.md",
  },
  {
    title: "Stoner",
    author: "John Williams",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Publication125/v4/bf/1f/bc/bf1fbcda-11b3-4cee-2909-1104ebe422b6/9781590173930.jpg/100000x100000-999.jpg",
    report: "stoner.md",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    cover: "https://m.media-amazon.com/images/I/71agR0zF7mL._SL1200_.jpg",
    report: "tbk.md",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Publication123/v4/6e/64/6b/6e646b24-17de-f178-d4dd-0b3a34934d2a/PD_Frankensein-Adj.jpg/100000x100000-999.jpg",
    report: "frankenstein.md",
  },
  {
    title: "Muder on the Orient Express",
    author: "Agatha Christie",
    cover:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCYvJEPMTSP2bq3WRydozS32Y7CN794LaJkNHX73sUv3E4eBQAMRq0p2p71ghxluijADjYGYHWvPIVoypilmuyFfQUtco-9ZwUDkaS9J0sP6fWcHIuyUMt2ulPCnGvAuXIzlaxy7koWqrtr92rHm49AZs1mbvqzRf6UGuRK1UQXwFtwglCJxrcQzN9IzPo/s786/2011.AgathaChristie.MurderOnTheOrientExpress.Harper.a.j...jpeg",
    report: "murder_on_the_orient_express.md",
  },
  // Add more books with URLs, reports, and spine styles here
];

const books2023: Book[] = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J. K. Rowling",
    cover:
      "https://media.harrypotterfanzone.com/sorcerers-stone-us-childrens-edition-1050x0-c-default.jpg",
    report: "hp.md",
    spineTitleStyles: {
      color: "gold",
      fontSize: "16px", // Adjust size if needed
      fontFamily: "sans-serif",
      textOrientation: "mixed",
      whiteSpace: "normal",
      wordWrap: "break-word",
      lineHeight: "1.2em",
    },
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    cover:
      "https://media.harrypotterfanzone.com/chamber-of-secrets-us-childrens-edition-1050x0-c-default.jpg",
    report: "hp.md",
    spineTitleStyles: {
      color: "gold",
      fontSize: "16px", // Adjust size if needed
      fontFamily: "sans-serif",

      textOrientation: "mixed",
      whiteSpace: "normal",
      wordWrap: "break-word",

      lineHeight: "1.2em",
    },
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J. K. Rowling",
    cover:
      "https://media.harrypotterfanzone.com/prisoner-of-azkaban-us-childrens-edition-1050x0-c-default.jpg",
    report: "hp.md",
    spineTitleStyles: {
      color: "gold",
      fontSize: "16px", // Adjust size if needed
      fontFamily: "sans-serif",

      textOrientation: "mixed",
      whiteSpace: "normal",
      wordWrap: "break-word",

      lineHeight: "1.2em",
    },
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J. K. Rowling",
    cover:
      "https://media.harrypotterfanzone.com/goblet-of-fire-us-childrens-edition.jpg",
    report: "hp.md",
    spineTitleStyles: {
      color: "gold",
      fontSize: "16px", // Adjust size if needed
      fontFamily: "sans-serif",
      textOrientation: "mixed",
      whiteSpace: "normal",
      wordWrap: "break-word",

      lineHeight: "1.2em",
    },
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J. K. Rowling",
    cover:
      "https://media.harrypotterfanzone.com/order-of-the-phoenix-us-childrens-edition-1050x0-c-default.jpg",
    report: "hp.md",
    spineTitleStyles: {
      color: "gold",
      fontSize: "16px", // Adjust size if needed
      fontFamily: "sans-serif",
      textOrientation: "mixed",
      whiteSpace: "normal",
      wordWrap: "break-word",

      lineHeight: "1.2em",
    },
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J. K. Rowling",
    cover:
      "https://media.harrypotterfanzone.com/half-blood-prince-us-childrens-edition-1050x0-c-default.jpg",
    report: "hp.md",
    spineTitleStyles: {
      color: "gold",
      fontSize: "16px", // Adjust size if needed
      fontFamily: "sans-serif",
      textOrientation: "mixed",
      whiteSpace: "normal",
      wordWrap: "break-word",

      lineHeight: "1.2em",
    },
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J. K. Rowling",
    cover:
      "https://media.harrypotterfanzone.com/deathly-hallows-uk-childrens-edition-1050x0-c-default.jpg",
    report: "hp.md",
    spineTitleStyles: {
      color: "gold",
      fontSize: "16px", // Adjust size if needed
      fontFamily: "sans-serif",
      textOrientation: "mixed",
      whiteSpace: "normal",
      wordWrap: "break-word",

      lineHeight: "1.2em",
    },
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Publication116/v4/a6/cb/fc/a6cbfc7d-3c6a-d9f1-b83c-c24cbd61ef77/9780735211308.d.jpg/100000x100000-999.jpg",
    report: "",
  },
  {
    title: "The Silent Patient",
    author: "Alex Michae...",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Publication124/v4/71/24/e9/7124e956-9924-4424-64bc-09cbf082a04a/9781250301710.jpg/100000x100000-999.jpg",
    report: "",
  },
  // Add more books as needed
];

const Bookshelf: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [reportContent, setReportContent] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const reviewContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spines = document.getElementsByClassName(
      "spine",
    ) as HTMLCollectionOf<HTMLElement>;
    const covers = document.getElementsByClassName(
      "cover",
    ) as HTMLCollectionOf<HTMLElement>;
    const tops = document.getElementsByClassName(
      "top",
    ) as HTMLCollectionOf<HTMLElement>;

    const availablePatterns = getRootCssStyles();

    const availableColors = [
      "maroon",
      "darkgreen",
      "darkolivegreen",
      "brown",
      "saddlebrown",
      "sienna",
      "midnightblue",
      "#FF681F",
    ];

    Array.from(spines).forEach((s, i) => {
      const randomHeight = getRandomInt(230, 290);
      const topOffset = 280 - randomHeight;

      s.style.height = `${randomHeight}px`;
      s.style.top = `${topOffset}px`;

      const randomPattern = randomChoice(availablePatterns);
      s.style.backgroundImage = `var(${randomPattern})`;

      const randomColor = randomChoice(availableColors);
      s.style.backgroundColor = randomColor;

      if (covers[i]) {
        covers[i].style.height = `${randomHeight}px`;
        covers[i].style.top = `${topOffset}px`;
        covers[i].style.backgroundColor = randomColor;
      }

      if (tops[i]) {
        tops[i].style.top = `${topOffset}px`;
        tops[i].style.backgroundColor = randomColor;
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (reviewContentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          reviewContentRef.current;
        const scrollPercentage =
          (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(scrollPercentage);
      }
    };

    const reviewContent = reviewContentRef.current;
    if (reviewContent) {
      reviewContent.addEventListener("scroll", handleScroll);
      reviewContent.scrollTop = 0;
    }

    return () => {
      if (reviewContent) {
        reviewContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, [selectedBook]);

  const handleBookClick = async (book: Book) => {
    setSelectedBook(book);
    setScrollProgress(0);
    const reportFile = book.report || "template.md";
    const response = await fetch(`/reports/${reportFile}`);
    const text = await response.text();
    setReportContent(text);
  };

  const closeReview = () => {
    setSelectedBook(null);
    setReportContent("");
    setScrollProgress(0);
  };

  return (
    <div className="max-w-2xl mx-auto py-4 flex flex-col min-h-screen">
      <div className="section-header-books">
        <span className="section-title-books"> &#123;books&#125; </span>
      </div>
      <p className="!text-gray-400 mt-4">
        click on a book for my review on it!
      </p>
      <div className="bookshelf-container">
        <h2 className="font-black mt-2">2024</h2>

        <div className="bookshelf">
          {books.map((book, index) => (
            <div
              className="book"
              key={index}
              onClick={() => handleBookClick(book)}
            >
              <div className="side spine">
                <span
                  className={`spine-title ${
                    book.spineTitleStyles ? "" : "spine-title"
                  }`}
                  style={book.spineTitleStyles || {}}
                >
                  {book.title}
                </span>
                <span
                  className={`spine-author ${
                    book.spineAuthorStyles ? "" : "spine-author"
                  }`}
                  style={book.spineAuthorStyles || {}}
                >
                  {book.author}
                </span>
              </div>
              <div className="side top"></div>
              <div
                className="side cover"
                style={{ backgroundImage: `url(${book.cover})` }}
              ></div>
            </div>
          ))}
        </div>
        <hr />

        <h2 className="font-black mt-4">2023</h2>
        <div className="bookshelf">
          {books2023.map((book, index) => (
            <div
              className="book"
              key={index}
              onClick={() => handleBookClick(book)}
            >
              <div className="side spine">
                <span
                  className={`spine-title ${
                    book.spineTitleStyles ? "" : "spine-title"
                  }`}
                  style={book.spineTitleStyles || {}}
                >
                  {book.title}
                </span>
                <span
                  className={`spine-author ${
                    book.spineAuthorStyles ? "" : "spine-author"
                  }`}
                  style={book.spineAuthorStyles || {}}
                >
                  {book.author}
                </span>
              </div>
              <div className="side top"></div>
              <div
                className="side cover"
                style={{ backgroundImage: `url(${book.cover})` }}
              ></div>
            </div>
          ))}
        </div>
        <hr />

        {selectedBook && (
          <div className="review-modal">
            <div
              className="scroll-progress-bar"
              style={{ width: `${scrollProgress}%` }}
            ></div>
            <div className="review-content" ref={reviewContentRef}>
              <ReactMarkdown className="prose" rehypePlugins={[rehypeRaw]}>
                {reportContent}
              </ReactMarkdown>
              <button onClick={closeReview}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
