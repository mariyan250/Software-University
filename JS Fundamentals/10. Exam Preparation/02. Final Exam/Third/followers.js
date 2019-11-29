function solve(input) {
    let obj = {}

    for (const line of input) {
        let command = line.split(": ")[0];

        switch (command) {
            case 'New follower':
                let followerUsername = line.split(": ")[1];

                if (!obj.hasOwnProperty(followerUsername)) {
                    obj[followerUsername] = {
                        likes: 0,
                        comments: 0
                    }
                }

                break;

            case 'Like':
                let username = line.split(": ")[1];
                let likesCount = Number(line.split(": ")[2]);

                if (obj.hasOwnProperty(username)) {
                    obj[username].likes += likesCount;
                } else {
                    obj[username] = {
                        likes: likesCount,
                        comments: 0
                    }
                }

                break;

            case 'Comment':
                let user = line.split(": ")[1];

                if (obj.hasOwnProperty(user)) {
                    obj[user].comments += 1;
                } else {
                    obj[user] = {
                        likes: 0,
                        comments: 1
                    }
                }

                break;

            case 'Blocked':
                let blockedUsername = line.split(": ")[1];

                if (obj.hasOwnProperty(blockedUsername)) {
                    delete obj[blockedUsername];
                } else {
                    console.log(`${blockedUsername} doesn't exist.`);
                }

        }
    }

    console.log(`${Object.keys(obj).length} followers`);

    Object.keys(obj).sort((a, b) => {
            return obj[b].likes - obj[a].likes || a.localeCompare(b);
        })
        .forEach(follower => {
            console.log(`${follower}: ${obj[follower].likes + obj[follower].comments}`);
        })
}
