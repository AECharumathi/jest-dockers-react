import React from 'react';
import { create } from 'react-test-renderer';

import App from "../App";
import Courses from "../components/Courses";
import EnquiryModal from "../components/EnquiryModal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserEnquired from "../components/UserEnquired";
import UserForum from "../components/UserForum";


describe('App Component Snapshot', ()=>{
    test("App", ()=>{
        let appComponent = create(<App/>);
        expect(appComponent.toJSON()).toMatchSnapshot();
    })
})

describe('Header Component Snapshot', ()=>{
    test("Header", ()=>{
        let header = create(<Header/>);
        expect(header.toJSON()).toMatchSnapshot();
    })
})

// describe('Courses Component Snapshot', ()=>{
//     test("Courses", ()=>{
//         let courses = create(<Courses/>);
//         expect(courses.toJSON()).toMatchSnapshot();
//     })
// })

// describe('EnquiryModal Component Snapshot', ()=>{
//     test("EnquiryModal", ()=>{
//         let enquiryModal = create(<EnquiryModal/>);
//         expect(enquiryModal.toJSON()).toMatchSnapshot();
//     })
// })


// describe('UserEnquired Component Snapshot', ()=>{
//     test("UserEnquired", ()=>{
//         let userEnquired = create(<UserEnquired/>);
//         expect(userEnquired.toJSON()).toMatchSnapshot();
//     })
// })

// describe('UserForum Component Snapshot', ()=>{
//     test("UserForum", ()=>{
//         let userForum = create(<UserForum/>);
//         expect(userForum.toJSON()).toMatchSnapshot();
//     })
// })

describe('Footer Component Snapshot', ()=>{
    test("Footer", ()=>{
        let footer = create(<Footer/>);
        expect(footer.toJSON()).toMatchSnapshot();
    })
})