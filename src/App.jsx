import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
  <h1 className="text-2xl font-bold text-cyan-400">
    PRIYA.AI
  </h1>

  <ul className="hidden md:flex gap-8 text-gray-300">
    <li>
      <a href="#about" className="hover:text-cyan-400">
        About
      </a>
    </li>

    <li>
      <a href="#skills" className="hover:text-cyan-400">
        Skills
      </a>
    </li>

    <li>
      <a href="#projects" className="hover:text-cyan-400">
        Projects
      </a>
    </li>

    <li>
      <a href="#contact" className="hover:text-cyan-400">
        Contact
      </a>
    </li>
  </ul>
</nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-6 min-h-[85vh]">

        <p className="text-cyan-400 mb-4 text-lg">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Priya Sadhu
        </h1>

        <h2 className="text-2xl md:text-3xl text-purple-400 mb-6">
          AI/ML Engineer • Web Developer
        </h2>

        <p className="max-w-2xl text-gray-400 text-lg leading-relaxed">
          BTech student specializing in Artificial
          Intelligence and Machine Learning. Passionate about
          building intelligent applications, modern web platforms,
          and impactful AI solutions.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-cyan-500 rounded-xl hover:scale-105 transition">
            View Projects
          </button>

          <a
  href="/resume.pdf"
  download
  className="px-6 py-3 border border-purple-500 rounded-xl hover:bg-purple-500/20 transition"
>
  Download Resume
</a>
           
        </div>

      </section>
      <div className="flex gap-6 justify-center mt-8 text-3xl">

  <a
    href="https://github.com/yourgithub"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/yourlinkedin"
    target="_blank"
    rel="noreferrer"
    className="hover:text-blue-400 transition"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:yourmail@gmail.com"
    className="hover:text-purple-400 transition"
  >
    <FaEnvelope />
  </a>

</div>
      {/* About Section */}
<section id="about" className="py-20 px-8 bg-gray-950">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-12">
      About <span className="text-cyan-400">Me</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      <div>
        <p className="text-gray-300 text-lg leading-relaxed">
          I am a BTech student in Artificial
          Intelligence and Machine Learning. I enjoy
          building AI-powered applications, solving
          real-world problems, and creating modern
          user-friendly interfaces.
        </p>

        <p className="text-gray-400 mt-6 leading-relaxed">
          My goal is to become a highly skilled AI Engineer,Ml Engineer,Data Analyst,
          and Web Developer capable of building
          impactful intelligent solutions.
        </p>
      </div>

      <div className="bg-black p-8 rounded-2xl border border-gray-800">
        <div className="space-y-4">

          <div className="flex justify-between">
            <span className="text-gray-400">Degree</span>
            <span>BTech AI & ML</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Focus</span>
            <span>AI • ML • Web Dev</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Learning</span>
            <span>Deep Learning</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Goal</span>
            <span>AI Engineer</span>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

{/* Skills Section */}
<section id="skills" className="py-20 px-8 bg-gray-950">

  <h2 className="text-4xl font-bold text-center mb-12">
    My <span className="text-cyan-400">Skills</span>
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Programming */}
    <div className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 transition">
      <h3 className="text-xl font-bold text-cyan-400 mb-4">
        Programming
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li>• Python</li>
        <li>• SQL</li>
        <li>• JavaScript</li>
        <li>• HTML/CSS</li>
        
      </ul>
    </div>

    {/* AI & Machine Learning */}
    <div className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-purple-400 transition">
      <h3 className="text-xl font-bold text-purple-400 mb-4">
        AI & Machine Learning
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li>• Machine Learning</li>
        <li>• Deep Learning</li>
        <li>• Computer Vision</li>
        <li>• Data Analysis</li>
      </ul>
    </div>

    {/* Frameworks */}
    <div className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-green-400 transition">
      <h3 className="text-xl font-bold text-green-400 mb-4">
        Frameworks
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li>• TensorFlow</li>
        <li>• PyTorch</li>
        <li>• Scikit-learn</li>
        <li>• FastAPI</li>
        <li>• React</li>
      </ul>
    </div>

    {/* Cloud */}
    <div className="bg-black p-3 rounded-2xl border border-gray-800 hover:border-orange-400 transition">
      <h3 className="text-xl font-bold text-orange-400 mb-4">
        Cloud
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li>• AWS</li>
      </ul>
    </div>

    {/* Tools */}
    <div className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-pink-400 transition">
      <h3 className="text-xl font-bold text-pink-400 mb-4">
        Tools
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li>• Power BI</li>
        <li>• Git</li>
        <li>• GitHub</li>
        <li>• VS Code</li>
        <li>• Jupyter Notebook</li>
      </ul>
    </div>

    {/* Soft Skills */}
    <div className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-yellow-400 transition">
      <h3 className="text-xl font-bold text-yellow-400 mb-4">
        Soft Skills
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li>• Problem Solving</li>
        <li>• Teamwork</li>
        <li>• Communication</li>
        <li>• Adaptability</li>
      </ul>
    </div>

  </div>

</section>
{/* Projects Section */}
<section id="projects" className="py-20 px-8 bg-gray-950">

  <h2 className="text-4xl font-bold text-center mb-12">
    Featured <span className="text-cyan-400">Projects</span>
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

    {/* Project 1 */}
    <div className="bg-black border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-400 transition">

      <div className="h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-4xl">
        🤖
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          AI Face Skin Analysis
        </h3>

        <p className="text-gray-400 mb-4">
          Detect acne, dark circles, skin tone issues and provide AI-powered recommendations.
        </p>

        <div className="flex gap-2 flex-wrap mb-4">
          <span className="bg-cyan-500/20 px-2 py-1 rounded">Python</span>
          <span className="bg-cyan-500/20 px-2 py-1 rounded">OpenCV</span>
          <span className="bg-cyan-500/20 px-2 py-1 rounded">CNN</span>
        </div>

        <button className="w-full py-2 bg-cyan-500 rounded-lg">
          View Project
        </button>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-black border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-400 transition">

      <div className="h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center text-4xl">
        ❤️
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          Smart ECG AI Detection
        </h3>

        <p className="text-gray-400 mb-4">
          Upload ECG reports and predict abnormalities using machine learning.
        </p>

        <div className="flex gap-2 flex-wrap mb-4">
          <span className="bg-purple-500/20 px-2 py-1 rounded">React</span>
          <span className="bg-purple-500/20 px-2 py-1 rounded">FastAPI</span>
          <span className="bg-purple-500/20 px-2 py-1 rounded">ML</span>
        </div>

        <button className="w-full py-2 bg-purple-500 rounded-lg">
          View Project
        </button>
      </div>
    </div>

    {/* Project 3 */}
    <div className="bg-black border border-gray-800 rounded-2xl overflow-hidden hover:border-green-400 transition">

      <div className="h-48 bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center text-4xl">
        📷
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          AI Attendance System
        </h3>

        <p className="text-gray-400 mb-4">
          Face recognition based attendance management with dashboard and reports.
        </p>

        <div className="flex gap-2 flex-wrap mb-4">
          <span className="bg-green-500/20 px-2 py-1 rounded">OpenCV</span>
          <span className="bg-green-500/20 px-2 py-1 rounded">Python</span>
          <span className="bg-green-500/20 px-2 py-1 rounded">React</span>
        </div>

        <button className="w-full py-2 bg-green-500 rounded-lg">
          View Project
        </button>
      </div>
    </div>

  </div>

</section>
{/* Contact Section */}
<section id="contact" className="py-20 px-8">

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6">
      Contact <span className="text-purple-400">Me</span>
    </h2>

    <p className="text-gray-400 mb-10">
      Let's build something amazing together.
    </p>

    <div className="flex flex-col md:flex-row gap-4 justify-center">

      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-3 rounded-xl bg-gray-900 border border-gray-700"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-3 rounded-xl bg-gray-900 border border-gray-700"
      />

      <button className="px-6 py-3 bg-purple-500 rounded-xl">
        Send Message
      </button>

    </div>

  </div>

</section>
<footer className="border-t border-gray-800 py-8 text-center text-gray-500">
  © 2026 Priya Sadhu | AI/ML Portfolio
</footer>

    </div>
  );
}

export default App;



