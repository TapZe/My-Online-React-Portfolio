const Experience = () => {
  return (
    <main className="flex-grow flex self-center items-center my-4 md:px-32 lg:px-48 xl:px-56">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-10">Experience</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">
                September 2023 - November 2023
              </time>
              <div className="text-lg font-black">
                Full-Stack Developer - PT Duta Banua Banjar · Internship
              </div>
              Led the development of a sophisticated advertising application
              known as Digital Iklan Radar Banjarmasin, which streamlined the
              product promotion request process for readers of EPaper Radar
              Banjarmasin. This initiative transformed how businesses interact
              with print media by enabling clients to book ad space directly
              from their offices, significantly enhancing convenience and
              accessibility. Additionally, contributed to the development of an
              intuitive application for accessing newspapers through Digital
              Radar Banjarmasin, allowing users to purchase newspapers via a
              user-friendly web interface and receive e-newspaper editions
              instantly. This approach improved the overall newspaper reading
              experience by integrating seamless purchase options with the
              flexibility of digital reading. The project leveraged a diverse
              skill set, including Laravel, Payment Gateways, Full-Stack
              Development, REST APIs, Software Deployment, Software
              Infrastructure, PHP, PhpMyAdmin, HTML5, CSS, Bootstrap, and
              JavaScript.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">May 2024</time>
              <div className="text-lg font-black">
                Full-Stack Developer - PT Duta Banua Banjar · Internship
              </div>
              <ul className="list-disc ml-5">
                <li>
                  Ensured high server uptime through continuous monitoring &
                  maintenance for 1 month, delivering reliable performance.
                </li>
                <li>
                  Achieved 100% data safety with regular backups enabling full
                  recovery for two production websites.
                </li>
                <li>
                  Migrated two sub-domains and two websites with zero user
                  disruption.
                </li>
                <li>
                  Optimized a critical workflow on Radar Banjarmasin Digital,
                  improving load times by ~25% and boosting engagement.
                </li>
              </ul>
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">November 2024 - Present</time>
              <div className="text-lg font-black">
                Full-Stack Developer - PT Pelinitra Gunawan
              </div>
              <ul className="list-disc ml-5">
                <li>
                  Built a production-tracking module for 200+ staff with 1-click
                  Sales-Order ➔ PDO conversion and automated task calculations,
                  cutting manual effort by ~50%.
                </li>
                <li>
                  Consolidated three legacy modules into a single Delivery Order
                  system, reducing DB complexity by 58% (12→5 tables) and
                  boosting performance.
                </li>
                <li>
                  Developed a responsive 2-step Food Coupon Web App and
                  engineered resign-reemployment logic, streamlining voucher
                  distribution for 200+ employees.
                </li>
                <li>
                  Designed SQ, QP & SO modules with flexible item sourcing,
                  automated minimum-price checks, email approvals, and 3-step
                  Excel batch uploads for speed and accuracy.
                </li>
              </ul>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Experience;
