import courses from './courses';
import studyGroups from './studyGroups';

// define types for data that we just imported
type Course = {
    id: number;
    studyGroupId: number;
    title: string;
    keywords: string[];
    eventType: string
}

type StudyGroup = {
    id: number;
    courseId: number;
    title: string;
    keywords: string[];
    eventType: string
}
type SearchEventsOptions = {
    query: number | string;
    eventType: 'courses' | 'groups'
}
// searching through events
// creating a searchEvents() to get an appropriate search query and event types

const searchEvents = (options:SearchEventsOptions ) =>{
    const events:(Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups; 

    return events.filter((event: (Course|StudyGroup)) => {
        if(typeof options.query === 'number') {
            return event.id = options.query;
        }else if(typeof options.query === 'string'){
            return event.keywords.includes(options.query)
        }

    })

}

const searchResults = searchEvents({query:'art', eventType:'courses'});

console.log (searchResults);


// enrolling in Events
// creating enroll() in order to find out courses and study groups
let enrolledEvents:(Course|StudyGroup)[] = [];
const enroll = (event:(Course|StudyGroup)) =>{
    enrolledEvents = [...enrolledEvents,event];
}

enroll(searchResults[0]);

console.log(enrolledEvents);


 
