import fakeDataProvider from 'ra-data-fakerest';

const dataProvider = fakeDataProvider({
    users: [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },

        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
    ],
    posts: [
        {
            userId: 1, id: 1,
            title: 'usage',
            body: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. ',
            created_at: '2020-03-04',
            published_at: '2020-03-04',
            tag_ids: [1, 2],
            nb_views: 12,


        },
        {
            userId: 1, id: 2,
            title: 'common examples',
            body: 'Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).',
            created_at: '2020-08-11',
            published_at: '2020-08-11',
            tag_ids: [1, 3],
            nb_views: 4,
        },

        {
            userId: 2, id: 3,
            title: 'translation',
            body: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
            created_at: '2018-06-25',
            published_at: '2018-06-25',
            tag_ids: [1, 2, 3],
            nb_views: 18,
        },
        {
            userId: 2, id: 4,
            title: 'variants and technical information',
            body: 'In 1985 Aldus Corporation launched its first desktop publishing program Aldus PageMaker for Apple Macintosh computers, released in 1987 for PCs running Windows 1.0. ',
            created_at: '2008-10-05',
            published_at: '2008-10-05',
            tag_ids: [3],
            nb_views: 24,
        },
    ],
    comments: [
        {
            postId: 1,
            id: 1,
            name: "Ali Mohammadi",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
            published_at: '2018-06-25',
        },
        {
            "postId": 1,
            "id": 2,
            "name": "Reza niyazi",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
            published_at: '2015-11-05',
        },
        {
            "postId": 2,
            "id": 3,
            "name": "Ahamad shamloo",
            "email": "Dallas@ole.me",
            "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
            published_at: '2015-01-08',
        },
        {
            "postId": 2,
            "id": 4,
            "name": "iman jalali",
            "email": "Mallory_Kunze@marie.org",
            "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
            published_at: '2016-10-10',
        },
    ],
    tags: [
        {id: 1, name: 'foo'},
        {id: 2, name: 'bar'},
        {id: 3, name: 'Stud'},
    ],
    // pictures: [
    //
    //     {
    //         id: 3,
    //         "title": "accusamus beatae ad facilis cum similique qui sunt",
    //         "url": "https://via.placeholder.com/600/92c952",
    //         "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    //     },
    //     {
    //         "albumId": 1,
    //         "id": 2,
    //         "title": "reprehenderit est deserunt velit ipsam",
    //         "url": "https://via.placeholder.com/600/771796",
    //         "thumbnailUrl": "https://via.placeholder.com/150/771796"
    //     },
    //     {
    //         "albumId": 1,
    //         "id": 3,
    //         "title": "officia porro iure quia iusto qui ipsa ut modi",
    //         "url": "https://via.placeholder.com/600/24f355",
    //         "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    //     },
    //     {
    //         "albumId": 1,
    //         "id": 4,
    //         "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    //         "url": "https://via.placeholder.com/600/d32776",
    //         "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    //     },
    // ],
})

export default dataProvider;