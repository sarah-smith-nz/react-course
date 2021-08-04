import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        '../Images/dan-freeman-hIKVSVKH7No-unsplash.jpg', 
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        '../Images/partha-narasimhan-x0NvSdPk404-unsplash.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];
function AllMeetupsPage() {
    return ( 
        <div>
            <h1>All Meetups</h1>
           <MeetupList meetups={DUMMY_DATA} /> 
        </div>
    )
} //meetups prop because we are expecting that prop in meetupList.js

export default AllMeetupsPage


// {
//   DUMMY_DATA.map((meetup) => {
//       return <li key={meetup.id}>{meetup.title}</li>
//   })
// }