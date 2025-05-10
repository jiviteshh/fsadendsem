import "./styles/Certifications.css"

function Certifications() {
  const certifications = [
    {
      logo: "/aws.png",
      title: "AWS Certified Cloud Practitioner",
      company: "Amazon Web Services",
      viewLink: "https://1drv.ms/i/c/75a53990a1f2fd94/EdK3_4iwKo9KnY6oJ2oYeuIBaFHxVx-B_BldrqttJC7aeg?e=tJXBPy",
    },
    {
      logo: "/oracle.png",
      title: "Oracle Java SE 11 Developer",
      company: "Oracle",
      viewLink: "https://1drv.ms/i/c/75a53990a1f2fd94/EXcU336380JJoQr6J4aiodUBqfAtY4RGEAFbEsC-9InJ1g?e=QlwlEI",
    },
    {
      logo: "/redhat.png",
      title: "Red Hat Certified System Administrator",
      company: "Red Hat",
      viewLink: "https://1drv.ms/i/c/75a53990a1f2fd94/EXcFgi6PiDNPilWVjJiOa4ABxNL91KJ2DxolLYh-pSgWNg?e=Pgye8s",
    },
  ]

  return (
    <section className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>

      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <div className="cert-logo">
              <img src={cert.logo || "/placeholder.svg"} alt={`${cert.company} logo`} />
            </div>

            <div className="cert-info">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-company">{cert.company}</p>
            </div>

            <a href={cert.viewLink} className="view-button" target="_blank" rel="noopener noreferrer">
              <svg
                className="cert-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              VIEW
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
