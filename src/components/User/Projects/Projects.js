import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getprojects } from "../../../actions/projectAction";
import ModalImage from "react-modal-image";
import { domainName } from "../../../apis/serverApi";
import './Projects.scss';

const Projects = ({ reff }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getprojects());
  }, [dispatch]);

  // const project = projects.map((proj) => {
  //   return (
  //     <div
  //       key={proj._id}
  //       className=""
  //     >
  //       <div className="">
  //         <ModalImage
  //           small={domainName + proj.projectImage}
  //           large={domainName + proj.projectImage}
  //           alt={proj.title}
  //         />
  //       </div>
  //       <div className="">
  //         <h4 className="">{proj.title}</h4>
  //         <p className="grey-text">{proj.description}</p>
  //         <p
  //           className=""
  //           style={{
  //             fontSize: "14px",
  //             color: "#55107E",
  //             display: "inline",
  //           }}
  //         >
  //           Technologies:
  //         </p>
  //         <p style={{ fontSize: "12px" }}> {proj.technologies}</p>
  //         {proj.haveLink && (
  //           <button
  //             className=""
  //             target="_blank"
  //             rel="noreferrer"
  //             href={proj.link}
  //           >
  //             <i className="fa fa-clone left"></i> View project code
  //           </button>
  //         )}
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <section
      id="projects"
      ref={reff}
      className="text-center py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="">Projects</h2>

        <div className="project-items">
          {projects.map((proj, i) => {
            return(
              <div
                key={proj._id}
                className="project"
              >
                <div className="img-section">
                  <ModalImage
                    small={domainName + proj.projectImage}
                    large={domainName + proj.projectImage}
                    alt={proj.title}
                  />
                </div>
                <div className="text-section">
                  <h4 className="title">{proj.title}</h4>
                  <p className="grey-text">{proj.description}</p>
                  <p
                    className=""
                    style={{
                      fontSize: "14px",
                      color: "#55107E",
                      display: "inline",
                    }}
                  >
                    Technologies:
                  </p>
                  <p style={{ fontSize: "12px" }}> {proj.technologies}</p>
                  {proj.haveLink && (
                    <a
                      className=""
                      target="_blank"
                      rel="noreferrer"
                      href={proj.link}
                    >
                      <i className="fa fa-clone left"></i> View project code
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
