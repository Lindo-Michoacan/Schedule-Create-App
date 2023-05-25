import Employee from '../components/Employee'

export default function AddSchedule(props) {
const { newEmployee } = props

  console.log('currentEmployees', newEmployee);
  return (
      <section className="current-schedule-section">
      <h2>Add Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thurday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            <Employee employees={newEmployee} />
          </tbody>
        </table>
      </section>
  )
}