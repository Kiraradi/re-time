import React, {useState} from 'react';

export interface Ivideo {
    url: string
    date: string
}

export interface IVideoList {
    list: Ivideo[]
}

export interface IDate {
    date: string
}

function DateTime(props: IDate) {
    return (
        <p className="date">{props.date}</p>
    )
}

function DateTimePretty(props: IDate) {
    const currentDate = new Date();
    const currentMilliseconds = currentDate.getTime();

    const date = new Date(props.date);
    const milliseconds = date.getTime();

    const differenceMilliseconds = currentMilliseconds - milliseconds;
    const minutes = differenceMilliseconds / 60000;

    if (minutes < 60) {
        return <DateTime date={`${Math.floor(minutes)} минут назад`} />
    } 

    const hours = minutes / 60;
    
    if (hours < 24) {
        return <DateTime date={`${Math.floor(hours)} часов назад`} />
    } 
    
    const days = hours / 24;
    return <DateTime date={`${Math.floor(days)} дней назад`} />
}

function Video(props: Ivideo) {
    return (
        <div className="video">
            <iframe src={props.url}  
                allow="autoplay; encrypted-media" 
                allowFullScreen
                frameBorder="0"
            ></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}


function VideoList(props: IVideoList) {
    return props.list.map((item, i) => <Video url={item.url} date={item.date} key={i} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-01-06 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-01-07 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-01-06 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-01-04 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-01-07 21:01:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}