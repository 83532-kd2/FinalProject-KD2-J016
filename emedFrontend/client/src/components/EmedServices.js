import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserMd, faFileMedical } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <div className="flex justify-around flex-wrap">
        <div className="text-center flex-1 p-4 max-lg:mx-auto">
          <FontAwesomeIcon icon={faCalendarAlt} size="3x" className="mb-4" />
          <h4 className="text-lg font-semibold">Online Appointment</h4>
          <p className="text-gray-600">
            Stay safe at home while receiving top-quality medical care. appointments with certified physicians.
          </p>
        </div>
        <div className="text-center flex-1 p-4 max-lg:mx-auto">
          <FontAwesomeIcon icon={faUserMd} size="3x" className="mb-4" />
          <h4 className="text-lg font-semibold">Qualified Doctors</h4>
          <p className="text-gray-600">
            A qualified doctor possesses a comprehensive understanding of medical sciences.
          </p>
        </div>
        <div className="text-center flex-1 p-4 max-lg:mx-auto">
          <FontAwesomeIcon icon={faFileMedical} size="3x" className="mb-4" />
          <h4 className="text-lg font-semibold">Health Record</h4>
          <p className="text-gray-600">
            Securely store and access your medical records online. Share them with your doctors during consultations for a more informed diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
