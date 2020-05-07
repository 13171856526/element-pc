// import Mock from 'mockjs';
import Mock from 'mockjs'
// let {
//     log
// } = console;
// Mock.Random();
const Random = Mock.Random;

// 用户
const testData = () => {
    let testData = [];
    for (let i = 0; i < 5; i++) {
        let userList = {
            "id": i + 1,
            // 姓名
            "userName": Random.cname(),
            // 日期
            "bornDate": Random.date('yyyy-MM-dd'),
            // 手机
            "phone": Mock.mock(/^1[0-9]{10}$/),
            // 地址
            "Address": Random.county(true),
            "status": Random.integer(0, 1)

        }
        testData.push(userList)
    }

    return testData;
}
Mock.mock('/api/users', testData())


// 文章
const wenzhangData = () => {
    let wenzhangData = [];
    for (var i = 0; i < 5; i++) {
        let wenzhang = {
            "id": i + 1,
            "userName": Random.cname(),
            "bornDate": Random.date('yyyy-MM-dd'),
            "status": Random.integer(0, 1),
            "biaoti": Random.csentence()
        }
        wenzhangData.push(wenzhang);
    }
    return wenzhangData;
}
Mock.mock('/api/wenzhang', wenzhangData())