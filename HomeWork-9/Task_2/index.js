var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                let user = users.find(
          item => item.name === userName
        )
        user ? user.present = present : null
            },
            showPresent () {
                return users.filter(item => item.present)
                            .map(user => user.name)
            },
            showAbsent () {
                return users.filter(item => !item.present)
                            .map(user => user.name)
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()