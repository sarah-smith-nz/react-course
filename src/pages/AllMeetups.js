import { useState, useEffect} from 'react'
import MeetupList from '../components/meetups/MeetupList'

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         '../Images/dan-freeman-hIKVSVKH7No-unsplash.jpg', 
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         '../Images/partha-narasimhan-x0NvSdPk404-unsplash.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];
function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
      setIsLoading(true)
      fetch(
        'https://react-getting-started-dd067-default-rtdb.firebaseio.com/meetups.json'
      )
      .then(response => {
       return response.json()
      }) 
      .then(data => {

        const meetups = []

        for (const key in data) {
          const meetup = {
          id: key,
          ...data[key]
          }

          meetups.push(meetup)
        }
        setIsLoading(false)
        setLoadedMeetups(meetups)
      })

    }, [])
 

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
    }
  
  
    return ( 
        <div>
            <h1>All Meetups</h1>
           <MeetupList meetups={loadedMeetups} /> 
        </div>
    )
} //meetups prop because we are expecting that prop in meetupList.js

export default AllMeetupsPage


// {
//   DUMMY_DATA.map((meetup) => {
//       return <li key={meetup.id}>{meetup.title}</li>
//   })
// }