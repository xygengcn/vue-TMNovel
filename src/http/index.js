import axios from 'axios'

const config = {
        host: "http://localhost",
        listUrl: "/novel/src/api/all.php",
        infoUrl: "/novel/src/api/info.php",
        chaptersUrl: "/novel/src/api/list.php",
        ContentUrl: "/novel/src/api/content.php"

    }
    // const config = {
    //     host: "https://api.xygeng.cn",
    //     listUrl: "/novel/api/all.php",
    //     infoUrl: "/novel/api/info.php",
    //     chaptersUrl: "/novel/api/list.php",
    //     ContentUrl: "/novel/api/content.php"
    // }

const get = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.get(url, data).then((response) => {
            resolve(response.data)
        }, (response) => {
            reject(response)
            console.log(response)
            bus.$message({
                message: '请求超时，请检查网络',
                type: 'warning'
            })
        })
    })
}
const http = {
    config,
    get
}
if (config.host != "") {
    axios.defaults.baseURL = config.host;
}
export default http