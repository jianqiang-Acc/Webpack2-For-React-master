/**
 * Created by jianqiang.fan on 7/12/2017.
 */
module.exports = function() {
    var data = { users: [] }
    // Create 1000 users
    for (var i = 0; i < 1000; i++) {
        data.users.push({ id: i, name: 'user' + i })
    }
    return data
}