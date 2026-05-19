import profile from './assets/profile.jpeg'

function App() {

  const skills = [
    "SQL",
    "Python",
    "Power BI",
    "Excel",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "MySQL",
    "GitHub",
    "Power Query"
  ]

  const projects = [
    {
      emoji: "📊",
      title: "Mobile Sales Dashboard",
      description:
        "Analyzed ₹769M+ mobile sales data to identify customer behavior, regional performance, and top-selling mobile brands using Power BI.",
      tech: "Power BI • DAX • Power Query",
      metrics: ["₹769M+ Sales", "19K Orders", "4K Transactions"],
      github: "https://github.com/Adarshjm123/mobile-sales-dashboard"
    },

    {
      emoji: "🏦",
      title: "Banking Risk Analysis",
      description:
        "Performed banking customer transaction analysis to detect fraud patterns, customer churn, and high-risk financial behavior.",
      tech: "SQL • MySQL • Power BI",
      metrics: ["10K+ Records", "Fraud Detection", "Churn Analysis"],
      github: "https://github.com/Adarshjm123/Banking-Customer-Transaction-Risk-Analysis"
    },

    {
      emoji: "🏥",
      title: "Hospital ER Dashboard",
      description:
        "Built a healthcare analytics dashboard to monitor patient wait times, demographics, department referrals, and operational KPIs.",
      tech: "Power BI • Excel",
      metrics: ["Patient Insights", "Wait Time KPIs", "Operational Analytics"],
      github: "https://github.com/Adarshjm123/Hospital-Emergency-Room-Dashboard"
    }
  ]

  return (

    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden scroll-smooth">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-zinc-800 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
            Adarsh
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

        <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full top-20 left-10"></div>

        <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* PROFILE IMAGE */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30 rounded-full"></div>

              <img
                src={profile}
                alt="Adarsh"
                className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30"
              />

            </div>

          </div>

          {/* HERO CONTENT */}

          <div className="text-center md:text-left">

            <p className="text-cyan-400 uppercase tracking-[0.35em] mb-5 text-sm">
              Data Analytics Portfolio
            </p>

            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8">
              Hi, I'm <span className="text-cyan-400">Adarsh J M</span>
            </h1>

            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
              Results-driven Data Analyst skilled in SQL, Power BI, Python, and Excel with experience in transforming complex datasets into interactive dashboards, analytical reports, and actionable business insights.
            </p>

            <div className="mt-12 flex flex-wrap gap-5 justify-center md:justify-start">

              <a
                href="#projects"
                className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-300 transition duration-300 shadow-lg shadow-cyan-500/20"
              >
                View Projects
              </a>

              <a
  href="/Adarsh_J_M_Data_Analyst_Resume.pdf"
  download
  className="border border-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition duration-300"
>
  Download Resume
</a>

            </div>

            {/* CONTACT INFO */}

            <div className="mt-10 space-y-4 text-gray-300 text-lg">

              <p>
                📧 jmadarsh8@gmail.com
              </p>

              <p>
                📱 6361951130
              </p>

              <a
                href="https://www.linkedin.com/in/adarsh-j-m"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                🔗 LinkedIn Profile
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-10 text-cyan-400 text-center">
            About Me
          </h2>

         <p className="text-gray-300 text-lg leading-9">

  Data Analytics and Business Intelligence enthusiast with hands-on experience in SQL,
  Power BI, Python, and Excel.

  Skilled in building interactive dashboards, analytical reports,
  and business-focused data solutions that transform raw data into actionable insights.

  Experienced in developing projects related to sales analytics,
  banking risk analysis, and healthcare dashboards with a strong focus on problem-solving
  and data-driven decision making.

</p>

        </div>

      </section>

      {/* SKILLS SECTION */}

      <section id="skills" className="py-24 px-6 bg-zinc-950">

        <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400">
          Technical Skills
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-lg"
            >

              <h3 className="text-lg font-semibold">
                {skill}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* PROJECTS SECTION */}

      <section id="projects" className="py-24 px-6">

        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
          Featured Projects
        </h2>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 hover:-translate-y-3 shadow-2xl"
            >

              <div className="h-56 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-7xl">
                {project.emoji}
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-5">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">

                  {project.metrics.map((metric, idx) => (

                    <span
                      key={idx}
                      className="bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-xl text-sm border border-cyan-500/20"
                    >
                      {metric}
                    </span>

                  ))}

                </div>

                <p className="text-cyan-400 mb-7 font-medium">
                  {project.tech}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition duration-300"
                >
                  View GitHub
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>
{/* EDUCATION SECTION */}

{/* EDUCATION SECTION */}

<section id="education" className="py-24 px-6 bg-zinc-950">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
      Education & Internship
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* MCA */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

        <p className="text-cyan-400 mb-3 text-sm uppercase tracking-widest">
          2024 - 2025
        </p>

        <h3 className="text-2xl font-bold mb-4">
          Master of Computer Applications (MCA)
        </h3>

        <p className="text-gray-400 leading-7">
          VTU CPGS Mysore
        </p>

      </div>

      {/* BCA */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

        <p className="text-cyan-400 mb-3 text-sm uppercase tracking-widest">
          2020 - 2023
        </p>

        <h3 className="text-2xl font-bold mb-4">
          Bachelor of Computer Applications (BCA)
        </h3>

        <p className="text-gray-400 leading-7">
          Focused on Computer Applications,
          Programming, Database Management, and Software Development.
        </p>

      </div>

      {/* INTERNSHIP */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

        <p className="text-cyan-400 mb-3 text-sm uppercase tracking-widest">
          Dec 2024 - Jan 2025
        </p>

        <h3 className="text-2xl font-bold mb-4">
          Python [AI/ML] Intern
        </h3>

        <p className="text-gray-400 leading-7 mb-4">
          Dotch Endeavours Pvt. Ltd (Remote)
        </p>

        <p className="text-gray-500 leading-7">
          Worked on Python-based data analysis and visualization projects using
          Pandas, NumPy, Matplotlib, and Tkinter while performing exploratory data analysis.
        </p>

      </div>

    </div>

  </div>

</section>


{/* CERTIFICATIONS SECTION */}

{/* CERTIFICATIONS SECTION */}

<section id="certifications" className="py-24 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
      Certifications
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* CERT 1 */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

        <h3 className="text-2xl font-bold mb-4">
          SQL
        </h3>

        <p className="text-gray-400 mb-6">
          HackerRank certification focused on SQL queries,
          joins, aggregations, and database problem solving.
        </p>

        <div className="flex justify-between items-center">

          <span className="text-cyan-400">
            HackerRank
          </span>

          <a
            href="https://www.hackerrank.com/certificates/iframe/1540bd3b887c"
            target="_blank"
            className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            View
          </a>

        </div>

      </div>

      {/* CERT 2 */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

        <h3 className="text-2xl font-bold mb-4">
          Power BI for Beginners
        </h3>

        <p className="text-gray-400 mb-6">
          Learned dashboard creation, KPI reporting,
          data visualization, and Power BI fundamentals.
        </p>

        <div className="flex justify-between items-center">

          <span className="text-cyan-400">
            Simplilearn
          </span>

          <a
            href="https://simpli-web.app.link/e/3YHm7ZO9f3b"
            target="_blank"
            className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            View
          </a>

        </div>

      </div>

      {/* CERT 3 */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

        <h3 className="text-2xl font-bold mb-4">
          Python Libraries for Data Science
        </h3>

        <p className="text-gray-400 mb-6">
          Covered Pandas, NumPy, Matplotlib,
          and data analysis workflows using Python.
        </p>

        <div className="flex justify-between items-center">

          <span className="text-cyan-400">
            Simplilearn
          </span>

          <a
            href="https://simpli-web.app.link/e/4naBzbYBg3b"
            target="_blank"
            className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            View
          </a>

        </div>

      </div>

      {/* CERT 4 */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

        <h3 className="text-2xl font-bold mb-4">
          Data Analytics Certification
        </h3>

        <p className="text-gray-400 mb-6">
          Learned data analytics concepts,
          visualization techniques, and business insights generation.
        </p>

        <div className="flex justify-between items-center">

          <span className="text-cyan-400">
            Tutedude
          </span>

          <a
            href="https://upskill.tutedude.com/certificate/TD-ADAR-DA-2011"
            target="_blank"
            className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            View
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* CONTACT SECTION */}

      <section id="contact" className="py-24 px-6 bg-zinc-950">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            Contact
          </h2>

          <p className="text-gray-400 text-lg mb-12 leading-8">
            Open to internships, entry-level Data Analyst roles,
            Business Intelligence opportunities, and analytics-based projects.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">

            <a
              href="mailto:jmadarsh8@gmail.com"
              className="bg-zinc-900 border border-zinc-800 px-8 py-5 rounded-2xl hover:border-cyan-400 transition duration-300"
            >
              Email
            </a>

            <a
              href="https://github.com/Adarshjm123"
              target="_blank"
              className="bg-zinc-900 border border-zinc-800 px-8 py-5 rounded-2xl hover:border-cyan-400 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/adarsh-j-m"
              target="_blank"
              className="bg-zinc-900 border border-zinc-800 px-8 py-5 rounded-2xl hover:border-cyan-400 transition duration-300"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-zinc-800 py-8 text-center text-gray-500">
        © 2026 Adarsh • Data Analytics Portfolio
      </footer>

    </div>

  )
}

export default App