import React from 'react';
import { Link } from 'react-router-dom';

const PatientCard = ({ patient }) => {
  const getLocationColor = (location) => {
      switch (location) {
            case 'ICU':
                    return 'red';
                          case 'ER':
                                  return 'orange';
                                        case 'Ward':
                                                return 'blue';
                                                      default:
                                                              return 'gray';
                                                                  }
                                                                    };

                                                                      return (
                                                                          <Link to={`/patient/${patient.id}`} className="patient-card">
                                                                                <div className="patient-card-header">
                                                                                        <h3>{patient.name}</h3>
                                                                                                <span 
                                                                                                          className="location-tag"
                                                                                                                    style={{ backgroundColor: getLocationColor(patient.location) }}
                                                                                                                            >
                                                                                                                                      {patient.location}
                                                                                                                                              </span>
                                                                                                                                                    </div>
                                                                                                                                                          
                                                                                                                                                                <div className="patient-details">
                                                                                                                                                                        <p><strong>Age:</strong> {patient.age}</p>
                                                                                                                                                                                <p><strong>Gender:</strong> {patient.gender}</p>
                                                                                                                                                                                        <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
                                                                                                                                                                                                <p><strong>Admitted:</strong> {new Date(patient.admissionDate).toLocaleDateString()}</p>
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                            
                                                                                                                                                                                                                  <div className="patient-card-footer">
                                                                                                                                                                                                                          <span className="doctor-assigned">Dr. {patient.assignedDoctor}</span>
                                                                                                                                                                                                                                  <span className="task-count">
                                                                                                                                                                                                                                            {patient.tasks.length} Tasks
                                                                                                                                                                                                                                                    </span>
                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                              </Link>
                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                export default PatientCard;