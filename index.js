"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = __importDefault(require("./courses"));
const studyGroups_1 = __importDefault(require("./studyGroups"));
// searching through events
// creating a searchEvents() to get an appropriate search query and event types
const searchEvents = (options) => {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === 'number') {
            return event.id = options.query;
        }
        else if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
};
const searchResults = searchEvents({ query: 'art', eventType: 'courses' });
console.log(searchResults);
// enrolling in Events
// creating enroll() in order to find out courses and study groups
let enrolledEvents = [];
const enroll = (event) => {
    enrolledEvents = [...enrolledEvents, event];
};
enroll(searchResults[0]);
console.log(enrolledEvents);
