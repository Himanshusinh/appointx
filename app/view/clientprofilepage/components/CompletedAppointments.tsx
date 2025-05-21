import AppointmentTable from "./AppointmentTable";
import AppointmentTableDetails from "./AppointmentTableDetails";

const CompletedAppointments = () => {
    return <div>
        <AppointmentTable serviceprovider='serviceprovider' service='service' location='location' timing='timing' payment='payment' status='status' data='data'  />
            <AppointmentTableDetails image="/clientprofile/Frame 2610634.png" username='mira Khan' servicetype='haircut' date="20 oct 2025" time="15:32pm" status='schedule' paymenttype="online" />
            <AppointmentTableDetails image="/clientprofile/Frame 2610634.png" username='mira Khan' servicetype='haircut' date="20 oct 2025" time="15:32pm" status='schedule' paymenttype="online" />
        </div>;
  };
  
  export default CompletedAppointments;