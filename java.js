//リアルタイムフィルター機能

 new Vue({
        el: '#app',
        data: {
            keyword: '',
            users: [
                {
                    id: 1,
                    name: 'ショタ',
                    email: '１１歳',
                    imageUrl:'https://pics.prcm.jp/fe5c8c8e14484/81620617/png/81620617_220x220.png'
                },
                {
                    id: 2,
                    name: '男の娘',
                    email: '１７歳',
                    imageUrl:'https://pics.prcm.jp/53193/29463263/jpeg/29463263_220x217.jpeg'
                },
                {
                    id: 3,
                    name: '少年',
                    email: '１４歳',
                    imageUrl:'https://dic.nicovideo.jp/oekaki/18570.png'
                },
                {
                    id: 4,
                    name: 'かわいい系男子',
                    email: '２４歳',
                    imageUrl:'https://livedoor.blogimg.jp/hypnosismic_matome/imgs/d/e/deed083b.png'
                },
                {
                    id: 5,
                    name: '思春期ショタ',
                    email: '１３歳',
                    imageUrl: 'https://pbs.twimg.com/profile_images/1015507122585391104/3xTl9k_J.jpg' 
                },
            ]
        },
        computed: {
            filteredUsers: function() {

                var users = [];

                for(var i in this.users) {

                    var user = this.users[i];

                    if(user.name.indexOf(this.keyword) !== -1 ||
                        user.email.indexOf(this.keyword) !== -1) {

                        users.push(user);
  }

                }

                return users;

            }
        }
    });