"use client";

import React, { useState, useEffect } from "react";
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
    // Add more patterns as required
  ];
};

const books: Book[] = [
  {
    title: "1984",
    author: "GO",
    cover:
      "https://149522020.v2.pressablecdn.com/wp-content/uploads/2017/01/2a34d8_a6741e88335241308890543d203ad89dmv2.jpg",
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
    author: "TC",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Publication128/v4/b9/29/61/b92961a1-147f-c649-dc25-6c4e3a089b55/9781931520898.jpg/100000x100000-999.jpg",
    report: "",
    spineTitleStyles: {
      color: "white",
      fontSize: "13px",
      fontFamily: "sans-serif",
    },
  },
  {
    title: "Dune",
    author: "FH",
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
    author: "PC",
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
    author: "HM",
    cover:
      "http://www.thirstforfiction.com/wp-content/uploads/2014/12/Norwegian-Wood-Haruki-Murakami.jpg",
    report: "",
  },
  {
    title: "The Song of Achillies",
    author: "MM",
    cover:
      "http://www.thirstforfiction.com/wp-content/uploads/2014/12/Norwegian-Wood-Haruki-Murakami.jpg",
    report: "",
  },
  {
    title: "The Song of Achillies",
    author: "MM",
    cover:
      "http://www.thirstforfiction.com/wp-content/uploads/2014/12/Norwegian-Wood-Haruki-Murakami.jpg",
    report: "",
  },
  {
    title: "The Song of Achillies",
    author: "MM",
    cover:
      "http://www.thirstforfiction.com/wp-content/uploads/2014/12/Norwegian-Wood-Haruki-Murakami.jpg",
    report: "",
  },
  {
    title: "The Song of Achillies",
    author: "MM",
    cover:
      "http://www.thirstforfiction.com/wp-content/uploads/2014/12/Norwegian-Wood-Haruki-Murakami.jpg",
    report: "",
  },
  {
    title: "The Song of Achillies",
    author: "MM",
    cover:
      "http://www.thirstforfiction.com/wp-content/uploads/2014/12/Norwegian-Wood-Haruki-Murakami.jpg",
    report: "",
  },
  {
    title: "The Song of Achillies",
    author: "MM",
    cover:
      "http://www.thirstforfiction.com/wp-content/uploads/2014/12/Norwegian-Wood-Haruki-Murakami.jpg",
    report: "",
  },
  {
    title: "The Song of Achillies",
    author: "MM",
    cover:
      "http://www.thirstforfiction.com/wp-content/uploads/2014/12/Norwegian-Wood-Haruki-Murakami.jpg",
    report: "",
  },
  {
    title: "The Song of Achillies",
    author: "MM",
    cover:
      "http://www.thirstforfiction.com/wp-content/uploads/2014/12/Norwegian-Wood-Haruki-Murakami.jpg",
    report: "",
  },
  {
    title: "The Song of Achillies",
    author: "MM",
    cover:
      "http://www.thirstforfiction.com/wp-content/uploads/2014/12/Norwegian-Wood-Haruki-Murakami.jpg",
    report: "",
  },
  {
    title: "The Silent Patient",
    author: "AM",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Publication124/v4/71/24/e9/7124e956-9924-4424-64bc-09cbf082a04a/9781250301710.jpg/100000x100000-999.jpg",
    report: "",
  },
  // Add more books with URLs, reports, and spine styles here
];

const Bookshelf: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [reportContent, setReportContent] = useState<string>("");

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

  const handleBookClick = async (book: Book) => {
    setSelectedBook(book);
    const reportFile = book.report || "template.md";
    const response = await fetch(`/reports/${reportFile}`);
    const text = await response.text();
    setReportContent(text);
  };

  const closeReview = () => {
    setSelectedBook(null);
    setReportContent("");
  };

  return (
    <div className="max-w-2xl mx-auto py-4 flex flex-col min-h-screen">
      <div id="books">
        <div className="section-header-books">
          <span className="section-title-books"> &#123;books&#125; </span>
        </div>
        <div className="bookshelf-container">
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

          {selectedBook && (
            <div className="review-modal">
              <div className="review-content">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {reportContent}
                </ReactMarkdown>
                <button onClick={closeReview}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
