import codeImg from "./public/images/code1.jpg";
import codeImg2 from "./public/images/code2.jpg";

// Array of posts
export const posts = [
  {
    title: "Choosing a Programming Language",
    slug: "choosing-programming-language",
    image: "/images/code2.jpg",
    description:
      "A guide to selecting the right programming language based on your goals and interests.",
    categoryId: 2, // Corresponds to the "Language Selection" category
  },
  {
    title: "Learning Resources for Programmers",
    slug: "learning-resources-programmers",
    image: "/images/code3.jpg",
    description:
      "A list of recommended books, websites, and online courses to enhance your programming skills.",
    categoryId: 3, // Corresponds to the "Learning Resources" category
  },
  {
    title: "Getting Started with Programming",
    slug: "getting-started-programming",
    image: "/images/code4.jpg",
    description:
      "This post provides a comprehensive guide on how to get started with programming. It covers the fundamental concepts of programming, such as variables, data types, control flow, and object-oriented programming. You'll also learn about different development environments and popular code editors. The post includes step-by-step instructions for setting up your programming environment on various operating systems, including Windows, macOS, and Linux. Additionally, it provides recommendations for beginner-friendly programming languages like Python and JavaScript. By the end of this post, you'll have a solid understanding of the core principles of programming and be ready to embark on your coding journey.",
    categoryId: 1, // Corresponds to the "Beginner" category
  },
  {
    title: "Choosing a Programming Language",
    slug: "choosing-programming-language",
    description:
      "Are you feeling overwhelmed by the vast array of programming languages available? Don't worry; this post is here to guide you through the process of choosing the perfect programming language for your needs. It takes into account factors such as your career goals, the type of projects you want to work on, and the industry demand for specific languages. Furthermore, it explores the pros and cons of popular programming languages like Python, JavaScript, Java, C++, and Ruby, discussing their applications in web development, data science, mobile app development, and more. After reading this post, you'll have the knowledge to make an informed decision and select the programming language that aligns best with your aspirations.",
    categoryId: 2,
    image: "/images/code5.png", // Corresponds to the "Language Selection" category
  },
  {
    title: "Learning Resources for Programmers",
    slug: "learning-resources-programmers",
    description:
      "As a programmer, continuous learning is essential for your professional growth. This post serves as a comprehensive compilation of top-notch learning resources to aid you in your programming journey. It includes a wide range of online platforms, such as interactive coding tutorials, video courses, and programming forums. You'll discover reputable websites that offer free and paid resources covering various programming languages, frameworks, and technologies. Additionally, it highlights popular coding bootcamps and university programs for individuals seeking more structured learning experiences. Whether you prefer self-paced learning or instructor-led courses, this post has you covered. By exploring the suggested learning resources, you'll be equipped with the tools to level up your programming skills and keep up with the ever-evolving tech industry.",
    categoryId: 3,
    image: "/images/code6.png", // Corresponds to the "Learning Resources" category
  },
  {
    title: "Web Development Best Practices",
    slug: "web-development-best-practices",
    description:
      "In the world of web development, adhering to best practices is vital for building high-quality and maintainable websites. This post dives deep into various aspects of web development, including HTML, CSS, JavaScript, and responsive design. It explains the importance of writing clean and semantic code, optimizing website performance, and ensuring cross-browser compatibility. Moreover, it discusses the principles of user experience (UX) design, accessibility, and search engine optimization (SEO) techniques. With practical examples and real-world case studies, you'll learn how to create robust and user-friendly web applications. By following the best practices outlined in this post, you'll elevate your web development skills and deliver exceptional digital experiences to your users.",
    categoryId: 4,
    image: "/images/code2.jpg", // Corresponds to the "Web Development" category
  },
  {
    title: "Data Science and Machine Learning Fundamentals",
    slug: "data-science-machine-learning-fundamentals",
    description:
      "Data science and machine learning have become integral parts of modern technology. This post provides a comprehensive overview of the fundamental concepts in these fields. It covers topics such as data preprocessing, exploratory data analysis, statistical modeling, and predictive analytics. You'll also dive into the core principles of machine learning, including supervised and unsupervised learning algorithms, model evaluation techniques, and feature selection. Additionally, the post introduces popular data science libraries like Pandas, NumPy, and scikit-learn, as well as frameworks such as TensorFlow and PyTorch. By the end of this post, you'll have a solid foundation in data science and machine learning, ready to tackle real-world problems and build intelligent systems.",
    categoryId: 5,
    image: "/images/code1.jpg", // Corresponds to the "Data Science" category
  },
  // Add more posts as needed...
];
// Add more posts as needed...

// Array of categories
const categories = [
  {
    id: 1,
    name: "Beginner",
  },
  {
    id: 2,
    name: "Language Selection",
  },
  {
    id: 3,
    name: "Learning Resources",
  },
  // Add more categories as needed...
];
