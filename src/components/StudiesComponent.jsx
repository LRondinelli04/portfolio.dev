import { useState } from "react";
import LinkedInIcon from "@/components/icons/LinkedinIcon";
import CertificationsIcon from "@/components/icons/Studies";
import SocialPill from "@/components/SocialPill";

const CertificationsComponent = ({ certifications }) => {
  const [openCertification, setOpenCertification] = useState(null);

  const toggleSubCertifications = (index) => {
    setOpenCertification(openCertification === index ? null : index);
  };

  const transitionStyles = {
    transition: "max-height 500ms ease-in-out, opacity 500ms ease-in-out",
    overflow: "hidden",
    opacity: 0,
    maxHeight: 0,
  };

  const openStyles = {
    opacity: 1,
    maxHeight: "1000px", // Ajusta esto según sea necesario
  };

  return (
    <div className="flex flex-col gap-y-16">
      {certifications.map((certification, index) => (
        <article
          key={index}
          className="flex flex-col space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
        >
          <div className="w-full md:w-1/2">
            <div className="relative flex flex-col items-center transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <img
                alt={certification.title}
                className="object-cover w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                loading="lazy"
                src={certification.image}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {certification.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-400">
              {certification.issuer} - {certification.date}
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-400">
              {certification.description}
            </p>
            <div className="flex flex-col md:flex-row items-start justify-start mt-4 gap-x-4 gap-y-4">
              <SocialPill
                href={certification.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CertificationsIcon className="size-4" />
                Certificado
              </SocialPill>
              <SocialPill
                href={certification.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="size-4" />
                <p> Publicación </p>
              </SocialPill>

              {/* Botón Ver más para desplegar sub-certificaciones */}
              {certification.subCertifications && (
                <button
                  className={
                    "inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black w-max"
                  }
                  onClick={() => toggleSubCertifications(index)} // REACT maneja el evento
                >
                  {openCertification === index ? "Ver menos" : "Ver cursos"}
                </button>
              )}
            </div>

            {/* Mostrar sub-certificaciones si están disponibles y activas */}
            <div
              style={{
                ...transitionStyles,
                ...(openCertification === index ? openStyles : {}),
              }}
            >
              {certification.subCertifications &&
                openCertification === index && (
                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                      Certificados de Cursos:
                    </h4>
                    <ul className="list-disc ml-4 text-gray-700 dark:text-gray-400">
                      {certification.subCertifications.map(
                        (subCert, subIndex) => (
                          <li key={subIndex} className="mt-5">
                            <p>
                              <strong>{subCert.title}</strong> - {subCert.date}
                            </p>
                            <div className="flex items-center mt-2">
                              <SocialPill
                                href={subCert.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <CertificationsIcon className="size-4" />
                                Certificado
                              </SocialPill>
                              <span className="ml-2">
                                <SocialPill
                                  href={subCert.linkedinLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <LinkedInIcon className="size-4" />
                                  Publicación
                                </SocialPill>
                              </span>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CertificationsComponent;